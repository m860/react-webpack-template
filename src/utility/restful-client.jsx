/**
 * Created by jean.h.ma on 5/13/16.
 */
import agent from "superagent";
import appConfig from "config/app.config.json";
import * as cache from "utility/storage.jsx";
import keys from "config/keys.config.json";
// import strings from "config/strings.config.json";
import * as handler from "utility/handler.jsx";
import md5 from "md5";

let genKey = (url, data)=> {
	let keyArr = [url];
	if (data) {
		if (typeof data === "object") {
			keyArr.push(JSON.stringify(data));
		}
		else {
			keyArr.push(data);
		}
	}
	let keyStr = keyArr.join("");
	// console.log("xhr key string : %s", keyStr);
	let cacheKey = md5(keyStr);
	// console.log("xhr key : %s", cacheKey);
	return cacheKey;
};
let getTokenValue = ()=> {
	let tokenValue = "";
	let token = cache.getCache(keys.token);
	if (token) {
		tokenValue = JSON.stringify(token);
	}
	return tokenValue;

};

let getHeaders = (defaultValue = {})=> {
	let headers = Object.assign({}, defaultValue);
	let tokenValue = getTokenValue();
	if (tokenValue !== "") {
		headers[keys.cookieName] = tokenValue;
	}
	headers["client-info"] = `${appConfig.version};${window.screen.width}x${window.screen.height}`;
	if (appConfig.appid !== "") {
		headers["x-labor-app-id"] = appConfig.appid;
	}
	return headers;
};

window.$currentRequestQueue = {};

class RestClient {

	constructor() {
		this.resetPathname = null;
	}

	// 不支持fromCache
	get(url, data) {
		let conf=Object.assign({
			data,
			url
		});

		return new Promise((resolve,reject)=>{
			conf.success=(res,body)=>{
				resolve(res,body);
			};
			conf.error=(err)=>{
				reject(err);
			};
			this.request(conf);
		});
	}

	// 不支持fromCache
	post(url, data) {

		let conf=Object.assign({
			type:"post",
			data,
			url
		});

		return new Promise((resolve,reject)=>{
			conf.success=(res,body)=>{
				resolve(res,body);
			};
			conf.error=(err)=>{
				reject(err);
			};
			this.request(conf);
		});

	}

	addRequestQueue(key, req) {
		window.$currentRequestQueue[key] = req;
	}

	removeRequestQueue(key) {
		Reflect.deleteProperty(window.$currentRequestQueue, key);
	}

	resetRequestQueue(pathname) {
		if (pathname !== this.resetPathname) {
			this.resetPathname = pathname;
			for (let key in window.$currentRequestQueue) {
				if (window.$currentRequestQueue[key].abort && handler.isOnline()) {
					window.$currentRequestQueue[key].abort();
				}
			}
			window.$currentRequestQueue = {};
		}
	}

	/*
	 * @params type default is "get"
	 * @params url
	 * @params headers
	 * @params data
	 * @params beforeSend
	 * @params success
	 * @params error
	 * @params complete
	 * */
	 request(conf) {

		if (!conf) {
			throwError("request conf is required!");
		}
		if (!conf.url) {
			throwError("conf.url is required!");
		}
		if (conf.beforeSend) {
			conf.beforeSend();
		}
		let url = `${appConfig.apihost}${conf.url}`;
		let type = conf.type || "get";
		let defaultHeaders={};
		if(type==="post"){
			defaultHeaders["content-type"]="application/x-www-form-urlencoded";
		}
		let headers = getHeaders(Object.assign(defaultHeaders, conf.headers || {}));

		let offlineKey = genKey(conf.url, conf.data);

		if (conf.fromCache) {
			// console.log("from cache");
			let cacheResponse = cache.getCache(offlineKey);
			if (cacheResponse && conf.success) {
				let timer=setTimeout(()=>{
					console.log(`get data from cache ${conf.url}`);
					conf.success(cacheResponse,cacheResponse.body);
					clearTimeout(timer);
				},1);
			}
		}

		let sa = agent[type](url).set(headers);
		this.addRequestQueue(conf.url, sa);
		if (conf.data) {
			sa.send(conf.data);
		}
		sa.end((err, response)=> {
			this.removeRequestQueue(conf.url);
			if (err) {
				if (conf.error) {
					conf.error(err);
				}
				else{
					throwError("服务器错误");
				}
			}
			else {
				if (conf.offline) {
					if (appConfig.runtime === "app") {
						if(response.xhr){
							Reflect.deleteProperty(response,"xhr");
						}
						if(response.req){
							Reflect.deleteProperty(response,"req");
						}
						console.log(`set offline data , url=${conf.url}`);
						cache.setCache(offlineKey, response);
					}
				}
				if (conf.success) {
					// console.log("from remote");
					conf.success(response,response.body);
				}
			}
			if (conf.complete) {
				conf.complete();
			}
		});
	}
}

export default new RestClient();
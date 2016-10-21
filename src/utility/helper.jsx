/**
 * Created by youkai on 16/5/30.
 */
export default{
	isIOS: ()=> {
		return /iphone/i.test(window.navigator.userAgent);
	},
	isAndroid: ()=> {
		return /android/i.test(window.navigator.userAgent);
	},
	uploadFile: (url, file)=> {
		return new Promise((resolve, reject)=> {
			let xhr = new XMLHttpRequest();
			xhr.addEventListener("readystatechange", ()=> {
				if (xhr.readyState === 4 && xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				}
			}, false);
			xhr.addEventListener("error", ()=> {
				reject(xhr, file);
			}, false);
			let fd = new FormData();
			xhr.open("POST", url, true);
			// xhr.setRequestHeader("user-authorize", $sessionStorage.token);
			fd.append('file', file);
			xhr.send(fd);
		});
	},
	storage:{
		set:(key,value)=>{
			if(value instanceof Object){
				window.localStorage.setItem(key,JSON.stringify(value));
			}
			else{
				window.localStorage.setItem(key,value);
			}
		},
		get:(key)=>{
			let value = window.localStorage.getItem(key);
			let result;
			try{
				result=JSON.parse(value);
			}
			catch(ex){
				result=value;
			}
			return result;
		},
		remove:(key)=>{
			window.localStorage.removeItem(key);
		},
		clear:(ignoreKeys)=>{
			//save ignore data
			let ignoreData={};
			if(ignoreKeys){
				ignoreKeys.map((key)=>{
					ignoreData[key]=window.localStorage.getItem(key);
				});
			}
			//clear
			window.localStorage.clear();
			//restore ignore data
			for(let key in ignoreData){
				window.localStorage.setItem(key,ignoreData[key]);
			}
		}
	},
	session:{
		set:(key,value)=>{
			if(value instanceof Object){
				window.sessionStorage.setItem(key,JSON.stringify(value));
			}
			else{
				window.sessionStorage.setItem(key,value);
			}
		},
		get:(key)=>{
			let value=window.sessionStorage.getItem(key);
			let result;
			try{
				result=JSON.parse(value);
			}
			catch(ex){
				result=value;
			}
			return result;
		},
		remove:(key)=>{
			window.sessionStorage.removeItem(key);
		}
	}
}
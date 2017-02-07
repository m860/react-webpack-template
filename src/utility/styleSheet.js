/**
 * Created by jean.h.ma on 2/7/17.
 */
export default {
	createStyleSheet(id,text){
		let style = document.createElement("style");
		style.setAttribute('id',id);
		style.setAttribute('type','text/css');
		style.appendChild(document.createTextNode(text));
		document.head.appendChild(style);
		console.log('style sheet applied')
		return style;
	},
	getStyleSheet(id){
		let style = document.getElementById(id);
		if (!style) {
			style = this.createStyleSheet(id);
		}
		return style;
	},
	hasStyleSheet(id){
		return !!document.getElementById(id);
	},
	removeStyleSheet(id){
		let style=document.getElementById(id);
		if(style){
			style.parentElement.removeChild(style);
		}
	}
}

export class ImageFrames{
	constructor(name,frames){
		this.name=name;
		this.values=[];
		let seed=100/frames.length;
		frames.map((item,index)=>{
			this.values.push({
				percent: seed*index,
				rules:[
					`background-image:url('${item}')`
				]
			});
		});
		if(this.values[this.values.length-1].percent!==100){
			this.values.push({
				percent:100,
				rules:[...this.values[this.values.length-1].rules]
			});
		}
	}
	genValue(value){
		return `${value.percent}% {${value.rules.join(';')}}`;
	}
	toString(){
		let values=this.values.map(value=>{
			return this.genValue(value);
		}).join('\n');
		let keyframes=[
			`@-webkit-keyframes ${this.name} {\n${values}\n}`,
			`@keyframes ${this.name} {\n${values}\n}`
		];
		let webkitKeyframes=`@-webkit-keyframes ${this.name} {${values}}`;
		return keyframes.join('\n');
	}

}
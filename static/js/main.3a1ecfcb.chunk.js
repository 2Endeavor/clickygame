(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Luke Skywalker",image:"https://bit.ly/2TEuvNl"},{id:2,name:"Leia",image:"https://bit.ly/2KD4ATz"},{id:3,name:"Darth Vader",image:"https://bit.ly/2YGaZFZ"},{id:4,name:"Obi-Wan",image:"https://bit.ly/2KKDJDM"},{id:5,name:"Darth Maul",image:"https://binged.it/2OZ9oH8"},{id:6,name:"Han Solo",image:"https://binged.it/2MRYGPO"},{id:7,name:"Chewbacca",image:"https://binged.it/33tFAVZ"},{id:8,name:"C3PO and R2D2",image:"https://dailym.ai/2yOP688"},{id:9,name:"Qui-Gon Jinn",image:"https://binged.it/2OZ9COu"},{id:10,name:"Poe Damero",image:"https://binged.it/2GZIxnM"},{id:11,name:"Owen Lars",image:"https://bit.ly/2UP67N0"},{id:12,name:"Padme Amidala",image:"https://dailym.ai/2YF7DDo"}]},,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),s=n.n(r),c=n(4),l=n(5),o=n(7),m=n(6),u=n(8);n(15);var d=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.imageFunction(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))};n(16);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};n(17);var g=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Test your Memory!"),i.a.createElement("h3",null,"Don't click on the same photo more than once"))},f=n(1),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={friendAndFoe:f,score:0,remaining:f.length,selections:[],status:""},n.ShuffleCharacters=function(){var e=n.state.friendAndFoe.map(function(e){return[Math.random(),e]}).sort(function(e,t){return e[0]-t[0]}).map(function(e){return e[1]});n.setState({friendAndFoe:e})},n.handleIncrement=function(){n.setState({score:n.state.score+1}),n.setState({remaining:n.state.remaining-1})},n.handleImageClick=function(e){if(console.log(e),-1===n.state.selections.indexOf(e)){n.setState({status:"You guessed correctly"}),n.ShuffleCharacters(),n.handleIncrement();var t=n.state.selections;t.push(e),console.log("imageArray: ",t,t.length),t.length===f.length&&(console.log("the length is 2"),n.setState({status:"You Win! Play Again",selections:[],score:0,remaining:f.length}))}else n.setState({status:"Already Chosen. Game Over",selections:[],remaining:f.length,score:0})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"top"},i.a.createElement(g,null),i.a.createElement("h3",null,this.state.score," Selected ",this.state.remaining," Remaining"),i.a.createElement("p",{className:"lead"},this.state.status),i.a.createElement(h,null,this.state.friendAndFoe.map(function(t){return i.a.createElement(d,{imageFunction:e.handleImageClick,id:t.id,key:t.id,name:t.name,image:t.image})})))}}]),t}(a.Component);n(18);s.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3a1ecfcb.chunk.js.map
(this.webpackJsonpaudio=this.webpackJsonpaudio||[]).push([[0],{11:function(e,t,a){e.exports=a(27)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),u=(a(16),a(17),a(18),a(19),a(20),function(){return c.a.createElement("div",{className:"AppItem LeftPanel"})}),l=a(5),i=a(1),m=Object(l.b)({name:"audioInfo",initialState:{layerNum:1,featureNum:1,mode:1},reducers:{setLayerFeatureNum:function(e,t){e.layerNum=t.payload.layerNum,e.featureNum=t.payload.featureNum},setMode:function(e,t){e.model=t.payload.mode}}}),s=m.actions,f=s.setLayerFeatureNum,d=(s.setMode,Object(i.a)([function(e){return e.audioInfo.mode},function(e){return e.audioInfo.layerNum},function(e){return e.audioInfo.featureNum}],(function(e,t,a){var n=[],c="www.base.com";if(1===e)for(var r=0;r<10;r++)n.push("".concat(c,"/").concat(r,"/").concat(e,"/").concat(t,"/").concat(a,"/"));else if(1===e)for(var o=0;o<10;o++)n.push("".concat(c,"/").concat(o,"/").concat(e,"/").concat(t,"/").concat(a,"/"));else if(2===e)for(var u=0;u<10;u++)n.push("".concat(c,"/").concat(u,"/").concat(e,"/").concat(t,"/").concat(a,"/"));return n}))),N=m.reducer,E=a(3),v=function(e){var t=e.num,a=e.layerNum,n=Object(E.b)();return c.a.createElement("div",{className:"Feature",onClick:function(e){n(f({layerNum:a,featureNum:t}))}})},p=function(e){var t=e.layerNum,a=[1,2,3,4,5,6,7,8,9,10].map((function(e){return c.a.createElement(v,{key:e,num:e,layerNum:t})}));return c.a.createElement("div",{className:"FeatureList"},a)},y=function(e){var t=e.num;return c.a.createElement("div",{className:"Layer"},c.a.createElement(p,{layerNum:t}))},h=function(){var e=[1,2,3,4,5,6,7].map((function(e){return c.a.createElement(y,{key:e,num:e})}));return c.a.createElement("div",{className:"LayerList"},e)},b=function(){return c.a.createElement("div",{className:"AppItem ArchPanel"},c.a.createElement(h,null))},w=function(e){var t=e.link;return c.a.createElement("div",{className:"Audio"},t)},k=function(){var e=Object(E.c)(d).map((function(e){return c.a.createElement(w,{key:e,link:e})}));return c.a.createElement("div",{className:"AudioList"},e)},I=function(){return c.a.createElement("div",{className:"Modes"},c.a.createElement("button",{className:"Button"},"Mode1"),c.a.createElement("button",{className:"Button"},"Mode2"),c.a.createElement("button",{className:"Button"},"Mode3"))},A=function(){return c.a.createElement("div",{className:"AppItem AudioPanel"},c.a.createElement(k,null),c.a.createElement(I,null))};var L=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(b,null),c.a.createElement(A,null))},M=Object(l.a)({reducer:{audioInfo:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E.a,{store:M},c.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.bcc8700a.chunk.js.map
(this.webpackJsonpaudio=this.webpackJsonpaudio||[]).push([[0],{129:function(e,a,t){e.exports=t(205)},134:function(e,a,t){},136:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){e.exports=t.p+"static/media/CrimsonText-Regular.62f10d46.ttf"},205:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),u=t.n(i),l=(t(134),t(135),t(136),t(137),t(138),t(139),t(207)),c=t(210),s=t(211),o=t(209),m=o.a.Link,d=function(){return r.a.createElement("div",{className:"site-page-header-ghost-wrapper"},r.a.createElement(c.a,{ghost:!1,title:"Audiozation is whatever you want"},r.a.createElement(s.a,{size:"small",column:3},r.a.createElement(s.a.Item,{label:""},r.a.createElement(o.a,{affix:!1},r.a.createElement(m,{href:"https://github.com/had3s22/audiweb",title:"github page"}))))))},g=t(123),p=l.a.Content,h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(p,{style:{margin:"0 16px"}},r.a.createElement(g.a,{style:{margin:"16px 0"}},r.a.createElement(g.a.Item,null,"Abstract")),r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc")))},f=t(212),v=t(213),E=t(76),b=t(37),y=Object(E.b)({name:"audioInfo",initialState:{layerNum:1,featureNum:1,mode:1},reducers:{setLayerFeatureNum:function(e,a){e.layerNum=a.payload.layerNum,e.featureNum=a.payload.featureNum},setMode:function(e,a){e.model=a.payload.mode}}}),w=y.actions,N=w.setLayerFeatureNum,k=(w.setMode,function(e){return e.audioInfo.layerNum}),x=function(e){return e.audioInfo.featureNum},j=Object(b.a)([function(e){return e.audioInfo.mode},k,x],(function(e,a,t){var n=[],r="/audiwebstatic/media";if(1===e)for(var i=0;i<1;i++)n.push("".concat(r,"/").concat(e,"/layer").concat(a,"_feature").concat(t,".wav"));else if(1===e)for(var u=0;u<10;u++)n.push("".concat(r,"/").concat(u,"/").concat(e,"/").concat(a,"/").concat(t,"/"));else if(2===e)for(var l=0;l<10;l++)n.push("".concat(r,"/").concat(l,"/").concat(e,"/").concat(a,"/").concat(t,"/"));return n})),I=y.reducer,q=Object(E.b)({name:"audioInfo",initialState:1,reducers:{setPageNumber:function(e,a){return a.payload}}}),O=q.reducer,_=q.actions.setPageNumber,C=function(e){return e.pageNumber},A=t(36),S=function(e){var a=e.num,t=e.layerNum,n=Object(A.b)(),i=Object(A.c)(x),u=Object(A.c)(k),l=i===a&&u===t?"#1cf0f3":"#1c1c1c";return r.a.createElement("div",{className:"feature",style:{backgroundColor:l},onClick:function(e){n(N({layerNum:t,featureNum:a}))}})},F=function(e){var a=e.layerNum,t=[1,2,3,4,5,6,7,8,9].map((function(e){return r.a.createElement(S,{key:e,num:e,layerNum:a})}));return r.a.createElement("div",{className:"feature-list"},t)},H=function(e){var a=e.num;return r.a.createElement("div",{className:"layer"},r.a.createElement(F,{layerNum:a}))},L=t(122),M=function(){var e=L.a.range(1,101).map((function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Layer ",e),r.a.createElement(H,{key:e,num:e}))}));return r.a.createElement("div",{className:"layer-list"},e)},D=function(e){var a=e.link,t=Object(n.useRef)("audio_tag");return r.a.createElement("div",{className:"audio"},r.a.createElement("audio",{ref:t,controls:!0,className:"audio",src:a},r.a.createElement("source",{src:a,type:"audio/wav"})))},T=t(208),z=(T.a.Title,T.a.Paragraph),P=(T.a.Text,function(){var e=Object(A.c)(j),a=Object(A.c)(k),t=Object(A.c)(x),n=e.map((function(e){return r.a.createElement(D,{key:e,link:e})}));return r.a.createElement("div",{className:"audio-list"},r.a.createElement(z,null,"Layer: ",a," Feature ",t),n)}),W=function(){return r.a.createElement("div",{className:"site-page-header-ghost-wrapper"},r.a.createElement(c.a,{ghost:!1,title:"Audiozation is whatever you want"},r.a.createElement("p",null,"In this experiment we sliced training audios to small fragments and then for a given feature, saw which of these slices activate that feature the most. Then, we merged those slices as a single audio. You can select a feature from a layer on the left, and get the corresponding audio on the right.")))},B=l.a.Content,J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(f.a,null,r.a.createElement(v.a,{xs:{span:12},lg:{span:8}},r.a.createElement(B,{style:{margin:"0 16px",height:350,overflow:"auto"}},r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},r.a.createElement(M,null)))),r.a.createElement(v.a,{xs:{span:12},lg:{span:16}},r.a.createElement(B,{style:{margin:"0 16px",height:350,overflow:"auto"}},r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},r.a.createElement(P,null))))))},R=t(124),Y=t(90),K=t(214),Q=t(215),V=l.a.Sider,$=Y.a.SubMenu,G=function(){var e=Object(A.b)(),a=Object(n.useState)(!1),t=Object(R.a)(a,2),i=t[0],u=t[1],l=function(a){return function(t){e(_(a))}};return r.a.createElement(V,{breakpoint:"lg",collapsedWidth:"0",collapsible:!0,collapsed:i,onCollapse:function(e){u(e)}},r.a.createElement("div",{className:"logo"}),r.a.createElement(Y.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(Y.a.Item,{key:"1",icon:r.a.createElement(K.a,null),onClick:l(1)},"Home"),r.a.createElement($,{key:"sub1",icon:r.a.createElement(Q.a,null),title:"Experiments"},r.a.createElement(Y.a.Item,{key:"2",onClick:l(2)},"Sliced Audios"),r.a.createElement(Y.a.Item,{key:"3",onClick:l(3)},"Inversion"))))},U=function(){return r.a.createElement("div",{className:"site-page-header-ghost-wrapper"},r.a.createElement(c.a,{ghost:!1,title:"Audiozation is whatever you want"},r.a.createElement("p",null,"In This experiment we reverted the trained model solely based on the running_mean and running_var of a certain input. You can see the original audios on the left and the inverted ones on the right.")))},X=[{org:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav",inv:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav"},{org:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav",inv:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav"},{org:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav",inv:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav"},{org:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav",inv:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav"},{org:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav",inv:"https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav"}],Z=l.a.Content,ee=function(){var e=X.map((function(e){return r.a.createElement(f.a,null,r.a.createElement(v.a,{xs:{span:6},lg:{span:6}},r.a.createElement(D,{link:e.org})),r.a.createElement(v.a,{xs:{span:6},lg:{span:6}},r.a.createElement(D,{link:e.inv})))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement(Z,{style:{margin:"0 16px",height:350}},r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},r.a.createElement(f.a,null,r.a.createElement(v.a,{xs:{span:6},lg:{span:6}},"Original"),r.a.createElement(v.a,{xs:{span:6},lg:{span:6}},"Inverted")),e)))};var ae=function(){var e=Object(A.c)(C),a=1===e?r.a.createElement(h,null):2===e?r.a.createElement(J,null):r.a.createElement(ee,null);return r.a.createElement(l.a,{style:{minHeight:"100vh"}},r.a.createElement(G,null),r.a.createElement(l.a,{className:"site-layout"},a))},te=Object(E.a)({reducer:{audioInfo:I,pageNumber:O}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A.a,{store:te},r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.fa6855c5.chunk.js.map
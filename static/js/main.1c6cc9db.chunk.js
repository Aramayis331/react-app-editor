(this["webpackJsonpreact-tasck1"]=this["webpackJsonpreact-tasck1"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(11),o=a.n(c),s=(a(21),a(9)),l=a(3),d=(a(22),a.p+"static/media/idea_sketch.4bad6ac8.svg"),r=a.p+"static/media/Dizayn.9635b4a1.svg",m=a.p+"static/media/3D_fail.f8b8bf06.svg",j=a.p+"static/media/Rend.a534de2f.svg",b=a.p+"static/media/Animacia.191b069a.svg",u=a.p+"static/media/Polirovka.60a7d784.svg",g=(a(23),a(0)),O=function(e){var t=e.tool,a=e.changeColor;return Object(g.jsxs)("div",{className:"elementTool",children:[Object(g.jsx)("div",{className:"divimgTool",children:Object(g.jsx)("img",{src:t.img})}),Object(g.jsx)("span",{className:"btnColor",style:{backgroundColor:t.color},onClick:function(e){var t=e.target.style.backgroundColor;a(t)}}),Object(g.jsx)("span",{className:"lineTool",style:{backgroundColor:t.color}}),Object(g.jsx)("span",{className:"toolName",children:t.name})]})},h=(a(25),a(2)),v=a.p+"static/media/AddTool.3152887d.svg",x=(a(26),a(27),a(8)),p=a.n(x);var f=function(e){var t=e.setToolData,a=e.toolData,n=i.a.useState([]),c=Object(l.a)(n,2),o=c[0],s=c[1];return Object(g.jsx)("div",{className:"containerUpload",children:Object(g.jsx)(p.a,{multiple:!0,value:o,onChange:function(e,t){s(e)},maxNumber:1,dataURLKey:"data_url",children:function(e){var n=e.imageList,i=e.onImageUpload,c=e.onImageRemoveAll,l=e.onImageUpdate,d=e.onImageRemove,r=e.isDragging,m=e.dragProps;return Object(g.jsxs)("div",{className:"upload__image-wrapper",children:[Object(g.jsxs)("div",{className:"upload__image-div-btn",children:[Object(g.jsx)("button",Object(h.a)(Object(h.a)({className:"btnSlider",style:r?{color:"red"}:null,onClick:i},m),{},{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})),Object(g.jsx)("button",{className:"btnSlider",onClick:c,children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"})]}),Object(g.jsx)("div",{className:"divItem",children:n.map((function(e,t){return Object(g.jsxs)("div",{className:"image-itemTool",children:[Object(g.jsx)("img",{src:e.data_url,alt:"no photo",width:"100"}),Object(g.jsxs)("div",{className:"image-item__btn-wrapper",children:[Object(g.jsx)("button",{className:"btnSlider",onClick:function(){return l(t)},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"}),Object(g.jsx)("button",{className:"btnSlider",onClick:function(){return d(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},t)}))}),Object(g.jsx)("div",{className:"divBtnSaveImages",children:Object(g.jsx)("button",{className:"btnSliderSaveImages",onClick:function(){t(Object(h.a)(Object(h.a)({},a),{},{img:o.map((function(e){return e.data_url}))})),s([])},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})})]})}})})},N=function(e){var t=e.onAddTool,a=Object(n.useState)(!1),i=Object(l.a)(a,2),c=i[0],o=i[1],s=Object(n.useState)({textColor:"",textName:"",img:""}),d=Object(l.a)(s,2),r=d[0],m=d[1];return Object(g.jsxs)("div",{className:"containerAddElementTool",children:[Object(g.jsx)("form",{className:c?"addToolOn":"addToolOff",onSubmit:function(e){e.preventDefault()},children:Object(g.jsxs)("div",{className:"containerForm",children:[Object(g.jsx)("div",{className:"rowBtnClose",children:Object(g.jsx)("div",{className:"divBtnCloseSlider",onClick:function(){o(!1)},children:Object(g.jsx)("span",{children:"x"})})}),Object(g.jsx)(f,{onAddTool:t,setAddTool:o,setToolData:m,toolData:r}),Object(g.jsx)("div",{className:"divInputTool",children:Object(g.jsx)("input",{type:"text",value:r.textColor,placeholder:"\u0426\u0432\u0435\u0442 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430",onChange:function(e){m(Object(h.a)(Object(h.a)({},r),{},{textColor:e.target.value}))}})}),Object(g.jsx)("div",{className:"divInputTool",children:Object(g.jsx)("input",{type:"text",value:r.textName,placeholder:"\u0418\u043c\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430",onChange:function(e){m(Object(h.a)(Object(h.a)({},r),{},{textName:e.target.value}))}})}),Object(g.jsx)("div",{className:"divBtnContinue",children:Object(g.jsx)("button",{onClick:function(){o(!1),t(r),m({textColor:"",textName:""})},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})}),Object(g.jsxs)("div",{className:"divAddElementTool",children:[Object(g.jsx)("div",{className:"divimgaddTool",children:Object(g.jsx)("img",{src:v})}),Object(g.jsx)("div",{className:"divBtnElementTool",children:Object(g.jsx)("span",{className:"addElementTool",onClick:function(){o(!0)},children:"+"})}),Object(g.jsx)("span",{className:"lineAddTool"})]})]})},S=function(e){var t=e.tools,a=e.changeColor,n=e.onAddTool;return Object(g.jsxs)("div",{className:"tools",children:[t.map((function(e){return Object(g.jsx)(O,{tool:e,changeColor:a},e.id)})),Object(g.jsx)(N,{onAddTool:n})]})},C=(a(29),a(30),a(31),a(16)),T=a.n(C),k=a.p+"static/media/images1.4e916f66.jpg",I=a.p+"static/media/images2.ccd2c501.jpg",A=a.p+"static/media/images3.72e666cf.jpg",_=a.p+"static/media/images4.da763199.jpg",w=a.p+"static/media/images5.35004c7f.jpg",M=a.p+"static/media/images6.3a6afd18.jpg",y=a.p+"static/media/images7.74bac0d8.jpg";a(47),a(48);var D=function(e){var t=e.onAddItemSlider,a=e.setAddItemSliderToggle,n=i.a.useState([]),c=Object(l.a)(n,2),o=c[0],s=c[1];return Object(g.jsx)("div",{className:"containerUpload",children:Object(g.jsx)(p.a,{multiple:!0,value:o,onChange:function(e,t){s(e)},maxNumber:5,dataURLKey:"data_url",children:function(e){var n=e.imageList,i=e.onImageUpload,c=e.onImageRemoveAll,l=e.onImageUpdate,d=e.onImageRemove,r=e.isDragging,m=e.dragProps;return Object(g.jsxs)("div",{className:"upload__image-wrapper",children:[Object(g.jsxs)("div",{className:"upload__image-div-btnSlider",children:[Object(g.jsx)("button",Object(h.a)(Object(h.a)({className:"btnSlider",style:r?{color:"red"}:null,onClick:i},m),{},{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})),Object(g.jsx)("button",{className:"btnSlider",onClick:c,children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"})]}),Object(g.jsx)("div",{className:"divItem",children:n.map((function(e,t){return Object(g.jsxs)("div",{className:"image-item",children:[Object(g.jsx)("img",{src:e.data_url,alt:"no photo",width:"100"}),Object(g.jsxs)("div",{className:"image-item__btn-wrapper",children:[Object(g.jsx)("button",{className:"btnSlider",onClick:function(){return l(t)},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"}),Object(g.jsx)("button",{className:"btnSlider",onClick:function(){return d(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},t)}))}),Object(g.jsx)("div",{className:"divBtnContinue",children:Object(g.jsx)("button",{className:"btnSlider",onClick:function(){t(o),s([]),a(!1)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})}})})},B=function(e){var t=e.onAddItemSlider,a=Object(n.useState)(!1),i=Object(l.a)(a,2),c=i[0],o=i[1];return Object(g.jsxs)("div",{className:"divAddItemSliderButton",children:[Object(g.jsx)("form",{className:c?"addFormItemSliderOn":"addFormItemSliderOff",onSubmit:function(e){e.preventDefault()},children:Object(g.jsxs)("div",{className:"containerFormSlider",children:[Object(g.jsx)("div",{className:"rowBtnClose",children:Object(g.jsx)("div",{className:"divBtnCloseSlider",onClick:function(){o(!1)},children:Object(g.jsx)("span",{children:"x"})})}),Object(g.jsx)(D,{onAddItemSlider:t,setAddItemSliderToggle:o})]})}),Object(g.jsx)("button",{className:"addItemSlider",onClick:function(){o(!c)},children:"+ \u0414\u041e\u0411\u0410\u0412\u0418\u0422\u042c"})]})},F=function(){var e=Object(n.useState)([{id:Math.random(),img:k},{id:Math.random(),img:I},{id:Math.random(),img:A},{id:Math.random(),img:_},{id:Math.random(),img:w},{id:Math.random(),img:M},{id:Math.random(),img:y}]),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(g.jsxs)("div",{className:"sliderContainer",children:[Object(g.jsx)(B,{onAddItemSlider:function(e){console.log(e),e.map((function(e){i([].concat(Object(s.a)(a),[{id:Math.random(),img:e.data_url}]))}))}}),Object(g.jsx)(T.a,Object(h.a)(Object(h.a)({},{dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1}}]}),{},{children:a.map((function(e){return Object(g.jsx)("div",{className:"divSliderImg",children:Object(g.jsx)("img",{src:e.img,className:"sliderImg"})},e.id)}))}))]})};var U=function(){var e=Object(n.useState)([{id:Math.random(),color:"orange",name:"\u0418\u0434\u0435\u044f \u0421\u043a\u0435\u0447",img:d},{id:Math.random(),color:"red",name:"\u0414\u0438\u0437\u0430\u0439\u043d",img:r},{id:Math.random(),color:"blue",name:"3D \u0424\u0430\u0439\u043b",img:m},{id:Math.random(),color:"green",name:"\u0420\u0435\u043d\u0434",img:j},{id:Math.random(),color:"yellow",name:"\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u044f",img:b},{id:Math.random(),color:"violet",name:"\u041f\u043e\u043b\u0438\u0440\u043e\u0432\u043a\u0430",img:u}]),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)({background:""}),o=Object(l.a)(c,2),O=o[0],h=o[1];return Object(g.jsxs)("div",{className:"App",style:{backgroundColor:O.background},children:[Object(g.jsx)(S,{tools:a,changeColor:function(e){h({background:e})},onAddTool:function(e){i([].concat(Object(s.a)(a),[{id:Math.random(),color:e.textColor,name:e.textName,img:e.img}])),console.log(e)}}),Object(g.jsx)(F,{})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))};o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root")),R()}},[[49,1,2]]]);
//# sourceMappingURL=main.1c6cc9db.chunk.js.map
(this.webpackJsonpgetderivedstatefromprops=this.webpackJsonpgetderivedstatefromprops||[]).push([[0],{228:function(e,t,a){"use strict";a.r(t);var r=a(0),d=a.n(r),i=a(42),n=a.n(i),s=a(143),o=(a(152),a(51)),c=a(135),l=a(136),u=a(145),p=a(144),h=a(231),j=a(141),m=a(230),b=a(32),g=[{title:"\u8eab\u4efd\u8bc1\u53f7",dataIndex:"id",key:"id"},{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u51fa\u751f\u65f6\u95f4",dataIndex:"birthTime",key:"birthTime"},{title:"\u5730\u5740",dataIndex:"address",key:"address"}],v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t;t=e.target.value.trim().length?r.props.dataSource.filter((function(t){return t.id.includes(e.target.value)})):r.props.dataSource,r.setState({id:e.target.value,dataSource:t})},r.state={id:"",dataSource:r.props.dataSource,prevProps:r.props},r}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(h.a,{title:"\u4e2a\u4eba\u4fe1\u606f",size:"small",children:[Object(b.jsx)(j.a,{value:this.state.id,placeholder:"\u8eab\u4efd\u8bc1\u53f7",style:{marginBottom:10,width:200},onChange:this.handleChange}),Object(b.jsx)(m.a,{rowKey:"id",columns:g,dataSource:this.state.dataSource,bordered:!0,pagination:!1})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e!==t.prevProps?{dataSource:e.dataSource,prevProps:e}:null}}]),a}(d.a.Component);function x(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),a=t[0],d=t[1];return Object(b.jsxs)("div",{className:"App",style:{padding:10},children:[Object(b.jsx)("h1",{children:"Hello CodeSandbox"}),Object(b.jsx)("h2",{children:"Start editing to see some magic happen!"}),Object(b.jsx)("hr",{}),Object(b.jsx)(o.a,{type:"primary",onClick:function(){d([{id:"110101199508018876",name:"\u5f20\u4e09",age:"18",address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",birthTime:"2022-3-12 12:39:01"},{id:"330102199003071193",name:"\u674e\u56db",age:"28",address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed2\u53f7",birthTime:"2022-3-12 12:40:09"},{id:"420102199003078637",name:"\u738b\u4e94",age:"38",address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed3\u53f7",birthTime:"2022-3-12 12:40:16"}])},style:{marginBottom:10},children:"\u70b9\u51fb\u5411\u4e0b\u9762\u7684\u7ec4\u4ef6\u4f20\u5165\u4e2a\u4eba\u4fe1\u606f"}),Object(b.jsx)(v,{dataSource:a})]})}var O=document.getElementById("root");n.a.render(Object(b.jsx)(r.StrictMode,{children:Object(b.jsx)(x,{})}),O)}},[[228,1,2]]]);
//# sourceMappingURL=main.059f2846.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(240)},158:function(e,t,a){},161:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(136),c=a.n(r),o=(a(158),a(69)),s=(a(161),a(114)),i=function(e){if(e.ok)return e;var t=new Error(e.statusText);return t.response=e,Promise.reject(t)},u=function(){return Object(s.a)("api/v1/students").then(i)},m=function(e){return Object(s.a)("api/v1/students",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then(i)},d=function(e){return Object(s.a)("api/v1/students/".concat(e),{method:"DELETE"}).then(i)},E=a(244),f=a(62),g=a(251),h=a(68),p=a(117),y=a(40),b=a(89),S=a(247),w=a(254),k=a(252),v=a(253),O=a(255),I=a(54),j=a(256),T=a(257),A=a(258),C=a(259),F=a(260),x=a(245),N=(a(26),a(67)),P=a(250),D=a(248),L=a(242),B=a(243),M=a(249),R=a(143),z=function(e,t,a,n){n=n||"topRight",R.a[e]({message:t,description:a,placement:n})},H=function(e,t,a){return z("success",e,t,a)},J=function(e,t,a){return z("error",e,t,a)},q=l.a.createElement(I.a,{style:{fontSize:24},spin:!0}),G=N.a.Option;var K=function(e){var t=e.showDrawer,a=e.setShowDrawer,r=e.fetchStudents,c=function(){return a(!1)},s=Object(n.useState)(!1),i=Object(o.a)(s,2),u=i[0],d=i[1];return l.a.createElement(P.a,{title:"Create new student",width:720,onClose:c,visible:t,bodyStyle:{paddingBottom:80},footer:l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement(y.a,{onClick:c,style:{marginRight:8}},"Cancel"))},l.a.createElement(D.a,{layout:"vertical",onFinishFailed:function(e){alert(JSON.stringify(e,null,2))},onFinish:function(e){d(!0),console.log(JSON.stringify(e,null,2)),m(e).then(function(){console.log("Student added"),c(),H("Student successfully added to database","".concat(e.name," was successfully added")),r()}).catch(function(e){console.log(e),e.response.json().then(function(e){console.log(e),J("There was an issue","".concat(e.message," [statusCode:").concat(e.status,"] [").concat(e.error,"]"),"bottomLeft")})}).finally(function(){d(!1)})},hideRequiredMark:!0},l.a.createElement(L.a,{gutter:16},l.a.createElement(B.a,{span:12},l.a.createElement(D.a.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please enter student name"}]},l.a.createElement(M.a,{placeholder:"Please enter student name"}))),l.a.createElement(B.a,{span:12},l.a.createElement(D.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please enter student email"}]},l.a.createElement(M.a,{placeholder:"Please enter student email"})))),l.a.createElement(L.a,{gutter:16},l.a.createElement(B.a,{span:12},l.a.createElement(D.a.Item,{name:"gender",label:"gender",rules:[{required:!0,message:"Please select a gender"}]},l.a.createElement(N.a,{placeholder:"Please select a gender"},l.a.createElement(G,{value:"MALE"},"MALE"),l.a.createElement(G,{value:"FEMALE"},"FEMALE"),l.a.createElement(G,{value:"OTHER"},"OTHER"))))),l.a.createElement(L.a,null,l.a.createElement(B.a,{span:12},l.a.createElement(D.a.Item,null,l.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit")))),l.a.createElement(L.a,null,u&&l.a.createElement(p.a,{indicator:q}))))},U=E.a.Header,Y=E.a.Content,Q=E.a.Footer,V=E.a.Sider,W=f.a.SubMenu,X=function(e){var t=e.name,a=t.trim();return 0===a.length?l.a.createElement(g.a,{icon:l.a.createElement(O.a,null)}):1===a.split(" ").length?l.a.createElement(g.a,null,t.charAt(0)):l.a.createElement(g.a,null,"".concat(t.charAt(0)).concat(t.charAt(t.length-1)))},Z=function(e){return[{title:"Avatar",dataIndex:"avatar",key:"avatar",render:function(e,t){return l.a.createElement(X,{name:t.name})}},{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"Action",key:"action",render:function(t,a){return l.a.createElement(h.a.Group,null,l.a.createElement(x.a,{placement:"topRight",title:"Are you sure to delete ".concat(a.name,"?"),onConfirm:function(){return t=a.id,n=e,void d(t).then(function(){d(7889798).then(function(){H("Student deleted","Student with ".concat(t," was deleted")),n()})}).catch(function(e){e.response.json().then(function(e){console.log(e),J("There was an issue","".concat(e.message," [").concat(e.status,"] [").concat(e.error,"]"))})});var t,n},okText:"Yes",cancelText:"No"},l.a.createElement(h.a.Button,{value:"small"},"Delete")),l.a.createElement(h.a.Button,{value:"small"},"Edit"))}}]},$=l.a.createElement(I.a,{style:{fontSize:24},spin:!0});var _=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0],m=s[1],d=Object(n.useState)(!0),g=Object(o.a)(d,2),h=g[0],I=g[1],x=Object(n.useState)(!1),N=Object(o.a)(x,2),P=N[0],D=N[1],L=function(){return u().then(function(e){return e.json()}).then(function(e){console.log(e),r(e),I(!1)}).catch(function(e){console.log(e.response),e.response.json().then(function(e){console.log(e),J("There was an issue","".concat(e.message," [statusCode:").concat(e.status,"] [").concat(e.error,"]"))})}).finally(function(){return I(!1)})};return Object(n.useEffect)(function(){console.log("component is mounted"),L()},[]),l.a.createElement(E.a,{style:{minHeight:"100vh"}},l.a.createElement(V,{collapsible:!0,collapsed:i,onCollapse:m},l.a.createElement("div",{className:"logo"}),l.a.createElement(f.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},l.a.createElement(f.a.Item,{key:"1",icon:l.a.createElement(T.a,null)},"Option 1"),l.a.createElement(f.a.Item,{key:"2",icon:l.a.createElement(A.a,null)},"Option 2"),l.a.createElement(W,{key:"sub1",icon:l.a.createElement(O.a,null),title:"User"},l.a.createElement(f.a.Item,{key:"3"},"Tom"),l.a.createElement(f.a.Item,{key:"4"},"Bill"),l.a.createElement(f.a.Item,{key:"5"},"Alex")),l.a.createElement(W,{key:"sub2",icon:l.a.createElement(C.a,null),title:"Team"},l.a.createElement(f.a.Item,{key:"6"},"Team 1"),l.a.createElement(f.a.Item,{key:"7"},"Team 2")),l.a.createElement(f.a.Item,{key:"9",icon:l.a.createElement(F.a,null)},"Files"))),l.a.createElement(E.a,{className:"site-layout"},l.a.createElement(U,{className:"site-layout-background",style:{padding:0}}),l.a.createElement(Y,{style:{margin:"0 16px"}},l.a.createElement(v.a,{style:{margin:"16px 0"}},l.a.createElement(v.a.Item,null,"User"),l.a.createElement(v.a.Item,null,"Bill")),l.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},h?l.a.createElement(p.a,{indicator:$}):a.length<=0?l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{onClick:function(){return D(!P)},type:"primary",shape:"round",icon:l.a.createElement(j.a,null),size:"small"},"Add New Student"),l.a.createElement(K,{showDrawer:P,setShowDrawer:D,fetchStudents:L}),l.a.createElement(b.a,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(K,{showDrawer:P,setShowDrawer:D,fetchStudents:L}),l.a.createElement(S.a,{dataSource:a,columns:Z(L),bordered:!0,title:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,null,"Number of students"),l.a.createElement(k.a,{count:a.length,className:"site-badge-count-4"}),l.a.createElement(y.a,{onClick:function(){return D(!P)},type:"primary",shape:"round",icon:l.a.createElement(j.a,null),size:"small"},"Add New Student"))},pagination:{pageSize:50},scroll:{y:500},rowKey:function(e){return e.id}}),"; "))),l.a.createElement(Q,{style:{textAlign:"center"}},"Tunji Learning  \xa92022 Tutorial From AmigosCode")))},ee=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,246)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null))),ee()}},[[151,3,2]]]);
//# sourceMappingURL=main.58462c3d.chunk.js.map
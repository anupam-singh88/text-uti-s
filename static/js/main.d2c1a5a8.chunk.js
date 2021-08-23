(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-a active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"042743"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",style:{color:"dark"===e.mode?"white":"042743"},children:Object(o.jsx)("textarea",{id:"myBox",className:"form-control",value:n,onChange:function(e){s(e.target.value)},rows:"8",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"042743"}})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("converted to upper case","success")},children:"Convert To UpperCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 ",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("converted to lower case","success")},children:"Convert To LowerCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 ",onClick:function(t){s(""),e.showAlert("Text Cleared","success")},children:"Clear"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 ",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied","success")},children:"Copy"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 ",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra Spaces removed","success")},children:"Remove Extra space"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," 452343 charecters"]}),Object(o.jsxs)("p",{children:[.08*n.split(" ").length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something in the text box"})]})]})}i.defaultProps={title:"Set Title Here",aboutText:"About "};var b=function(e){return e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})})};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),h=r[0],j=r[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled","success"),document.title="Text Utils - Dark Mode"):(n("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"),document.title="Text Utils - Light Mode")}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{heading:"Enter the text to analyze below ",mode:a,showAlert:m})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.d2c1a5a8.chunk.js.map
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[29],{645:function(e,t,a){"use strict";a.r(t);var n=a(163),r=a(158),l=a(159),s=a(162),o=a(161),c=a(160),i=a(1),m=a.n(i),u=a(615),h=a(619),d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={hf_email:"",hf_password:""},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n.state={error:null,isLoaded:!1},n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8000/users").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"getdata",value:function(){var e=this;fetch("http://localhost:8000/users").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("http://localhost:8000/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user:e.target.hf_email.value,password:e.target.hf_password.value,token:"Active"})}).then((function(e){t.getdata()}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"render",value:function(){return m.a.createElement(u.tb,null,m.a.createElement(u.u,{xs:"12",md:"12"},m.a.createElement(u.j,null,m.a.createElement(u.n,null,"Form",m.a.createElement("small",null," Input User")),m.a.createElement(u.J,{onSubmit:this.handleSubmit},m.a.createElement(u.k,null,m.a.createElement(u.K,{row:!0},m.a.createElement(u.u,{md:"3"},m.a.createElement(u.Z,{htmlFor:"hf-email"},"Email")),m.a.createElement(u.u,{xs:"12",md:"9"},m.a.createElement(u.S,{type:"email",id:"hf-email",name:"hf_email",placeholder:"Enter Email...",autoComplete:"email",value:this.state.email,onChange:this.handleChange}),m.a.createElement(u.L,{className:"help-block"},"Please enter your email"))),m.a.createElement(u.K,{row:!0},m.a.createElement(u.u,{md:"3"},m.a.createElement(u.Z,{htmlFor:"hf-password"},"Password")),m.a.createElement(u.u,{xs:"12",md:"9"},m.a.createElement(u.S,{type:"password",id:"hf-password",name:"hf_password",placeholder:"Enter Password...",autoComplete:"current-password",value:this.state.password,onChange:this.handleChange}),m.a.createElement(u.L,{className:"help-block"},"Please enter your password")))),m.a.createElement(u.l,null,m.a.createElement(u.f,{type:"submit",size:"sm",color:"primary"},m.a.createElement(h.a,{name:"cil-scrubber"})," Submit")," ",m.a.createElement(u.f,{type:"reset",size:"sm",color:"danger"},m.a.createElement(h.a,{name:"cil-ban"})," Reset"))))))}}]),a}(m.a.Component);t.default=d}}]);
//# sourceMappingURL=29.8b5c00a0.chunk.js.map
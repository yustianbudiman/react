(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[30],{646:function(e,t,a){"use strict";a.r(t);var n=a(158),r=a(159),s=a(162),l=a(161),i=a(160),o=a(1),c=a.n(o),u=a(615),d=a(619),h=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleClose=r.handleClose.bind(Object(s.a)(r)),r.handleShow=r.handleShow.bind(Object(s.a)(r)),r.handleChange=r.handleChange.bind(Object(s.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(s.a)(r)),r.state={error:null,isLoaded:!1,items:[],modal:!1,id_users:"",posts:[]},r}return Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({id_users:""})}},{key:"handleClose",value:function(e){this.setState({modal:!1,id_users:""})}},{key:"handleShow",value:function(e){this.setState({modal:!0,id_users:e.target.getAttribute("attr")})}},{key:"renderModal",value:function(e){if(""!==this.state.id_users){var t=this.state.id_users;return c.a.createElement("div",null,c.a.createElement(u.S,{type:"hidden",id:"id_user",name:"id_user",value:t,onChange:this.handleChange}))}}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8000/users").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"getdata",value:function(){var e=this;fetch("http://localhost:8000/users").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("http://localhost:8000/users/"+e.target.id_user.value,{method:"DELETE"}).then((function(e){t.getdata(),t.handleClose()}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"render",value:function(){var e=this,t=this.state.items,a=this.state.modal,n=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}};return c.a.createElement(u.tb,null,c.a.createElement(u.u,{xs:"12",md:"12"},c.a.createElement(u.j,null,c.a.createElement(u.n,null,"List",c.a.createElement("small",null," Users")),c.a.createElement(u.k,null,c.a.createElement(u.f,{className:"btn-facebook btn-brand mr-1 mb-1",onClick:function(){e.props.history.push("list/add")}},"Add"),c.a.createElement(u.y,{items:t,fields:["user","password","token","aksi"],itemsPerPage:5,pagination:!0,scopedSlots:{token:function(e){return c.a.createElement("td",null,c.a.createElement(u.b,{color:n(e.token)},e.token))},aksi:function(t){return c.a.createElement("td",null,c.a.createElement(u.f,{onClick:e.handleShow,size:"sm",attr:t.id,className:"btn-facebook btn-brand mr-1 mb-1"},"Delete"))}}}),c.a.createElement(u.db,{color:"warning",show:a,onClose:this.handleClose,size:"sm"},c.a.createElement(u.gb,{closeButton:!0},c.a.createElement(u.hb,null,"Delete")),c.a.createElement(u.J,{onSubmit:this.handleSubmit},c.a.createElement(u.eb,null,"Apakah Anda Yakin?",this.renderModal()),c.a.createElement(u.fb,null,c.a.createElement(u.f,{type:"submit",size:"sm",color:"primary"},c.a.createElement(d.a,{name:"cil-scrubber"})," Submit"),c.a.createElement(u.f,{color:"secondary",onClick:this.handleClose},"Cancel"))))))))}}]),a}(c.a.Component);t.default=h}}]);
//# sourceMappingURL=30.ac736acb.chunk.js.map
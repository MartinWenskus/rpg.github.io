(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"8b24":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"flex"},[e.currentUser?[r("div",{staticClass:"q-pa-md col",staticStyle:{"margin-bottom":"98px"}},[r("div",{staticClass:"row full-height"},[r("q-scroll-area",{ref:"scrollArea",staticClass:"col-3 col-md-3",attrs:{id:"messagebox"}},[r("q-resize-observer",{on:{resize:e.onResize}}),e._l(e.messages,(function(t){return["text"===t.type.name?r("q-chat-message",{key:t.id,attrs:{avatar:e.showAvatar(t.from.id)?t.from.profilePhoto:"",name:t.from.id==e.currentUser.id?"":t.from.charactername,text:t.text,sent:t.from.id==e.currentUser.id,stamp:e.timeSince(t.date)}}):e._e(),"dice"===t.type.name?r("q-chat-message",{key:t.id,attrs:{avatar:e.showAvatar(t.from.id)?t.from.profilePhoto:"",name:t.from.id==e.currentUser.id?"":t.from.charactername,sent:t.from.id==e.currentUser.id,stamp:e.timeSince(t.date)}},[r("img",{staticStyle:{height:"90px",width:"90px"},attrs:{src:e.diceImage(t.dice,t.diceresult),ratio:"1"}})]):e._e()]}))],2),r("div",{staticClass:"col-9 col-md-9"},[r("div",{staticClass:"q-pa-md"},e._l(e.users,(function(t){return r("q-card",{key:t.id,staticClass:"my-card",attrs:{flat:"",bordered:""}},[r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",[r("img",{attrs:{src:t.profilePhoto}})])],1),r("q-item-section",[r("q-item-label",[e._v(e._s(t.fullName))]),r("q-item-label",{attrs:{caption:""}},[e._v("Actions")])],1)],1),r("q-separator"),r("q-card-section",{attrs:{horizontal:""}},[r("q-card-section",[e._v("lorem1 ")])],1)],1)})),1)])],1)]),r("q-footer",[r("div",{staticClass:"row q-pa-md"},[r("div",{staticClass:"col-4"},[r("q-input",{attrs:{outlined:"",dark:"","bottom-slots":"",counter:"",maxlength:"40"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage()}},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.newMessage?r("q-icon",{staticClass:"cursor-pointer",attrs:{color:"white",name:"close"},on:{click:function(t){e.newMessage=""}}}):e._e()]},proxy:!0},{key:"hint",fn:function(){return[e._v("Write something for everybody!")]},proxy:!0},{key:"after",fn:function(){return[r("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"send",type:"submit"},on:{click:function(t){return e.sendMessage()}}})]},proxy:!0}],null,!1,968459580),model:{value:e.newMessage,callback:function(t){e.newMessage=t},expression:"newMessage"}})],1),r("div",{staticClass:"col-8"},[r("q-btn-group",{attrs:{spread:"",outline:"",dark:""}},[r("q-btn",{attrs:{outline:"",color:"white",label:"D4",type:"submit"},on:{click:function(t){return e.sendDiceMessage(4)}}}),r("q-btn",{attrs:{outline:"",color:"white",label:"D6",type:"submit"},on:{click:function(t){return e.sendDiceMessage(6)}}}),r("q-btn",{attrs:{outline:"",color:"white",label:"D8",type:"submit"},on:{click:function(t){return e.sendDiceMessage(8)}}}),r("q-btn",{attrs:{outline:"",color:"white",label:"D10",type:"submit"},on:{click:function(t){return e.sendDiceMessage(10)}}}),r("q-btn",{attrs:{outline:"",color:"white",label:"D12",type:"submit"},on:{click:function(t){return e.sendDiceMessage(12)}}}),r("q-btn",{attrs:{outline:"",color:"white",label:"D20",type:"submit"},on:{click:function(t){return e.sendDiceMessage(20)}}}),r("q-btn",{attrs:{outline:"",color:"white",label:"D100",type:"submit"},on:{click:function(t){return e.sendDiceMessage(100)}}})],1)],1)])])]:[r("div",{staticClass:"row justify-center q-my-xl"},[r("router-link",{attrs:{to:"auth/register"}},[r("q-btn",{attrs:{color:"blue-grey-1",size:"xl"}},[r("q-icon",{attrs:{left:"",size:"2em",name:"assignment_ind"}}),r("div",[e._v("Register")])],1)],1),r("router-link",{attrs:{to:"auth/login"}},[r("q-btn",{attrs:{color:"blue-grey-7",size:"xl"}},[r("q-icon",{attrs:{left:"",size:"2em",name:"lock_open"}}),r("div",[e._v("login")])],1)],1)],1)]],2)},o=[],n=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c5f6"),r("7cdf"),r("7f7f"),r("9523")),a=r.n(n),i=r("2f62"),c=r("6612"),u=r.n(c);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={data:function(){return{drawerState:!1,newMessage:""}},computed:d(d(d({},Object(i["c"])("user",["currentUser"])),Object(i["c"])("rpg",["users","messages"])),{},{title:function(){var e=this.$route.fullPath;return"/auth/login"===e?"RPG Game Net-Login or Register":"/"===e?"RPG Game Net":"/users"===e?"RPG Game Net-Users":""},meta:function(){return{id:this.currentUser.id,name:this.currentUser.name,photoType:this.photoType}},prefixPath:function(){var e=this.currentUser.id,t="".concat(e,"/").concat(this.photoType,"Photo/").concat(this.photoType,"Photo.");return t}}),mounted:function(){var e=this.currentUser;e&&this.$q.loading.hide()},methods:d(d(d(d({},Object(i["b"])("auth",["logoutUser"])),Object(i["b"])("user",["updateUserData"])),Object(i["b"])("rpg",["sendTextMessage","sendDiceMessageToDB"])),{},{onResize:function(e){this.$refs.scrollArea.setScrollPosition(e.height,300)},sendMessage:function(){var e={currentUser:this.currentUser,message:this.newMessage};this.sendTextMessage(e)},sendDiceMessage:function(e){if(Number.isInteger(e)){var t={currentUser:this.currentUser,dice:e,diceresult:this.generateNumber(e,1)};this.sendDiceMessageToDB(t)}},diceImage:function(e,t){return"/statics/dices/default/d"+u()(e).format("00")+"_"+u()(t).format("00")+".svg"},showBackgroundPhoto:function(){return""===this.currentUser.backgroundPhoto||null===this.currentUser.backgroundPhoto||void 0===this.currentUser.backgroundPhoto},showDefaultPhoto:function(){return""===this.currentUser.profilePhoto||null===this.currentUser.profilePhoto||void 0===this.currentUser.profilePhoto},showUsersBackgroundPhoto:function(e){return""===this.users[e].backgroundPhoto||null===this.users[e].backgroundPhoto||void 0===this.users[e].backgroundPhoto},showAvatar:function(e){var t=null;for(t in this.users)if(this.users[t].id===e)return""!==this.users[t].profilePhoto&&null!==this.users[t].profilePhoto&&void 0!==this.users[t].profilePhoto;return!1},timeSince:function(e){var t=Math.floor(Date.now()/1e3)-e.seconds,r=Math.floor(t/31536e3);return r>1?r+" years":(r=Math.floor(t/2592e3),r>1?r+" months":(r=Math.floor(t/86400),r>1?r+" days":(r=Math.floor(t/3600),r>1?r+" hours":(r=Math.floor(t/60),r>1?r+" minutes":Math.floor(t)+" seconds"))))},generateNumber:function(e,t){return Math.floor(Math.random()*(e-t+1)+t)}})},h=f,m=r("2877"),p=r("eebe"),b=r.n(p),g=r("9989"),y=r("4983"),v=r("3980"),w=r("8169"),k=r("f09f"),q=r("66e5"),P=r("4074"),M=r("cb32"),D=r("0170"),O=r("eb85"),U=r("a370"),x=r("7ff0"),_=r("27f9"),j=r("0016"),C=r("9c40"),Q=r("e7a9"),S=Object(m["a"])(h,s,o,!1,null,null,null);t["default"]=S.exports;b()(S,"components",{QPage:g["a"],QScrollArea:y["a"],QResizeObserver:v["a"],QChatMessage:w["a"],QCard:k["a"],QItem:q["a"],QItemSection:P["a"],QAvatar:M["a"],QItemLabel:D["a"],QSeparator:O["a"],QCardSection:U["a"],QFooter:x["a"],QInput:_["a"],QIcon:j["a"],QBtn:C["a"],QBtnGroup:Q["a"]})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21,4],{446:function(t,e,n){"use strict";n.r(e);var r=n(84),o=n(85),c=n(143),l=n(144),j=n(116),f=n(19),m=(n(50),n(16),n(207),n(145)),d=n(1),y=n(146);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(j.a)(t);if(e){var o=Object(j.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"goBack",value:function(){this.$router.push({name:"main"})}}]),n}(d.default);h([Object(m.Prop)({type:String,default:""})],x.prototype,"title",void 0);var k=x=h([Object(m.Component)({components:{FontAwesomeIcon:y.a}})],x),_=n(49),component=Object(_.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex"},[e("section",{staticClass:"w-[40px]"},[e("button",{on:{click:t.goBack}},[e("FontAwesomeIcon",{attrs:{icon:"fa-solid fa-chevron-left",size:"2x"}})],1)]),t._v(" "),e("section",{staticClass:"flex flex-1 justify-center items-center"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("section",{staticClass:"w-[40px]"})])}),[],!1,null,null,null);e.default=component.exports},448:function(t,e,n){var map={"./af":307,"./af.js":307,"./ar":308,"./ar-dz":309,"./ar-dz.js":309,"./ar-kw":310,"./ar-kw.js":310,"./ar-ly":311,"./ar-ly.js":311,"./ar-ma":312,"./ar-ma.js":312,"./ar-sa":313,"./ar-sa.js":313,"./ar-tn":314,"./ar-tn.js":314,"./ar.js":308,"./az":315,"./az.js":315,"./be":316,"./be.js":316,"./bg":317,"./bg.js":317,"./bm":318,"./bm.js":318,"./bn":319,"./bn-bd":320,"./bn-bd.js":320,"./bn.js":319,"./bo":321,"./bo.js":321,"./br":322,"./br.js":322,"./bs":323,"./bs.js":323,"./ca":324,"./ca.js":324,"./cs":325,"./cs.js":325,"./cv":326,"./cv.js":326,"./cy":327,"./cy.js":327,"./da":328,"./da.js":328,"./de":329,"./de-at":330,"./de-at.js":330,"./de-ch":331,"./de-ch.js":331,"./de.js":329,"./dv":332,"./dv.js":332,"./el":333,"./el.js":333,"./en-au":334,"./en-au.js":334,"./en-ca":335,"./en-ca.js":335,"./en-gb":336,"./en-gb.js":336,"./en-ie":337,"./en-ie.js":337,"./en-il":338,"./en-il.js":338,"./en-in":339,"./en-in.js":339,"./en-nz":340,"./en-nz.js":340,"./en-sg":341,"./en-sg.js":341,"./eo":342,"./eo.js":342,"./es":343,"./es-do":344,"./es-do.js":344,"./es-mx":345,"./es-mx.js":345,"./es-us":346,"./es-us.js":346,"./es.js":343,"./et":347,"./et.js":347,"./eu":348,"./eu.js":348,"./fa":349,"./fa.js":349,"./fi":350,"./fi.js":350,"./fil":351,"./fil.js":351,"./fo":352,"./fo.js":352,"./fr":353,"./fr-ca":354,"./fr-ca.js":354,"./fr-ch":355,"./fr-ch.js":355,"./fr.js":353,"./fy":356,"./fy.js":356,"./ga":357,"./ga.js":357,"./gd":358,"./gd.js":358,"./gl":359,"./gl.js":359,"./gom-deva":360,"./gom-deva.js":360,"./gom-latn":361,"./gom-latn.js":361,"./gu":362,"./gu.js":362,"./he":363,"./he.js":363,"./hi":364,"./hi.js":364,"./hr":365,"./hr.js":365,"./hu":366,"./hu.js":366,"./hy-am":367,"./hy-am.js":367,"./id":368,"./id.js":368,"./is":369,"./is.js":369,"./it":370,"./it-ch":371,"./it-ch.js":371,"./it.js":370,"./ja":372,"./ja.js":372,"./jv":373,"./jv.js":373,"./ka":374,"./ka.js":374,"./kk":375,"./kk.js":375,"./km":376,"./km.js":376,"./kn":377,"./kn.js":377,"./ko":378,"./ko.js":378,"./ku":379,"./ku.js":379,"./ky":380,"./ky.js":380,"./lb":381,"./lb.js":381,"./lo":382,"./lo.js":382,"./lt":383,"./lt.js":383,"./lv":384,"./lv.js":384,"./me":385,"./me.js":385,"./mi":386,"./mi.js":386,"./mk":387,"./mk.js":387,"./ml":388,"./ml.js":388,"./mn":389,"./mn.js":389,"./mr":390,"./mr.js":390,"./ms":391,"./ms-my":392,"./ms-my.js":392,"./ms.js":391,"./mt":393,"./mt.js":393,"./my":394,"./my.js":394,"./nb":395,"./nb.js":395,"./ne":396,"./ne.js":396,"./nl":397,"./nl-be":398,"./nl-be.js":398,"./nl.js":397,"./nn":399,"./nn.js":399,"./oc-lnc":400,"./oc-lnc.js":400,"./pa-in":401,"./pa-in.js":401,"./pl":402,"./pl.js":402,"./pt":403,"./pt-br":404,"./pt-br.js":404,"./pt.js":403,"./ro":405,"./ro.js":405,"./ru":406,"./ru.js":406,"./sd":407,"./sd.js":407,"./se":408,"./se.js":408,"./si":409,"./si.js":409,"./sk":410,"./sk.js":410,"./sl":411,"./sl.js":411,"./sq":412,"./sq.js":412,"./sr":413,"./sr-cyrl":414,"./sr-cyrl.js":414,"./sr.js":413,"./ss":415,"./ss.js":415,"./sv":416,"./sv.js":416,"./sw":417,"./sw.js":417,"./ta":418,"./ta.js":418,"./te":419,"./te.js":419,"./tet":420,"./tet.js":420,"./tg":421,"./tg.js":421,"./th":422,"./th.js":422,"./tk":423,"./tk.js":423,"./tl-ph":424,"./tl-ph.js":424,"./tlh":425,"./tlh.js":425,"./tr":426,"./tr.js":426,"./tzl":427,"./tzl.js":427,"./tzm":428,"./tzm-latn":429,"./tzm-latn.js":429,"./tzm.js":428,"./ug-cn":430,"./ug-cn.js":430,"./uk":431,"./uk.js":431,"./ur":432,"./ur.js":432,"./uz":433,"./uz-latn":434,"./uz-latn.js":434,"./uz.js":433,"./vi":435,"./vi.js":435,"./x-pseudo":436,"./x-pseudo.js":436,"./yo":437,"./yo.js":437,"./zh-cn":438,"./zh-cn.js":438,"./zh-hk":439,"./zh-hk.js":439,"./zh-mo":440,"./zh-mo.js":440,"./zh-tw":441,"./zh-tw.js":441};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=448},474:function(t,e,n){"use strict";n.r(e);n(207);var r=n(84),o=n(85),c=n(143),l=n(144),j=n(116),f=n(19),m=(n(50),n(16),n(30),n(145)),d=n(1),y=n(301),v=n.n(y);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(j.a)(t);if(e){var o=Object(j.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="HistoryPage",t.selectedTypeIndex=0,t.memo="",t.listData=[{id:1,type:"01",taskName:"30min run",actionDate:"2023-05-23T05:39:00.000Z",regDate:"2023-07-20T12:00:00.000Z",memo:"Goooooood job!"},{id:2,type:"01",taskName:"60min bicycle",actionDate:"2023-06-23T05:39:00.000Z",regDate:"2023-07-21T12:00:00.000Z",memo:"Hard work!!!"},{id:3,type:"03",taskName:"30min do programing study",actionDate:"2023-07-23T05:39:00.000Z",regDate:"2023-07-20T12:00:00.000Z",memo:"I'm proud of myself!"},{id:4,type:"02",taskName:"20min keep a thanks-diary",actionDate:"2023-07-24T05:39:00.000Z",regDate:"2023-07-22T12:00:00.000Z",memo:"warm heart❤️"},{id:4,type:"01",taskName:"10min take cold shower",actionDate:"2023-07-24T05:39:00.000Z",regDate:"2023-07-22T12:00:00.000Z",memo:"coooool heart💙💙💙️"}],t}return Object(o.a)(n,[{key:"getTypeInfo",value:function(t){var e={className:"",text:""};return"01"===t?(e.className="bg-red-500",e.text="Physical"):"02"===t?(e.className="bg-yellow-500",e.text="Mental"):"03"===t&&(e.className="bg-blue-500",e.text="Intellectual"),e}},{key:"dateFormat",value:function(t){return v()(t).format("YYYY.MM.DD HH:mm A")}}]),n}(d.default),_=k=x([m.Component],k),w=n(49),component=Object(w.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"w-full text-center flex flex-col flex-1"},[e("AppBar",{staticClass:"mb-10px",attrs:{title:"History"}}),t._v(" "),e("div",{staticClass:"overflow-y-scroll"},[e("ul",t._l(t.listData,(function(n,r){return e("li",{key:r,staticClass:"border-2 border-gray-50 rounded-[8px] mt-10px relative px-10px pt-28px pb-10px text-left"},[e("div",{staticClass:"w-[80px] h-20px text-[12px] text-white absolute left-0 top-1.5 pl-1",class:t.getTypeInfo(n.type).className},[t._v("\n          "+t._s(t.getTypeInfo(n.type).text)+"\n        ")]),t._v(" "),e("p",[t._v(t._s(n.taskName))]),t._v(" "),e("p",{staticClass:"text-gray-500 text-12px"},[t._v(t._s(n.memo))]),t._v(" "),e("div",{staticClass:"text-12px"},[e("span",{staticClass:"font-bold"},[t._v("ActionDate")]),t._v("\n          "+t._s(t.dateFormat(n.actionDate))+"\n        ")]),t._v(" "),e("div",{staticClass:"text-[10px] text-gray-200"},[t._v("\n          "+t._s(t.dateFormat(n.regDate))+"\n        ")]),t._v(" "),e("FontAwesomeIcon",{staticClass:"text-yellow-300 absolute right-16px top-2",attrs:{icon:"fa-solid fa-trophy",size:"4x"}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppBar:n(446).default})}}]);
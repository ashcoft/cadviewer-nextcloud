(function(e){function a(a){for(var t,n,r=a[0],l=a[1],i=a[2],v=0,_=[];v<r.length;v++)n=r[v],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&_.push(o[n][0]),o[n]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);d&&d(a);while(_.length)_.shift()();return s.push.apply(s,i||[]),c()}function c(){for(var e,a=0;a<s.length;a++){for(var c=s[a],t=!0,r=1;r<c.length;r++){var l=c[r];0!==o[l]&&(t=!1)}t&&(s.splice(a--,1),e=n(n.s=c[0]))}return e}var t={},o={app:0},s=[];function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,a,c){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:c})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)n.d(c,t,function(a){return e[a]}.bind(null,t));return c},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var i=0;i<r.length;i++)a(r[i]);var d=l;s.push([0,"chunk-vendors"]),c()})({0:function(e,a,c){e.exports=c("56d7")},"031d":function(e,a,c){},"42ab":function(e,a,c){},"56d7":function(e,a,c){"use strict";c.r(a),c.d(a,"eventBus",(function(){return ie}));var t,o=c("2b0e"),s=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app"}},[a("app-cadviewercanvas",{ref:"cadviewercanvas",attrs:{ServerBackEndUrl:e.ServerBackEndUrl,ServerLocation:e.ServerLocation,ServerUrl:e.ServerUrl,FileName:e.FileName}})],1)},n=[],r=function(){var e=this;e._self._c;return e._m(0)},l=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"cadviewerCanvasTest01"},[a("div",{attrs:{id:"floorPlan"}})])}],i=(c("1157"),c("6fe9")),d=c.n(i),v=[],_=!1,u="";function j(){d.a.cvjs_resetZoomPan("floorPlan");var e="Bob Smith",a="user_1";d.a.cvjs_setCurrentStickyNoteValues_NameUserId(e,a),d.a.cvjs_setCurrentRedlineValues_NameUserid(e,a),t=d.a.cvjs_clearLayer(t),d.a.cvjs_LayerOff("EC1 Space Names"),d.a.cvjs_LayerOff("EC1 Space Status Descs"),d.a.cvjs_LayerOff("EC1 Space Project"),d.a.cvjs_LayerOff("EC1 Space Function Descs"),d.a.cvjs_LayerOff("EC1 Space Type Descs"),d.a.cvjs_LayerOff("EC1 Tenant Names"),d.a.cvjs_LayerOff("EC1 UDA Design Capacity"),d.a.cvjs_LayerOff("EC1 UDA Is Secured")}function f(){d.a.cvjs_hideAllRedlines_HiddenUsersList(),d.a.cvjs_lockAllRedlines_LockedUsersList()}function b(e,a,c){try{var t;console.log("CALLBACK: cvjs_graphicalObjectOnChange: "+e+" "+a+" "+c+" indexSpace: "+a.toLowerCase().indexOf("space")),"Create"==e&&a.toLowerCase().indexOf("space")>-1&&-1==a.toLowerCase().indexOf("circle")&&(t=d.a.cvjs_returnSpaceObjectID(c),console.log("This is the SVG: "+t.outerhtml)),"Delete"==e&&a.toLowerCase().indexOf("space")>-1&&window.alert("We have deleted: "+c),"Move"==e&&a.toLowerCase().indexOf("space")>-1&&(console.log("This object has been moved: "+c),t=d.a.cvjs_returnSpaceObjectID(c))}catch(o){console.log("cvjs_graphicalObjectOnChange: "+o)}}function h(){d.a.cvjs_openRedlineSaveModal("floorPlan")}function p(){d.a.cvjs_openRedlineLoadModal("floorPlan")}function m(){var e=d.a.cvjs_idObjectClicked();window.alert("Custom menu item 1: Here developers can implement their own methods, the look and feel of the menu is controlled in the settings.  Clicked object ID is: "+e)}function C(){var e=d.a.cvjs_idObjectClicked();window.alert("Custom menu item 2: Here developers can implement their own methods, the look and feel of the menu is controlled in the settings. Clicked object ID is: "+e)}function k(e){window.alert("we have clicked "+e)}function S(e,a,c){}function w(e,a,c){try{console.log("click "+e+"  "+a),"dragcanvas"!=e&&_&&(v.push({id:e,handle:a}),u=a)}catch(t){console.log("click: "+t)}}function y(e,a,c){console.log("mysql dblclick "+e+"  "+a),window.alert("We have double clicked entity with AutoCAD Handle: "+a+"\r\nThe svg id is: "+e)}function M(e,a,c){console.log("mysql mouseout "+e+"  "+a),u==a||d.a.cvjs_mouseout_handleObjectStyles(e,a)}function O(e,a,c){console.log("mysql mouseover "+e+"  "+a)}function g(e,a,c){console.log("mysql mouseleave "+e+"  "+a)}function L(e,a,c){d.a.cvjs_mouseenter_handleObjectStyles("#F00",2,1,!0,e,a)}function P(e){}function U(e){}function A(){}function E(){}function D(){}function R(){}function T(){}function x(){}function N(){}function F(){}function B(){}function I(){}function H(){}function V(){}function z(){}function X(){}function G(){}function W(){}function q(){}function J(){}function K(){}function Z(){}function $(){}function Q(){}function Y(){}var ee={created:function(){ie.$on("clearTextLayer",()=>{this.clearTextLayer()}),ie.$on("AddTextOnSpaceObject_wrapper",(e,a,c,o,s,n,r,l)=>{d.a.cvjs_AddTextOnSpaceObject(t,e,a,c,o,s,n,r,l)}),console.log("created CADViewerCanvas")},props:{msg:String,ServerBackEndUrl:String,ServerLocation:String,ServerUrl:String,FileName:String},mounted:function(){window.addEventListener("resize",this.onResize),console.log("mounted");var e=this.ServerBackEndUrl,a=this.ServerLocation,c=this.ServerUrl,t=this.FileName;d.a.cvjs_debugMode(!0),d.a.cvjs_setIconImageSize("floorPlan",34,44),d.a.cvjs_setAllServerPaths_and_Handlers(e,c,a,"PHP","ReactJS","floorPlan"),d.a.cvjs_setCallbackMethod("cvjs_OnLoadEnd",j),d.a.cvjs_setCallbackMethod("cvjs_graphicalObjectOnChange",b),d.a.cvjs_setCallbackMethod("cvjs_OnLoadEndRedlines",f),d.a.cvjs_setCallbackMethod("cvjs_ObjectSelected",U),d.a.cvjs_setCallbackMethod("cvjs_measurementCallback",A),d.a.cvjs_setCallbackMethod("cvjs_CalibrateMeasurementCallback",E),d.a.cvjs_setCallbackMethod("cvjs_Url_callback",D),d.a.cvjs_setCallbackMethod("cvjs_loadSpaceImage_UserConfiguration",R),d.a.cvjs_setCallbackMethod("cvjs_NoObjectSelected",T),d.a.cvjs_setCallbackMethod("cvjs_SVGfileObjectClicked",x),d.a.cvjs_setCallbackMethod("cvjs_SVGfileObjectMouseEnter",N),d.a.cvjs_setCallbackMethod("cvjs_SVGfileObjectMouseLeave",F),d.a.cvjs_setCallbackMethod("cvjs_SVGfileObjectMouseMove",B),d.a.cvjs_setCallbackMethod("cvjs_ParseDisplayDataMaps",I),d.a.cvjs_setCallbackMethod("cvjs_QuickCountCallback",H),d.a.cvjs_setCallbackMethod("cvjs_OnHyperlinkClick",V),d.a.cvjs_setCallbackMethod("cvjs_setUpStickyNotesRedlines",z),d.a.cvjs_setCallbackMethod("custom_host_parser_PopUpMenu",X),d.a.cvjs_setCallbackMethod("cvjs_customHostParser",G),d.a.cvjs_setCallbackMethod("drawPathsGeneric",W),d.a.cvjs_setCallbackMethod("cvjs_callbackForModalDisplay",q),d.a.cvjs_setCallbackMethod("cvjs_populateMyCustomPopUpBody",J),d.a.cvjs_setCallbackMethod("cvjs_customModalPopUpBody",K),d.a.cvjs_setCallbackMethod("cvjs_NoObjectSelectedStickyNotes",Z),d.a.cvjs_setCallbackMethod("cvjs_NoObjectSelectedHyperlinks",$),d.a.cvjs_setCallbackMethod("cvjs_ObjectSelectedHyperlink",Q),d.a.cvjs_setCallbackMethod("cvjs_ObjectSelectedStickyNotes",Y),d.a.cvjs_setCallbackMethod("cvjs_saveStickyNotesRedlinesUser",h),d.a.cvjs_setCallbackMethod("cvjs_loadStickyNotesRedlinesUser",p),d.a.cvjs_setCallbackMethod("my_own_clickmenu1",m),d.a.cvjs_setCallbackMethod("my_own_clickmenu2",C),d.a.cvjs_setCallbackMethod("cvjs_popupTitleClick",k),d.a.cvjs_setCallbackMethod("cvjs_mousedown",S),d.a.cvjs_setCallbackMethod("cvjs_click",w),d.a.cvjs_setCallbackMethod("cvjs_dblclick",y),d.a.cvjs_setCallbackMethod("cvjs_mouseout",M),d.a.cvjs_setCallbackMethod("cvjs_mouseover",O),d.a.cvjs_setCallbackMethod("cvjs_mouseleave",g),d.a.cvjs_setCallbackMethod("cvjs_mouseenter",L),d.a.cvjs_setCallbackMethod("cvjs_graphicalObjectCreated",P),d.a.cvjs_CADViewerPro(!0),d.a.cvjs_PrintToPDFWindowRelativeSize(.8),d.a.cvjs_setFileModalEditMode(!1),d.a.cvjs_emailSettings_PDF_publish("From CAD Server","my_from_address@mydomain.com","my_cc_address@mydomain.com","my_reply_to@mydomain.com"),d.a.cvjs_loadCADViewerLanguage("French",""),d.a.cvjs_DisplayCoordinatesMenu("floorPlan",!0),d.a.cvjs_setSpaceObjectsCustomMenu("/content/customInsertSpaceObjectMenu/","cadviewercustomspacecommands.json",!0),d.a.cvjs_setTopMenuXML("floorPlan","cadviewer_full_commands_01.xml","");var o={fill:"#d8e1e3","fill-opacity":.04,stroke:"#CCC","stroke-width":.25,"stroke-linejoin":"round"},s={fill:"#a4d7f4","fill-opacity":"0.5",stroke:"#a4d7f4","stroke-width":.75},n={fill:"#5BBEF6","fill-opacity":"0.5",stroke:"#5BBEF6","stroke-width":.75},r="<div class='cvjs_modal_1' id='my_own_clickmenu1()'>Custom<br>Menu 1<br><i class='fa fa-undo'></i></div>";r+="<div class='cvjs_modal_1' id='my_own_clickmenu2()'>Custom<br>Menu 2<br><i class='fa fa-info-circle'></i></div>",r+="<div class='cvjs_modal_1' id='cvjs_zoomHere()'>Zoom<br>Here<br><i class='fa fa-search-plus'></i></div>",d.a.cvjs_InitCADViewer_highLight_popUp_app("floorPlan","/cadviewer/app/",o,s,n,r),d.a.cvjs_setLicenseKeyDirect('{ "cvKey": "00110010 00110010 00110000 00110001 00110010 00110000 00110100 00110001 00110100 00111000 00110001 00110100 00110101 00110001 00110101 00110111 00110001 00110101 00111001 00110001 00110100 00111000 00110001 00110101 00110010 00110001 00110100 00110101 00110001 00110100 00110001 00110001 00110100 00110000 00110001 00111001 00110111 00110010 00110000 00110111 00110010 00110000 00110110 00110010 00110000 00110001 00110010 00110001 00110000 00110010 00110000 00111000 00110010 00110001 00110000 00110010 00110000 00111000 00110010 00110001 00110000 00110010 00110000 00110111 00110001 00111001 00111000 00110010 00110000 00110110 00110010 00110000 00111000 00110010 00110000 00110110 00110010 00110000 00110101 00110010 00110001 00110001 00110010 00110000 00111000 00110010 00110000 00110111 00110010 00110001 00110001 00110010 00110000 00110101 00110010 00110000 00110111 00110001 00111001 00111000 00110001 00110100 00110001 00110001 00110100 00110100 00110001 00110101 00111001 00110001 00110101 00110111 00110001 00110101 00110101 " }'),d.a.cvjs_allowFileLoadToServer(!0),d.a.cvjs_setServerFileLocation_AbsolutePaths(a+"/content/drawings/dwg/",e+"content/drawings/dwg/","",""),d.a.cvjs_setRedlinesAbsolutePath(e+"/content/redlines/fileloader_610/",a+"/content/redlines/fileloader_610/"),d.a.cvjs_setSpaceObjectsAbsolutePath(e+"/content/spaceObjects/",a+"/content/spaceObjects/"),d.a.cvjs_setInsertImageObjectsAbsolutePath(e+"/content/inserted_image_objects/",a+"/content/inserted_image_objects/"),d.a.cvjs_conversion_clearAXconversionParameters(),d.a.cvjs_conversion_addAXconversionParameter("RL","RM_"),d.a.cvjs_conversion_addAXconversionParameter("TL","RM_TXT"),d.a.cvjs_conversion_addAXconversionParameter("LA",""),d.a.cvjs_conversion_addAXconversionParameter("last",""),d.a.cvjs_conversion_addAXconversionParameter("hlall",""),d.a.cvjs_LoadDrawing("floorPlan",t),d.a.cvjs_resizeWindow_position("floorPlan")},name:"CADViewer01",methods:{onResize(e){console.log("RESIZE"),d.a.cvjs_resizeWindow_position("floorPlan")},clearTextLayer(){t=d.a.cvjs_clearLayer(t)}}},ae=ee,ce=(c("b269"),c("2877")),te=Object(ce["a"])(ae,r,l,!1,null,"8dbecce2",null),oe=te.exports,se={name:"App",data(){return{ServerBackEndUrl:Object.fromEntries(new URLSearchParams(window.location.search).entries()).ServerBackEndUrl,ServerLocation:Object.fromEntries(new URLSearchParams(window.location.search).entries()).ServerLocation,ServerUrl:Object.fromEntries(new URLSearchParams(window.location.search).entries()).ServerUrl,FileName:Object.fromEntries(new URLSearchParams(window.location.search).entries()).FileName}},components:{"app-cadviewercanvas":oe}},ne=se,re=(c("b7ba"),Object(ce["a"])(ne,s,n,!1,null,null,null)),le=re.exports;o["a"].config.productionTip=!1;const ie=new o["a"];new o["a"]({render:e=>e(le)}).$mount("#app")},b269:function(e,a,c){"use strict";c("42ab")},b7ba:function(e,a,c){"use strict";c("031d")}});
//# sourceMappingURL=app.5a923ebe.js.map
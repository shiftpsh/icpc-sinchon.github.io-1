_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+dYQ":function(e,n,t){"use strict";t.d(n,"b",(function(){return c}));var r=t("7DA+"),o=t("wKoh"),a="SET_SD",c=function(e){return{type:a,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.currentSeasonData;case a:return n.val;default:return e}}},0:function(e,n,t){t("GcxT"),e.exports=t("nOHt")},"0p7O":function(e){e.exports=JSON.parse('["2021 Summer","2021 Winter","2020 Summer"]')},"1TCz":function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),o=t.n(r),a=t("HaE+");function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=t("nKUr"),s=(t("/MKj"),t("7DA+")),i=t("ANjH"),l=(t("5HXA"),t("zmuQ")),p=t("+dYQ"),f=t("9olT"),m=t("HwGp"),d=t("BbF2"),v=t("kcSG"),h=Object(i.combineReducers)({currentSeasonIdx:l.a,currentSeasonData:p.a,seasonList:f.a,currentYear:m.a,currentSeason:d.a,isNavClicked:v.a});t("6Fm8"),t("npd2"),t("q6Ig"),t("G2a7"),t("CCrm"),t("kxKB");function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var b=function(e){var n=e.Component,t=e.pageProps;e.store;return Object(u.jsx)(n,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t))};b.getInitialProps=function(){var e=Object(a.a)(o.a.mark((function e(n){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.ctx,r=n.Component,a={},!r.getInitialProps){e.next=6;break}return e.next=5,n.Component.getInitialProps(t);case 5:a=e.sent;case 6:return e.abrupt("return",{pageProps:a});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=Object(s.b)((function(e){var n=Object(i.compose)(i.applyMiddleware.apply(void 0,[]));if(!e.router||"/suapc"!==e.router.pathname&&"/halloffame"!==e.router.pathname&&"/campcontest"!==e.router.pathname)return Object(i.createStore)(h,n);var r=e.router.pathname;"/campcontest"===r&&(r="/halloffame");var o=t("r7OT")("./".concat(r.substring(1),"/").concat("2021 Summer.json")),a=t("WlY1")("./".concat(r.substring(1),"/list.json")),c={currentSeasonData:o,currentYear:o.year,currentSeason:o.season,currentSeasonIdx:a.indexOf("2021 Summer"),seasonList:a,isNavClicked:!1};return Object(i.createStore)(h,c,n)})).withRedux(b)},"5HXA":function(e,n,t){"use strict";var r=t("ANjH").compose;n.__esModule=!0,n.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},n.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"6Fm8":function(e,n,t){},"824O":function(e){e.exports=JSON.parse('{"year":2021,"season":"Winter","date":"2021\ub144 2\uc6d4 28\uc77c \uc624\ud6c4 12\uc2dc ~ \uc624\ud6c4 5\uc2dc","awards":[{"div":null,"winner":[{"prize":1,"solved":12,"team":"Supported by LKY","school":"\uc5f0\uc138\ub300\ud559\uad50","member":"\uc724\uc778\uc12d, \ud669\uc900\ud638, \ub0a8\ud604\uc6b0"},{"prize":2,"solved":9,"team":151719,"school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uc804\ud574\uc131, \uc815\uc7ac\ud6c8, \uc774\uc900\uc11d"},{"prize":3,"solved":9,"team":"NO ORANGE CANT WIN","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uae40\uad00\uc6b0, \ubc15\uc7ac\ud615, \uc774\uc724\uc81c"},{"prize":4,"solved":8,"team":"TERRA","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uc774\ub3d9\uc8fc, \uc774\ubbfc\ud76c, \uc870\uc6d0\ube48"},{"prize":5,"solved":8,"team":"\ud32c\ucf00\uc774\ud06c\ub9db \ucfe0\ud0a4","school":"\uc5f0\uc138\ub300\ud559\uad50","member":"\ubc15\uc120\uc885, \uae40\ud0dc\uc724, \uae40\ubbfc\uc7ac"},{"prize":6,"solved":7,"team":"APP","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uac15\ubb38\ud574, \uac15\ub2e4\ud61c, \uc804\ubbfc\uc218"},{"prize":7,"solved":7,"team":"\uc804\uc0dd\ud588\ub354\ub2c8 \ubc15\uac74\uc774\uc5c8\ub358 \uac74\uc5d0 \ub300\ud558\uc5ec","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uac15\ud6a8\uaddc, \ubc15\uac74, \uc190\uae30\ub839"},{"prize":8,"solved":6,"team":"\uc11c\uc218\uc0bc","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\ud64d\uc11c\uc900, \uc720\ud638\uc601, \uc624\uc7ac\uc11d"},{"prize":9,"solved":6,"team":"\ub3d9\ub3d9\ubc15","school":"\uc5f0\uc138\ub300\ud559\uad50","member":"\uad8c\ub3d9\uc6b1, \ub3d9\uc6a9\ud6c8, \ubc15\uc601\ud55c"},{"prize":10,"solved":6,"team":"\uc0c1\uae08\ud0c0\uc11c\uc18c\uace0\uae30\uc0ac\uba39\uc790","school":"\ud64d\uc775\ub300\ud559\uad50","member":"\uc815\uc724\uc11d, \uae40\uc885\uc6b1, \uc11c\uc601\uc9c4"}]}],"examiner":[{"name":"\uc774\uad6d\ub82c","school":"\uc5f0\uc138\ub300\ud559\uad50"},{"name":"\uc815\uc5f0\ub450","school":"\ud64d\uc775\ub300\ud559\uad50"},{"name":"\ubc15\uc218\ud604","school":"\uc11c\uac15\ub300\ud559\uad50"},{"name":"\uc815\uae30\uc6c5","school":"\uc5f0\uc138\ub300\ud559\uad50"},{"name":"\uc774\uc0c1\uc6d0","school":"\uc11c\uac15\ub300\ud559\uad50"}],"checker":[{"name":"\ucd5c\uc7ac\ubbfc","school":"KAIST"},{"name":"\uc870\uacbd\uc644","school":"\uc22d\uc2e4\ub300\ud559\uad50"},{"name":"\ub0a8\ud604\uc6b1","school":"Team Samoyed"},{"name":"\uad8c\uc77c\uc6b0","school":"\uc778\ucc9c\ub300\ud559\uad50"}],"sponser":["kakao","naver","mnsoft","jetbrains","hanbit","jpub","youngjin"]}')},"9olT":function(e,n,t){"use strict";t.d(n,"b",(function(){return a}));t("im6/");var r=t("7DA+"),o="SET_SL",a=function(e){return{type:o,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.seasonList;case o:return n.val;default:return e}}},BbF2:function(e,n,t){"use strict";t.d(n,"b",(function(){return c}));t("/MKj");var r=t("7DA+"),o=t("824O"),a="SET_SEASON",c=function(e){return{type:a,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.season,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.currentSeason;case a:return n.val;default:return e}}},CCrm:function(e,n,t){},G2a7:function(e,n,t){},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])},"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,o,a,c){try{var u=e[a](c),s=u.value}catch(i){return void t(i)}u.done?n(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var c=e.apply(n,t);function u(e){r(c,o,a,u,s,"next",e)}function s(e){r(c,o,a,u,s,"throw",e)}u(void 0)}))}}t.d(n,"a",(function(){return o}))},HwGp:function(e,n,t){"use strict";t.d(n,"b",(function(){return c}));var r=t("7DA+"),o=t("824O"),a="SET_YEAR",c=function(e){return{type:a,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.year,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.currentYear;case a:return n.val;default:return e}}},WlY1:function(e,n,t){var r={"./halloffame/list.json":"im6/","./suapc/list.json":"0p7O"};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="WlY1"},gPUI:function(e){e.exports=JSON.parse('{"year":2021,"season":"Summer","date":"2021\ub144 8\uc6d4 21\uc77c \uc624\ud6c4 2\uc2dc ~ \uc624\ud6c4 5\uc2dc","studies":[{"topic":"\ucd08\uae09","lecturers":[{"name":"\ubc15\uc7ac\ud615","school":"\uc11c\uac15\ub300","handle":"pjh6792"},{"name":"\uc724\uc778\uc12d","school":"\uc5f0\uc138\ub300","handle":"pinebananais"}],"mentors":[],"contests":[]},{"topic":"\uc911\uae09","lecturers":[{"name":"\uc774\uad6d\ub82c","school":"\uc5f0\uc138\ub300","handle":"lky7674"},{"name":"\uc804\ud574\uc131","school":"\uc11c\uac15\ub300","handle":"seastar105"}],"mentors":[],"contests":[]}]}')},"im6/":function(e){e.exports=JSON.parse('["2021 Summer","2021 Winter","2020 Summer","2020 Winter"]')},kxKB:function(e,n,t){},npd2:function(e,n,t){},q6Ig:function(e,n,t){},r7OT:function(e,n,t){var r={"./halloffame/2021 Summer.json":"gPUI","./suapc/2021 Summer.json":"wKoh"};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="r7OT"},wKoh:function(e){e.exports=JSON.parse('{"year":2021,"season":"Summer","date":"2021\ub144 8\uc6d4 28\uc77c \uc624\ud6c4 12\uc2dc ~ \uc624\ud6c4 5\uc2dc","sponser":["kakao","naver","autoever","hanbit","youngjin","easys"]}')},zmuQ:function(e,n,t){"use strict";t.d(n,"b",(function(){return c}));var r=t("7DA+"),o=t("0p7O"),a="SET_IDX",c=function(e){return{type:a,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.indexOf("2021 Summer"),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.currentSeasonIdx;case a:return n.val;default:return e}}}},[[0,1,2,0,3]]]);
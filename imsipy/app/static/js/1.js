BOOMR_start=(new Date).getTime();function BOOMR_check_doc_domain(b){var h;if(!b){if(window.parent===window||!document.getElementById("boomr-if-as"))return!0;b=document.domain}if(-1===b.indexOf("."))return!1;try{return h=window.parent.document,void 0!==h}catch(a){document.domain=b}try{return h=window.parent.document,void 0!==h}catch(c){b=b.replace(/^[\w\-]+\./,"")}return BOOMR_check_doc_domain(b)}BOOMR_check_doc_domain();
(function(b){function h(a,c){var k=e(a,{detail:c});k&&BOOMR.setImmediate(function(){d.dispatchEvent?d.dispatchEvent(k):d.fireEvent&&d.fireEvent("onpropertychange",k)})}var a,c,d,f,e;b.parent!==b&&document.getElementById("boomr-if-as")&&"script"===document.getElementById("boomr-if-as").nodeName.toLowerCase()&&(b=b.parent,f=document.getElementById("boomr-if-as").src);d=b.document;void 0===b.BOOMR&&(b.BOOMR={});BOOMR=b.BOOMR;BOOMR.version||(BOOMR.version="0.9.1402580569",BOOMR.window=b,function(){try{void 0!==
new b.CustomEvent("CustomEvent")&&(e=function(a,g){return new b.CustomEvent(a,g)})}catch(a){d.createEvent?e=function(a,g){var c=d.createEvent("CustomEvent");g=g||{cancelable:!1,bubbles:!1};c.initCustomEvent(a,g.bubbles,g.cancelable,g.detail);return c}:d.createEventObject&&(e=function(a,g){var c=d.createEventObject();c.type=c.propertyName=a;c.detail=g.detail;return c})}e||(e=function(){})}(),a={beacon_url:"",beacon_type:"AUTO",site_domain:b.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,"$1").toLowerCase(),
user_ip:"",strip_query_string:!1,onloadfired:!1,handlers_attached:!1,events:{page_ready:[],page_unload:[],dom_loaded:[],visibility_changed:[],before_beacon:[],onbeacon:[],xhr_load:[],click:[],form_submit:[]},public_events:{before_beacon:"onBeforeBoomerangBeacon",onbeacon:"onBoomerangBeacon",onboomerangloaded:"onBoomerangLoaded"},vars:{},disabled_plugins:{},onclick_handler:function(g){var c;g||(g=b.event);g.target?c=g.target:g.srcElement&&(c=g.srcElement);3===c.nodeType&&(c=c.parentNode);c&&"OBJECT"===
c.nodeName.toUpperCase()&&"application/x-shockwave-flash"===c.type||a.fireEvent("click",c)},onsubmit_handler:function(g){var c;g||(g=b.event);g.target?c=g.target:g.srcElement&&(c=g.srcElement);3===c.nodeType&&(c=c.parentNode);a.fireEvent("form_submit",c)},fireEvent:function(a,c){var d,b,e;a=a.toLowerCase();if(!this.events.hasOwnProperty(a))return!1;e=this.events[a];for(d=0;d<e.length;d++)b=e[d],b[0].call(b[2],c,b[1]);this.public_events.hasOwnProperty(a)&&h(this.public_events[a],c);return!0}},c={t_lstart:null,
t_start:BOOMR_start,t_end:null,url:f,utils:{objectToString:function(a,c){var d=[],b;if(!a||"object"!==typeof a)return a;void 0===c&&(c="\n\t");for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&d.push(encodeURIComponent(b)+"="+encodeURIComponent(a[b]));return d.join(c)},getCookie:function(a){if(!a)return null;a=" "+a+"=";var c,b;b=" "+d.cookie+";";return 0<=(c=b.indexOf(a))?(c+=a.length,b=b.substring(c,b.indexOf(";",c))):null},setCookie:function(c,b,e){var f,h,m;if(!c||!a.site_domain)return BOOMR.debug("No cookie name or site domain: "+
c+"/"+a.site_domain),!1;b=this.objectToString(b,"&");f=c+"="+b;h=[f,"path=/","domain="+a.site_domain];e&&(m=new Date,m.setTime(m.getTime()+1E3*e),m=m.toGMTString(),h.push("expires="+m));if(500>f.length){d.cookie=h.join("; ");c=this.getCookie(c);if(b===c)return!0;BOOMR.warn("Saved cookie value doesn't match what we tried to set:\n"+b+"\n"+c)}else BOOMR.warn("Cookie too long: "+f.length+" "+f);return!1},getSubCookies:function(a){var c,d,b,e=!1,f={};if(!a)return null;if("string"!==typeof a)return BOOMR.debug("TypeError: cookie is not a string: "+
typeof a),null;a=a.split("&");c=0;for(d=a.length;c<d;c++)b=a[c].split("="),b[0]&&(b.push(""),f[decodeURIComponent(b[0])]=decodeURIComponent(b[1]),e=!0);return e?f:null},removeCookie:function(a){return this.setCookie(a,{},-86400)},cleanupURL:function(c){return a.strip_query_string?c.replace(/\?.*/,"?qs-redacted"):c},hashQueryString:function(a,c){if(!a)return a;a.match(/^\/\//)&&(a=location.protocol+a);if(!a.match(/^(https?|file):/))return BOOMR.error("Passed in URL is invalid: "+a),"";c&&(a=a.replace(/#.*/,
""));return BOOMR.utils.MD5?a.replace(/\?([^#]*)/,function(a,c){return"?"+(10<c.length?BOOMR.utils.MD5(c):c)}):a},pluginConfig:function(a,c,d,b){var e,f=0;if(!c||!c[d])return!1;for(e=0;e<b.length;e++)void 0!==c[d][b[e]]&&(a[b[e]]=c[d][b[e]],f++);return 0<f},addListener:function(a,c,d){a.addEventListener?a.addEventListener(c,d,!1):a.attachEvent("on"+c,d)},removeListener:function(a,c,d){a.removeEventListener?a.removeEventListener(c,d,!1):a.detachEvent("on"+c,d)},pushVars:function(a,c,d){var b,e,f=0;
for(b in c)if(c.hasOwnProperty(b))if("[object Array]"===Object.prototype.toString.call(c[b]))for(e=0;e<c[b].length;++e)f+=BOOMR.utils.pushVars(a,c[b][e],b+"["+e+"]");else++f,a.push(encodeURIComponent(d?d+"["+b+"]":b)+"="+(void 0===c[b]||null===c[b]?"":encodeURIComponent(c[b])));return f},postData:function(c){var d=document.createElement("iframe"),b=document.createElement("form"),e=document.createElement("input");d.name="boomerang_post";d.style.display=b.style.display="none";b.method="POST";b.action=
a.beacon_url;b.target=d.name;e.name="data";window.JSON?(b.enctype="text/plain",e.value=JSON.stringify(a.vars)):(b.enctype="application/x-www-form-urlencoded",e.value=c);document.body.appendChild(d);b.appendChild(e);document.body.appendChild(b);BOOMR.utils.addListener(d,"load",function(){document.body.removeChild(b);document.body.removeChild(d)});b.submit()}},init:function(g){var e,f,h=["beacon_url","beacon_type","site_domain","user_ip","strip_query_string"];BOOMR_check_doc_domain();g||(g={});for(e=
0;e<h.length;e++)void 0!==g[h[e]]&&(a[h[e]]=g[h[e]]);void 0!==g.log&&(this.log=g.log);this.log||(this.log=function(){});for(f in this.plugins)this.plugins.hasOwnProperty(f)&&(g[f]&&g[f].hasOwnProperty("enabled")&&!1===g[f].enabled?a.disabled_plugins[f]=1:(a.disabled_plugins[f]&&delete a.disabled_plugins[f],"function"===typeof this.plugins[f].init&&this.plugins[f].init(g)));if(a.handlers_attached)return this;a.onloadfired||void 0!==g.autorun&&!1===g.autorun||(d.readyState&&"complete"===d.readyState?
this.setImmediate(BOOMR.page_ready,null,null,BOOMR):b.onpagehide||null===b.onpagehide?c.utils.addListener(b,"pageshow",BOOMR.page_ready):c.utils.addListener(b,"load",BOOMR.page_ready));c.utils.addListener(b,"DOMContentLoaded",function(){a.fireEvent("dom_loaded")});(function(){var g,e;g=function(){a.fireEvent("visibility_changed")};d.webkitVisibilityState?c.utils.addListener(d,"webkitvisibilitychange",g):d.msVisibilityState?c.utils.addListener(d,"msvisibilitychange",g):d.visibilityState&&c.utils.addListener(d,
"visibilitychange",g);c.utils.addListener(d,"mouseup",a.onclick_handler);g=d.getElementsByTagName("form");for(e=0;e<g.length;e++)c.utils.addListener(g[e],"submit",a.onsubmit_handler);b.onpagehide||null===b.onpagehide||c.utils.addListener(b,"unload",function(){BOOMR.window=b=null})})();a.handlers_attached=!0;return this},page_ready:function(c){c||(c=b.event);c||(c={name:"load"});if(a.onloadfired)return this;a.fireEvent("page_ready",c);a.onloadfired=!0;return this},setImmediate:function(a,c,d,e){var f=
function(){a.call(e||null,c,d||{});f=null};b.setImmediate?b.setImmediate(f):b.msSetImmediate?b.msSetImmediate(f):b.webkitSetImmediate?b.webkitSetImmediate(f):b.mozSetImmediate?b.mozSetImmediate(f):setTimeout(f,10)},subscribe:function(d,e,f,h){var p,m,q;d=d.toLowerCase();if(!a.events.hasOwnProperty(d))return this;q=a.events[d];for(p=0;p<q.length;p++)if(m=q[p],m[0]===e&&m[1]===f&&m[2]===h)return this;q.push([e,f||{},h||null]);"page_ready"===d&&a.onloadfired&&this.setImmediate(e,null,f,h);"page_unload"===
d&&(d=function(a){e&&e.call(h,a||b.event,f)},b.onpagehide||null===b.onpagehide?c.utils.addListener(b,"pagehide",d):c.utils.addListener(b,"unload",d),c.utils.addListener(b,"beforeunload",d));return this},addVar:function(c,d){if("string"===typeof c)a.vars[c]=d;else if("object"===typeof c)for(var b in c)c.hasOwnProperty(b)&&(a.vars[b]=c[b]);return this},removeVar:function(c){var d,b;if(!arguments.length)return this;b=1===arguments.length&&"[object Array]"===Object.prototype.toString.apply(c)?c:arguments;
for(d=0;d<b.length;d++)a.vars.hasOwnProperty(b[d])&&delete a.vars[b[d]];return this},requestStart:function(a){var c=(new Date).getTime();BOOMR.plugins.RT.startTimer("xhr_"+a,c);return{loaded:function(){BOOMR.responseEnd(a,c)}}},responseEnd:function(c,d){BOOMR.plugins.RT.startTimer("xhr_"+c,d);a.fireEvent("xhr_load",{name:"xhr_"+c})},sendBeacon:function(){var c,e;BOOMR.debug("Checking if we can send beacon");for(c in this.plugins)if(this.plugins.hasOwnProperty(c)&&!a.disabled_plugins[c]&&!this.plugins[c].is_complete())return BOOMR.debug("Plugin "+
c+" is not complete, deferring beacon send"),this;a.vars.v=BOOMR.version;a.vars.u=BOOMR.utils.cleanupURL(d.URL.replace(/#.*/,""));b!==window&&(a.vars["if"]="");a.fireEvent("before_beacon",a.vars);if(!a.beacon_url)return BOOMR.debug("No beacon_url, but would have sent: "+BOOMR.utils.objectToString(a.vars)),this;c=[];e=BOOMR.utils.pushVars(c,a.vars);this.setImmediate(a.fireEvent,"onbeacon",a.vars,a);if(!e)return this;c=c.join("&");"POST"===a.beacon_type?BOOMR.utils.postData(c):(e=a.beacon_url+(-1<a.beacon_url.indexOf("?")?
"&":"?")+c,2E3<e.length&&"AUTO"===a.beacon_type?BOOMR.utils.postData(c):(BOOMR.debug("Sending url: "+e.replace(/&/g,"\n\t")),c=new Image,c.src=e));return this}},delete BOOMR_start,"number"===typeof BOOMR_lstart?(c.t_lstart=BOOMR_lstart,delete BOOMR_lstart):"number"===typeof BOOMR.window.BOOMR_lstart&&(c.t_lstart=BOOMR.window.BOOMR_lstart),function(){var a;b.YAHOO&&b.YAHOO.widget&&b.YAHOO.widget.Logger?c.log=b.YAHOO.log:b.Y&&b.Y.log?c.log=b.Y.log:"object"===typeof console&&void 0!==console.log&&(c.log=
function(a,c,d){console.log(d+": ["+c+"] "+a)});a=function(a){return function(c,d){this.log(c,a,"boomerang"+(d?"."+d:""));return this}};c.debug=a("debug");c.info=a("info");c.warn=a("warn");c.error=a("error")}(),function(){for(var a in c)c.hasOwnProperty(a)&&(BOOMR[a]=c[a])}(),BOOMR.plugins=BOOMR.plugins||{},h("onBoomerangLoaded",{BOOMR:BOOMR}))})(window);
(function(b){var h=b.document,a;BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};a={onloadfired:!1,unloadfired:!1,visiblefired:!1,initialized:!1,complete:!1,timers:{},cookie:"RT",cookie_exp:600,strict_referrer:!0,navigationType:0,navigationStart:void 0,responseStart:void 0,t_start:void 0,t_fb_approx:void 0,r:void 0,r2:void 0,updateCookie:function(a,d){var b,e;if(!this.cookie)return this;b=BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie))||{};if("object"===typeof a)for(e in a)if(a.hasOwnProperty(e))if(void 0===
a[e])b.hasOwnProperty(e)&&delete b[e];else{if("nu"===e||"r"===e)a[e]=BOOMR.utils.hashQueryString(a[e],!0);b[e]=a[e]}e=(new Date).getTime();d&&(b[d]=e);BOOMR.debug("Setting cookie (timer="+d+")\n"+BOOMR.utils.objectToString(b),"rt");if(!BOOMR.utils.setCookie(this.cookie,b,this.cookie_exp))return BOOMR.error("cannot set start cookie","rt"),this;b=(new Date).getTime();50<b-e&&(BOOMR.utils.removeCookie(this.cookie),BOOMR.error("took more than 50ms to set cookie... aborting: "+e+" -> "+b,"rt"));return this},
initFromCookie:function(){var a,d;if(d=BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)))d.s=Math.max(+d.ul||0,+d.cl||0),BOOMR.debug("Read from cookie "+BOOMR.utils.objectToString(d),"rt"),d.s&&(d.r||d.nu)&&(this.r=d.r,a=BOOMR.utils.hashQueryString(h.URL,!0),BOOMR.debug(this.r+" =?= "+this.r2,"rt"),BOOMR.debug(d.s+" <? "+(+d.cl+15),"rt"),BOOMR.debug(d.nu+" =?= "+a,"rt"),!this.strict_referrer||d.nu&&d.nu===a&&d.s<+d.cl+15||d.s===+d.ul&&this.r===this.r2?(this.t_start=d.s,+d.hd>d.s&&(this.t_fb_approx=
parseInt(d.hd,10))):this.t_start=this.t_fb_approx=void 0),this.updateCookie({s:void 0,r:void 0,nu:void 0,ul:void 0,cl:void 0,hd:void 0})},getBoomerangTimings:function(){var a,d,b,e;BOOMR.t_start&&(BOOMR.plugins.RT.startTimer("boomerang",BOOMR.t_start),BOOMR.plugins.RT.endTimer("boomerang",BOOMR.t_end),BOOMR.plugins.RT.endTimer("boomr_fb",BOOMR.t_start),BOOMR.t_lstart&&(BOOMR.plugins.RT.endTimer("boomr_ld",BOOMR.t_lstart),BOOMR.plugins.RT.setTimer("boomr_lat",BOOMR.t_start-BOOMR.t_lstart)));if(window.performance&&
window.performance.getEntriesByName)for(e in b={"rt.bmr.":BOOMR.url},b)if(b.hasOwnProperty(e)&&b[e]&&(a=window.performance.getEntriesByName(b[e]))&&0!==a.length)for(d in a=a[0],a)a.hasOwnProperty(d)&&d.match(/(Start|End)$/)&&0<a[d]&&BOOMR.addVar(e+d.replace(/^(...).*(St|En).*$/,"$1$2"),a[d])},page_ready:function(){this.onloadfired=!0},visibility_changed:function(){h.hidden||h.msHidden||h.webkitHidden||(a.visiblefired=!0)},checkPreRender:function(){if(!(h.webkitVisibilityState&&"prerender"===h.webkitVisibilityState||
h.msVisibilityState&&3===h.msVisibilityState))return!1;BOOMR.plugins.RT.startTimer("t_load",this.navigationStart);BOOMR.plugins.RT.endTimer("t_load");BOOMR.plugins.RT.startTimer("t_prerender",this.navigationStart);BOOMR.plugins.RT.startTimer("t_postrender");BOOMR.subscribe("visibility_changed",BOOMR.plugins.RT.done,"visible",BOOMR.plugins.RT);return!0},initNavTiming:function(){var a,d,f;this.navigationStart||((d=b.performance||b.msPerformance||b.webkitPerformance||b.mozPerformance)&&d.navigation&&
(this.navigationType=d.navigation.type),d&&d.timing?a=d.timing:b.chrome&&b.chrome.csi&&b.chrome.csi().startE?(a={navigationStart:b.chrome.csi().startE},f="csi"):b.gtbExternal&&b.gtbExternal.startE()&&(a={navigationStart:b.gtbExternal.startE()},f="gtb"),a?(BOOMR.addVar("rt.start",f||"navigation"),this.navigationStart=a.navigationStart||a.fetchStart||void 0,this.responseStart=a.responseStart||void 0,navigator.userAgent.match(/Firefox\/[78]\./)&&(this.navigationStart=a.unloadEventStart||a.fetchStart||
void 0)):BOOMR.warn("This browser doesn't support the WebTiming API","rt"))},page_unload:function(a){BOOMR.debug("Unload called with "+BOOMR.utils.objectToString(a)+" when unloadfired = "+this.unloadfired,"rt");this.unloadfired||BOOMR.plugins.RT.done(a,"unload");this.updateCookie({r:h.URL},"beforeunload"===a.type?"ul":"hd");this.unloadfired=!0},_iterable_click:function(a,d,b,e){if(b){for(BOOMR.debug(a+" called with "+b.nodeName,"rt");b&&b.nodeName.toUpperCase()!==d;)b=b.parentNode;b&&b.nodeName.toUpperCase()===
d&&(BOOMR.debug("passing through","rt"),this.updateCookie({nu:e(b)},"cl"))}},onclick:function(c){a._iterable_click("Click","A",c,function(a){return a.href})},onsubmit:function(c){a._iterable_click("Submit","FORM",c,function(a){a=a.action||h.URL;return a.match(/\?/)?a:a+"?"})},domloaded:function(){BOOMR.plugins.RT.endTimer("t_domloaded")}};BOOMR.plugins.RT={init:function(c){BOOMR.debug("init RT","rt");b!==BOOMR.window&&(b=BOOMR.window,h=b.document);BOOMR.utils.pluginConfig(a,c,"RT",["cookie","cookie_exp",
"strict_referrer"]);a.r=a.r2=BOOMR.utils.hashQueryString(h.referrer,!0);a.initFromCookie();a.getBoomerangTimings();if(a.initialized)return this;a.complete=!1;a.timers={};BOOMR.subscribe("page_ready",a.page_ready,null,a);a.visiblefired=!(h.hidden||h.msHidden||h.webkitHidden);a.visiblefired||BOOMR.subscribe("visibility_changed",a.visibility_changed,null,a);BOOMR.subscribe("page_ready",this.done,"load",this);BOOMR.subscribe("xhr_load",this.done,"xhr",this);BOOMR.subscribe("dom_loaded",a.domloaded,null,
a);BOOMR.subscribe("page_unload",a.page_unload,null,a);BOOMR.subscribe("click",a.onclick,null,a);BOOMR.subscribe("form_submit",a.onsubmit,null,a);a.initialized=!0;return this},startTimer:function(c,d){c&&("t_page"===c&&this.endTimer("t_resp",d),a.timers[c]={start:"number"===typeof d?d:(new Date).getTime()});return this},endTimer:function(c,d){c&&(a.timers[c]=a.timers[c]||{},void 0===a.timers[c].end&&(a.timers[c].end="number"===typeof d?d:(new Date).getTime()));return this},setTimer:function(c,d){c&&
(a.timers[c]={delta:d});return this},done:function(c,d){BOOMR.debug("Called done with "+BOOMR.utils.objectToString(c)+", "+d,"rt");var b,e=(new Date).getTime(),g={t_done:1,t_resp:1,t_page:1},h=0,k,n=[];a.complete=!1;if("load"===d||"visible"===d){a.initFromCookie();a.initNavTiming();if(a.checkPreRender())return this;a.responseStart?(this.endTimer("t_resp",a.responseStart),a.timers.t_load?this.setTimer("t_page",a.timers.t_load.end-a.responseStart):this.setTimer("t_page",e-a.responseStart)):a.timers.hasOwnProperty("t_page")?
this.endTimer("t_page"):a.t_fb_approx&&(this.endTimer("t_resp",a.t_fb_approx),this.setTimer("t_page",e-a.t_fb_approx));a.timers.hasOwnProperty("t_postrender")&&(this.endTimer("t_postrender"),this.endTimer("t_prerender"))}"xhr"===d&&c.name&&a.timers[c.name]?(b=a.timers[c.name].start,BOOMR.addVar("rt.start","manual")):a.navigationStart?b=a.navigationStart:a.t_start&&2!==a.navigationType?(b=a.t_start,BOOMR.addVar("rt.start","cookie")):(BOOMR.addVar("rt.start","none"),b=void 0);BOOMR.debug("Got start time: "+
b,"rt");this.endTimer("t_done",e);BOOMR.removeVar("t_done","t_page","t_resp","r","r2","rt.tstart","rt.cstart","rt.bstart","rt.end","t_postrender","t_prerender","t_load");BOOMR.addVar("rt.tstart",b);"number"===typeof a.t_start&&a.t_start!==b&&BOOMR.addVar("rt.cstart",a.t_start);BOOMR.addVar("rt.bstart",BOOMR.t_start);BOOMR.addVar("rt.end",a.timers.t_done.end);for(k in a.timers)a.timers.hasOwnProperty(k)&&(e=a.timers[k],"number"!==typeof e.delta&&("number"!==typeof e.start&&(e.start=b),e.delta=e.end-
e.start),isNaN(e.delta)||(g.hasOwnProperty(k)?BOOMR.addVar(k,e.delta):n.push(k+"|"+e.delta),h++));h&&("xhr"!==d&&(BOOMR.addVar("r",BOOMR.utils.cleanupURL(a.r)),a.r2!==a.r&&BOOMR.addVar("r2",BOOMR.utils.cleanupURL(a.r2))),n.length&&BOOMR.addVar("t_other",n.join(",")));"unload"!==d||a.onloadfired||(BOOMR.addVar("rt.abld",""),a.visiblefired||BOOMR.addVar("rt.ntvu",""));a.timers={};a.complete=!0;BOOMR.sendBeacon();return this},is_complete:function(){return a.complete}}})(window);
(function(){var b,h;BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};h=[{name:"image-0.png",size:11483,timeout:1400},{name:"image-1.png",size:40658,timeout:1200},{name:"image-2.png",size:164897,timeout:1300},{name:"image-3.png",size:381756,timeout:1500},{name:"image-4.png",size:1234664,timeout:1200},{name:"image-5.png",size:4509613,timeout:1200},{name:"image-6.png",size:9084559,timeout:1200}];h.end=h.length;h.start=0;h.l={name:"image-l.gif",size:35,timeout:1E3};b={base_url:"",timeout:15E3,nruns:5,
latency_runs:10,user_ip:"",cookie_exp:604800,cookie:"BA",results:[],latencies:[],latency:null,runs_left:0,aborted:!1,complete:!0,running:!1,initialized:!1,ncmp:function(a,c){return a-c},iqr:function(a){var c=a.length-1,b,f,e,g=[],h;b=(a[Math.floor(.25*c)]+a[Math.ceil(.25*c)])/2;f=(a[Math.floor(.75*c)]+a[Math.ceil(.75*c)])/2;e=1.5*(f-b);c++;for(h=0;h<c&&a[h]<f+e;h++)a[h]>b-e&&g.push(a[h]);return g},calc_latency:function(){var a,c,b=0,f=0,e;this.latencies.shift();e=this.iqr(this.latencies.sort(this.ncmp));
c=e.length;BOOMR.debug(e,"bw");for(a=0;a<c;a++)b+=e[a],f+=e[a]*e[a];a=Math.round(b/c);b=Math.sqrt(f/c-b*b/(c*c));f=(1.96*b/Math.sqrt(c)).toFixed(2);b=b.toFixed(2);c=Math.round((e[Math.floor(c/2)]+e[Math.ceil(c/2)])/2);return{mean:a,median:c,stddev:b,stderr:f}},calc_bw:function(){var a,c,b=0,f,e=[],g=[],l=0,k=0,n=0,p=0,m,q,r=[];for(a=0;a<this.nruns;a++)if(this.results[a]&&this.results[a].r)for(f=this.results[a].r,m=0,c=f.length-1;0<=c&&3>m&&f[c];c--)null!==f[c].t&&(b++,m++,q=1E3*h[c].size/f[c].t,e.push(q),
q=1E3*h[c].size/(f[c].t-this.latency.mean),g.push(q),f[c].t<this.latency.mean&&r.push(c+"_"+f[c].t));BOOMR.debug("got "+b+" readings","bw");BOOMR.debug("bandwidths: "+e,"bw");BOOMR.debug("corrected: "+g,"bw");3<e.length?(e=this.iqr(e.sort(this.ncmp)),g=this.iqr(g.sort(this.ncmp))):(e=e.sort(this.ncmp),g=g.sort(this.ncmp));BOOMR.debug("after iqr: "+e,"bw");BOOMR.debug("corrected: "+g,"bw");b=Math.max(e.length,g.length);for(a=0;a<b;a++)a<e.length&&(l+=e[a],k+=Math.pow(e[a],2)),a<g.length&&(n+=g[a],
p+=Math.pow(g[a],2));b=e.length;a=Math.round(l/b);l=Math.sqrt(k/b-Math.pow(l/b,2));k=Math.round(1.96*l/Math.sqrt(b));l=Math.round(l);b=e.length-1;e=Math.round((e[Math.floor(b/2)]+e[Math.ceil(b/2)])/2);b=g.length;c=Math.round(n/b);n=Math.sqrt(p/b-Math.pow(n/b,2));p=(1.96*n/Math.sqrt(b)).toFixed(2);n=n.toFixed(2);b=g.length-1;b=Math.round((g[Math.floor(b/2)]+g[Math.ceil(b/2)])/2);BOOMR.debug("amean: "+a+", median: "+e,"bw");BOOMR.debug("corrected amean: "+c+", median: "+b,"bw");return{mean:a,stddev:l,
stderr:k,median:e,mean_corrected:c,stddev_corrected:n,stderr_corrected:p,median_corrected:b,debug_info:r}},defer:function(a){var c=this;return setTimeout(function(){a.call(c);c=null},10)},load_img:function(a,c,b){var f=this.base_url+h[a].name+"?t="+(new Date).getTime()+Math.random(),e=0,g=0,l=new Image,k=this;l.onload=function(){l=l.onload=l.onerror=null;clearTimeout(e);b&&b.call(k,a,g,c,!0);k=b=null};l.onerror=function(){l=l.onload=l.onerror=null;clearTimeout(e);b&&b.call(k,a,g,c,!1);k=b=null};e=
setTimeout(function(){b&&b.call(k,a,g,c,null)},h[a].timeout+Math.min(400,this.latency?this.latency.mean:400));g=(new Date).getTime();l.src=f},lat_loaded:function(a,b,d,f){d===this.latency_runs+1&&(null!==f&&(a=(new Date).getTime()-b,this.latencies.push(a)),0===this.latency_runs&&(this.latency=this.calc_latency()),this.defer(this.iterate))},img_loaded:function(a,b,d,f){d!==this.runs_left+1||this.results[this.nruns-d].r[a]||(null===f?this.results[this.nruns-d].r[a+1]={t:null,state:null,run:d}:(b={start:b,
end:(new Date).getTime(),t:null,state:f,run:d},f&&(b.t=b.end-b.start),this.results[this.nruns-d].r[a]=b,a>=h.end-1||void 0!==this.results[this.nruns-d].r[a+1]?(BOOMR.debug(BOOMR.utils.objectToString(this.results[this.nruns-d]),"bw"),d===this.nruns&&(h.start=a),this.defer(this.iterate)):this.load_img(a+1,d,this.img_loaded)))},finish:function(){this.latency||(this.latency=this.calc_latency());var a=this.calc_bw(),b={bw:a.median_corrected,bw_err:parseFloat(a.stderr_corrected,10),lat:this.latency.mean,
lat_err:parseFloat(this.latency.stderr,10),bw_time:Math.round((new Date).getTime()/1E3)};BOOMR.addVar(b);0<a.debug_info.length&&BOOMR.addVar("bw_debug",a.debug_info.join(","));!isNaN(b.bw)&&0<b.bw&&BOOMR.utils.setCookie(this.cookie,{ba:Math.round(b.bw),be:b.bw_err,l:b.lat,le:b.lat_err,ip:this.user_ip,t:b.bw_time},this.user_ip?this.cookie_exp:0);this.complete=!0;BOOMR.sendBeacon();this.running=!1},iterate:function(){if(this.aborted)return!1;this.runs_left?this.latency_runs?this.load_img("l",this.latency_runs--,
this.lat_loaded):(this.results.push({r:[]}),this.load_img(h.start,this.runs_left--,this.img_loaded)):this.finish()},setVarsFromCookie:function(a){var b=parseInt(a.ba,10),d=parseFloat(a.be,10),f=parseInt(a.l,10)||0,e=parseFloat(a.le,10)||0,g=a.ip.replace(/\.\d+$/,"0");a=parseInt(a.t,10);var h=this.user_ip.replace(/\.\d+$/,"0"),k=Math.round((new Date).getTime()/1E3);return g===h&&a>=k-this.cookie_exp&&0<b?(this.complete=!0,BOOMR.addVar({bw:b,lat:f,bw_err:d,lat_err:e}),!0):!1}};BOOMR.plugins.BW={init:function(a){if(b.initialized)return this;
BOOMR.utils.pluginConfig(b,a,"BW",["base_url","timeout","nruns","cookie","cookie_exp"]);a&&a.user_ip&&(b.user_ip=a.user_ip);if(!b.base_url)return this;h.start=0;b.runs_left=b.nruns;b.latency_runs=10;b.results=[];b.latencies=[];b.latency=null;b.complete=!1;b.aborted=!1;BOOMR.removeVar("ba","ba_err","lat","lat_err");a=BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(b.cookie));a&&a.ba&&b.setVarsFromCookie(a)||(BOOMR.subscribe("page_ready",this.run,null,this),BOOMR.subscribe("page_unload",this.skip,null,
this));b.initialized=!0;return this},run:function(){if(b.running||b.complete)return this;if("https:"===BOOMR.window.location.protocol)return BOOMR.info("HTTPS detected, skipping bandwidth test","bw"),b.complete=!0,BOOMR.sendBeacon(),this;b.running=!0;setTimeout(this.abort,b.timeout);b.defer(b.iterate);return this},abort:function(){b.aborted=!0;b.running&&b.finish();return this},skip:function(){b.complete||(b.complete=!0,BOOMR.sendBeacon());return this},is_complete:function(){return b.complete}}})();
(function(){BOOMR=BOOMR||{};BOOMR.plugins=BOOMR.plugins||{};var b={complete:!1,done:function(){var b=BOOMR.window,a,c;if(this.complete)return this;(a=b.performance||b.msPerformance||b.webkitPerformance||b.mozPerformance)&&a.timing&&a.navigation&&(BOOMR.info("This user agent supports NavigationTiming.","nt"),c=a.navigation,a=a.timing,c={nt_red_cnt:c.redirectCount,nt_nav_type:c.type,nt_nav_st:a.navigationStart,nt_red_st:a.redirectStart,nt_red_end:a.redirectEnd,nt_fet_st:a.fetchStart,nt_dns_st:a.domainLookupStart,
nt_dns_end:a.domainLookupEnd,nt_con_st:a.connectStart,nt_con_end:a.connectEnd,nt_req_st:a.requestStart,nt_res_st:a.responseStart,nt_res_end:a.responseEnd,nt_domloading:a.domLoading,nt_domint:a.domInteractive,nt_domcontloaded_st:a.domContentLoadedEventStart,nt_domcontloaded_end:a.domContentLoadedEventEnd,nt_domcomp:a.domComplete,nt_load_st:a.loadEventStart,nt_load_end:a.loadEventEnd,nt_unload_st:a.unloadEventStart,nt_unload_end:a.unloadEventEnd},a.secureConnectionStart&&(c.nt_ssl_st=a.secureConnectionStart),
a.msFirstPaint&&(c.nt_first_paint=a.msFirstPaint),BOOMR.addVar(c));b.chrome&&b.chrome.loadTimes&&(a=b.chrome.loadTimes())&&(c={nt_spdy:a.wasFetchedViaSpdy?1:0,nt_first_paint:a.firstPaintTime},BOOMR.addVar(c));this.complete=!0;BOOMR.sendBeacon()}};BOOMR.plugins.NavigationTiming={init:function(){BOOMR.subscribe("page_ready",b.done,null,b);BOOMR.subscribe("page_unload",b.done,null,b);return this},is_complete:function(){return b.complete}}})();BOOMR.t_end=(new Date).getTime();
var sessionId = (function () {
    var domain = '.' + (window.location.hostname.match(/((?:laterooms|asiarooms)\..*)/) || ['laterooms.com'])[0];

    function getCookie(key) {
        var result;
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = parts.shift();
            var value = parts.pop();

            if (key && key === name) {
                result = value;
                break;
            }
        }

        return result;
    }

    function doUsAGUID() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };

        return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
    }

    function setCookie() {
        if (!getCookie('SessionId')) {
            document.cookie = 'SessionId=' + doUsAGUID() + '; path=/; domain=' + domain + ';';
        }

        if (BOOMR) {
            BOOMR.addVar('X_LOG_SessionId', getCookie('SessionId'));
        }
    }

    return {
        setCookie: setCookie
    };
})();
if (BOOMR) {
    sessionId.setCookie();
    BOOMR.addVar('x_powered_by', 'moonstick');
    BOOMR.init({
        beacon_url: "/beacon/pageresponse",
        log: null
    });
    BOOMR.plugins.RT.startTimer("t_page");
}
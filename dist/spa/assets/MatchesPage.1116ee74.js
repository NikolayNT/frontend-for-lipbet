var o=Object.defineProperty;var n=(e,t,s)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var a=(e,t,s)=>(n(e,typeof t!="symbol"?t+"":t,s),s);import{Q as c}from"./QPage.cc85e169.js";import{_ as r,d as i,K as l,L as p,M as h,N as u,P as _}from"./index.b2eb5a58.js";import{u as d}from"./vue-i18n.runtime.b8a889c4.js";import"./render.64acd8da.js";class g{constructor(t,s){a(this,"login");a(this,"token");a(this,"baseUrl");a(this,"_headers",{"Content-Type":"application/json"});this.baseUrl=`https://spoyer.com/api/get.php?login=${t}&token=${s}&task=livedata&sport=soccer`}_checkResponse(t){return t.ok?t.json():Promise.reject(`\u041E\u0448\u0438\u0431\u043A\u0430: ${t.status}`)}getLive(){return fetch(`${this.baseUrl}`,{headers:this._headers,method:"GET"}).then(this._checkResponse)}}const m=new g("alexdedyaev","55357-05LXkhYC3k1QUIJ");const f=i({name:"MatchesPage",created(){this.getStat()},methods:{getStat(){m.getLive().then(e=>{console.log(e)}).catch(e=>{console.log(e)})}},setup(){const{locale:e}=d({useScope:"global"});return{locale:e}}}),v={class:"page__title"};function k(e,t,s,$,y,x){return l(),p(c,{style:{"min-height":"calc(100% - 300px)"}},{default:h(()=>[u("h2",v,_(e.$t("leftMenuLive")),1)]),_:1})}var C=r(f,[["render",k]]);export{C as default};

import{Q as r}from"./QPage.2eed997d.js";import{a as i}from"./Api.863e3ee7.js";import{_ as l,d as _,r as d,K as a,L as p,M as u,N as t,P as n,a2 as c,a4 as f,F as m}from"./index.14453f41.js";import{u as g}from"./vue-i18n.runtime.62973999.js";import"./render.6bb493b7.js";const h=_({name:"ForecastsPage",created(){this.getArtile()},methods:{getArtile(){i.getInfoAboutArticle().then(e=>{for(const o in e.body)console.log(`course.${o} = ${e.body[o].content}`);this.content=e.body,console.log(this.content)}).catch(e=>{console.log(e)})}},setup(){const{locale:e}=g({useScope:"global"});return{locale:e,content:d([])}}}),y={class:"forecasts__title"},F={class:"forecasts__content"},$={class:"forecasts__card-title"},v=["innerHTML"];function b(e,o,P,k,x,A){return a(),p(r,{style:{"min-height":"calc(100% - 300px)"}},{default:u(()=>[t("h2",y,n(e.$t("leftMenuForecast")),1),t("div",F,[(a(!0),c(m,null,f(e.content,s=>(a(),c("div",{key:s.id,class:"componentForm forecasts__card"},[t("p",$,n(s.titul),1),t("span",{innerHTML:s.content},null,8,v)]))),128))])]),_:1})}var C=l(h,[["render",b]]);export{C as default};
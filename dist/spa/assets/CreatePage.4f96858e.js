import{Q as h}from"./QBtn.c095418e.js";import{Q as M}from"./QPage.2a155f7e.js";import{Q as R,a as B,b as L}from"./QSelect.3bca00d3.js";import{d as m,r as E,_ as $,K as p,L as I,J as a,a2 as _,N as e,P as g,j as u,B as b,a3 as y,F as S,a4 as q,Q as z,M as x,O as T}from"./index.a9bd3a28.js";import{p as V}from"./format.2eda35f8.js";import{u as J}from"./vue-i18n.runtime.e486a932.js";import"./render.e0b229c6.js";const K=m({name:"CheckboxComponent",props:{title:{type:String,default:""}},setup(){return{right:E(!1)}}});function H(o,n,d,s,c,i){return p(),I(R,{modelValue:o.right,"onUpdate:modelValue":n[0]||(n[0]=t=>o.right=t),label:o.title},null,8,["modelValue","label"])}var F=$(K,[["render",H]]);const W=m({name:"LeaguesList",components:{CheckboxComponent:F},props:{title:{type:String,default:"\u041B\u0438\u0433\u0438"}}}),X={class:"column q-pa-sm componentForm"},Y={class:"componentForm__text"};function Z(o,n,d,s,c,i){const t=a("checkbox-component");return p(),_("div",X,[e("p",Y,g(o.title),1),u(t,{title:"\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0444\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u0430\u044F \u041F\u0440\u0435\u043C\u044C\u0435\u0440-\u043B\u0438\u0433\u0430"}),u(t,{title:"\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u041F\u0440\u0435\u043C\u044C\u0435\u0440-\u043B\u0438\u0433\u0430"}),u(t,{title:"\u041F\u0435\u0440\u0432\u044B\u0439 \u0434\u0438\u0432\u0438\u0437\u0438\u043E\u043D \u0424\u041D\u041B"}),u(t,{title:"\u0412\u0442\u043E\u0440\u043E\u0439 \u0434\u0438\u0432\u0438\u0437\u0438\u043E\u043D"}),u(t,{title:"\u041C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0435 \u0447\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442\u044B"})])}var u4=$(W,[["render",Z]]);const t4=m({name:"OneInputComponent",props:{title:{type:String,default:""},textEnd:{type:String,default:""}},setup(){return{text:E(""),textTwo:E("")}}}),e4={class:"blok"},o4={class:"text"},n4=e("p",{class:"text",style:{"margin-left":"10px"}},"\u0434\u043E",-1),s4={class:"text",style:{"margin-left":"10px"}};function l4(o,n,d,s,c,i){return p(),_("div",e4,[e("p",o4,g(o.title)+" \u043E\u0442",1),b(e("input",{type:"number",class:"input","onUpdate:modelValue":n[0]||(n[0]=t=>o.text=t),style:{width:"50px"}},null,512),[[y,o.text]]),n4,b(e("input",{type:"number",class:"input","onUpdate:modelValue":n[1]||(n[1]=t=>o.textTwo=t),style:{width:"50px"}},null,512),[[y,o.textTwo]]),e("p",s4,g(o.textEnd),1)])}var f=$(t4,[["render",l4]]);const a4=m({name:"PopupAccountComponent",components:{Checkbox:F},props:{text:{type:String,default:""}},setup(){return{dialog:E(!1)}}}),i4={class:"blok"},r4={class:"button-blok"};function c4(o,n,d,s,c,i){const t=a("Checkbox");return p(),_("div",i4,[u(h,{rounded:"",class:"button-open",label:o.text,onClick:n[0]||(n[0]=l=>o.dialog=!0)},null,8,["label"]),e("div",{class:z(["pop-up column",[o.dialog?"pop-up_open":""]])},[e("div",null,[(p(),_(S,null,q(6,l=>e("div",{class:"row",key:l},[(p(),_(S,null,q(6,r=>e("div",{class:"row",key:r},[u(t,{title:(l-1).toString()+":"+(r-1).toString()},null,8,["title"])])),64))])),64))]),e("div",r4,[u(h,{class:"button",label:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",onClick:n[1]||(n[1]=l=>o.dialog=!1)}),u(h,{class:"button button-last",label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",onClick:n[2]||(n[2]=l=>o.dialog=!1)})])],2)])}var C=$(a4,[["render",c4]]);const d4=m({name:"BlokMain",components:{CheckboxComponent:F,TwoInputText:f,PopupAccountComponent:C},props:{title:{type:String,default:""}}}),p4={class:"componentForm q-pa-sm",style:{width:"100%",border:"2px solid black","border-radius":"30px"}},_4=e("p",{class:"componentForm__text"},"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435",-1),m4={class:"row"},$4={class:"row"};function g4(o,n,d,s,c,i){const t=a("checkbox-component"),l=a("PopupAccountComponent"),r=a("TwoInputText");return p(),_("div",p4,[_4,e("div",m4,[u(t,{title:"\u0412\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 1",class:"col-4"}),u(t,{title:"\u041D\u0438\u0447\u044C\u044F",class:"col-4"}),u(t,{title:"\u0412\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 2",class:"col-4"}),u(t,{title:"\u041F\u0435\u0440\u0432\u044B\u0439 \u0442\u0430\u0439\u043C",class:"col-4"}),u(t,{title:"\u041F\u0435\u0440\u0435\u0440\u044B\u0432",class:"col-4"}),u(t,{title:"\u0412\u0442\u043E\u0440\u043E\u0439 \u0442\u0430\u0439\u043C",class:"col-4"})]),e("div",$4,[u(l,{text:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0447\u0451\u0442 \u043C\u0430\u0442\u0447\u0430"}),u(l,{text:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0447\u0451\u0442 \u043D\u0430 \u043F\u0435\u0440\u0435\u0440\u044B\u0432\u0435",style:{"margin-left":"auto"}}),u(r,{title:"\u041C\u0438\u043D\u0443\u0442\u0430 \u043C\u0430\u0442\u0447\u0430"})])])}var h4=$(d4,[["render",g4]]);const D4=m({name:"RadioButtonComponent",setup(){return{shape:E("line")}}}),E4={class:"column"};function f4(o,n,d,s,c,i){return p(),_("div",E4,[u(B,{modelValue:o.shape,"onUpdate:modelValue":n[0]||(n[0]=t=>o.shape=t),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"line",label:"\u0414\u043E\u043C\u0430"},null,8,["modelValue"]),u(B,{modelValue:o.shape,"onUpdate:modelValue":n[1]||(n[1]=t=>o.shape=t),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"rectangle",label:"\u0412 \u0433\u043E\u0441\u0442\u044F\u0445"},null,8,["modelValue"]),u(B,{modelValue:o.shape,"onUpdate:modelValue":n[2]||(n[2]=t=>o.shape=t),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"ellipse",label:"\u041D\u0435 \u0432\u0430\u0436\u043D\u043E"},null,8,["modelValue"])])}var w4=$(D4,[["render",f4]]);const v4=m({name:"ComandType",components:{CheckboxComponent:F,TwoInputText:f,RadioBatton:w4},props:{titleOne:{type:String,default:"\u0424\u0430\u0432\u043E\u0440\u0438\u0442"},titleTwo:{type:String,default:"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440"}}}),x4={class:"componentForm row"},b4={class:"q-pa-sm",style:{width:"50%","border-right":"2px solid black"}},y4={class:"componentForm__text"},F4={class:"row"},C4={style:{width:"50%"}},B4={style:{width:"50%"}},T4={class:"q-pa-sm",style:{width:"calc(50% - 2px)"}},A4={class:"componentForm__text"},k4={class:"row"},S4={style:{width:"50%"}},q4={style:{width:"50%"}};function L4(o,n,d,s,c,i){const t=a("TwoInputText"),l=a("RadioBatton"),r=a("checkbox-component");return p(),_("div",x4,[e("div",b4,[e("p",y4,g(o.titleOne),1),u(t,{title:"\u0424\u0430\u0432\u043E\u0440\u0438\u0442 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 "}),e("div",F4,[e("div",C4,[u(l)]),e("div",B4,[u(r,{title:"\u041F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442"}),u(r,{title:"\u0412\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442"}),u(r,{title:"\u041D\u0438\u0447\u044C\u044F"})])])]),e("div",T4,[e("p",A4,g(o.titleTwo),1),u(t,{title:"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 "}),e("div",k4,[e("div",S4,[u(l)]),e("div",q4,[u(r,{title:"\u041F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442"}),u(r,{title:"\u0412\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442"}),u(r,{title:"\u041D\u0438\u0447\u044C\u044F"})])])])])}var I4=$(v4,[["render",L4]]);const V4=["","1","2","3","4","5","6","7","8","9","10"],G4=m({name:"DropDownList",props:{title:{type:String,default:"\u0418\u0433\u0440"},list:{type:Array,default:V4}},setup(o){return{model:E(null),options:o.list}}}),O4={class:"row",style:{"margin-bottom":"10px"}},P4={class:"self-center q-pt-none q-ma-none q-mx-sm",style:{"margin-top":"10px"}};function N4(o,n,d,s,c,i){return p(),_("div",O4,[e("p",P4,g(o.title),1),u(L,{modelValue:o.model,"onUpdate:modelValue":n[0]||(n[0]=t=>o.model=t),options:o.options,dense:!0},null,8,["modelValue","options"])])}var v=$(G4,[["render",N4]]);const Q4=m({name:"OutcomeGames",components:{DropDownList:v,TwoInputText:f},props:{titleOne:{type:String,default:"\u0424\u0430\u0432\u043E\u0440\u0438\u0442"},titleTwo:{type:String,default:"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440"}}}),U4={class:"componentForm q-pa-sm row"},j4=e("p",{class:"componentForm__text"},"\u0418\u0441\u0445\u043E\u0434 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 10-\u0442\u0438 \u0438\u0433\u0440",-1),M4={style:{width:"33%"}},R4=e("p",{class:"componentForm__text"},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 1",-1),z4={style:{width:"33%"}},J4=e("p",{class:"componentForm__text"},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 2",-1),K4={style:{width:"33%"}},H4=e("p",{class:"componentForm__text"},"\u0424\u0430\u0432\u043E\u0440\u0438\u0442",-1),W4=e("div",{style:{width:"100%",height:"2px","background-color":"black"}},null,-1),X4={style:{width:"33%"}},Y4=e("p",{class:"componentForm__text"},"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440",-1),Z4={style:{width:"35%"}},u0=e("p",{class:"componentForm__text"},"\u041B\u044E\u0431\u0430\u044F \u0438\u0437 \u043A\u043E\u043C\u0430\u043D\u0434",-1);function t0(o,n,d,s,c,i){const t=a("DropDownList"),l=a("TwoInputText");return p(),_("div",U4,[j4,e("div",M4,[R4,u(t),u(l,{title:"\u0412 "}),u(l,{title:"\u041D "}),u(l,{title:"\u041F "})]),e("div",z4,[J4,u(t),u(l,{title:"\u0412 "}),u(l,{title:"\u041D "}),u(l,{title:"\u041F "})]),e("div",K4,[H4,u(t),u(l,{title:"\u0412 "}),u(l,{title:"\u041D "}),u(l,{title:"\u041F "})]),W4,e("div",X4,[Y4,u(t),u(l,{title:"\u0412 "}),u(l,{title:"\u041D "}),u(l,{title:"\u041F "})]),e("div",Z4,[u0,u(t),u(l,{title:"\u0412 "}),u(l,{title:"\u041D "}),u(l,{title:"\u041F "})])])}var e0=$(Q4,[["render",t0]]);const o0=m({name:"GoalsComponent",components:{DropDownList:v,TwoInputText:f},props:{titleOne:{type:String,default:"\u0424\u0430\u0432\u043E\u0440\u0438\u0442"},titleTwo:{type:String,default:"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440"}}}),n0={class:"componentForm colomn q-pa-sm",style:{width:"100%",border:"2px solid black","border-radius":"30px"}},s0=e("p",{class:"componentForm__text"},"\u0413\u043E\u043B\u044B",-1),l0={class:"row justify-center"},a0=e("p",{class:"self-center q-pt-none q-ma-none q-mx-sm",style:{"margin-bottom":"10px"}},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 1",-1),i0={class:"row",style:{width:"100%","border-bottom":"2px solid black","margin-bottom":"10px"}},r0=e("p",{class:"self-center q-pt-none q-ma-none q-mx-sm",style:{"margin-bottom":"10px"}},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 2",-1),c0={class:"row",style:{width:"100%","border-bottom":"2px solid black"}},d0={class:"row q-mx-sm"},p0={class:"row"},_0=e("p",{class:"self-center q-pt-none q-ma-none",style:{"margin-bottom":"10px"}},"\xA0\u043C\u0438\u043D\u0443\u0442",-1),m0={class:"row"},$0=e("p",{class:"self-center q-pt-none q-ma-none",style:{"margin-bottom":"10px"}},"\xA0\u0432\u0441\u0435\u0433\u043E",-1);function g0(o,n,d,s,c,i){const t=a("TwoInputText"),l=a("DropDownList");return p(),_("div",n0,[s0,e("div",l0,[a0,e("div",i0,[u(t,{style:{width:"32%"},title:"\u0417\u0430\u0431\u0438\u0442\u043E "}),u(t,{style:{width:"32%"},title:"\u0412\u0441\u0435\u0433\u043E "}),u(t,{style:{width:"32%"},title:"\u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E "})]),r0,e("div",c0,[u(t,{style:{width:"32%"},title:"\u0417\u0430\u0431\u0438\u0442\u043E "}),u(t,{style:{width:"32%"},title:"\u0412\u0441\u0435\u0433\u043E "}),u(t,{style:{width:"32%"},title:"\u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E "})])]),e("div",d0,[e("div",p0,[u(l,{title:"\u0413\u043E\u043B\u043E\u0432 \u0437\u0430\u0431\u0438\u0442\u043E",list:["-","0","1","2","3","4","5"]}),u(l,{title:"\u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 ",list:["-","1","3","5","10","15","20","25","30","35","40"]}),_0]),u(t,{title:"\u0413\u043E\u043B\u043E\u0432 \u0437\u0430\u0431\u0438\u0442\u043E \u0432 \u043F\u0435\u0440\u0432\u043E\u043C \u0442\u0430\u0439\u043C\u0435 ",style:{"margin-left":"auto"}}),e("div",m0,[u(l,{title:"\u0413\u043E\u043B\u043E\u0432 \u0437\u0430\u0431\u0438\u0442\u043E",list:["-","0","1","2","3","4","5"]}),$0]),u(t,{title:"\u0413\u043E\u043B\u043E\u0432 \u0437\u0430\u0431\u0438\u0442\u043E \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u043C \u0442\u0430\u0439\u043C\u0435 ",style:{"margin-left":"auto"}})])])}var h0=$(o0,[["render",g0]]);const D0=m({name:"OddsOutcomeComponent",components:{TwoInputText:f},props:{titleGeneral:{type:String,default:""},titleOne:{type:String,default:"\u0424\u0430\u0432\u043E\u0440\u0438\u0442"},titleTwo:{type:String,default:"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440"}}}),E0={class:"componentForm row q-pa-sm",style:{width:"100%",border:"2px solid black","border-radius":"30px"}},f0={class:"componentForm__text",style:{width:"100%"}},w0={class:"q-pa-sm",style:{width:"50%"}},v0={class:"text-h5"},x0={class:"q-pa-sm",style:{width:"calc(50%)"}},b0={class:"text-h5"};function y0(o,n,d,s,c,i){const t=a("TwoInputText");return p(),_("div",E0,[e("p",f0,g(o.titleGeneral),1),e("div",w0,[e("p",v0,g(o.titleOne),1),u(t,{title:"\u041F1 "}),u(t,{title:"\u0425 "}),u(t,{title:"\u041F2 "})]),e("div",x0,[e("p",b0,g(o.titleTwo),1),u(t,{title:"\u041F1 "}),u(t,{title:"\u0425 "}),u(t,{title:"\u041F2 "})])])}var F0=$(D0,[["render",y0]]);const C0=["","1","2","3","4","5","6","7","8","9","10"],B0=m({name:"DropDownListAndTwoInputText",props:{title:{type:String,default:"\u0418\u0433\u0440"},titleTwo:{type:String,default:""},list:{type:Array,default:C0},endText:{type:String,default:""}},setup(o){return{model:E(null),options:o.list,text:E(""),textEnd:E("")}}}),T0={class:"row"},A0={class:"self-center q-pt-none q-ma-none q-mx-sm"},k0={class:"self-center q-pt-none q-ma-none text-no-wrap q-mx-sm"},S0=e("p",{class:"self-center q-pt-none q-ma-none q-mx-sm"},"\u0434\u043E",-1),q0={class:"self-center q-pt-none q-ma-none q-mx-sm"};function L0(o,n,d,s,c,i){return p(),_("div",T0,[e("p",A0,g(o.title),1),u(L,{modelValue:o.model,"onUpdate:modelValue":n[0]||(n[0]=t=>o.model=t),options:o.options,dense:!0},null,8,["modelValue","options"]),e("p",k0,g(o.titleTwo)+" \u043E\u0442",1),b(e("input",{type:"number","onUpdate:modelValue":n[1]||(n[1]=t=>o.text=t),style:{"max-width":"70px"},class:"input"},null,512),[[y,o.text]]),S0,b(e("input",{type:"number","onUpdate:modelValue":n[2]||(n[2]=t=>o.textEnd=t),style:{"max-width":"70px"},class:"input"},null,512),[[y,o.textEnd]]),e("p",q0,g(o.endText),1)])}var A=$(B0,[["render",L0]]);const I0=m({name:"TotalPrematchAndLive",components:{DropDownListAndTwoInputText:A},props:{titleGeneral:{type:String,default:""},titleOne:{type:String,default:""},titleTwo:{type:String,default:""}}}),V0={class:"componentForm colomn q-pa-sm",style:{width:"100%",border:"2px solid black","border-radius":"30px"}},G0={class:"componentForm__text",style:{width:"100%"}},O0={class:"row",style:{width:"100%"}};function P0(o,n,d,s,c,i){const t=a("DropDownListAndTwoInputText");return p(),_("div",V0,[e("p",G0,g(o.titleGeneral),1),e("div",O0,[u(t,{title:"\u0422\u0411","title-two":"\u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442",list:["-","0","0.5","1","1.5","2","2.5","3","3.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432"}),u(t,{title:"\u0422\u0411","title-two":"\u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442",list:["-","0","0.5","1","1.5","2","2.5","3","3.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432"})])])}var N0=$(I0,[["render",P0]]);const Q0=m({name:"BlockForFormCommands",components:{DropDownList:v,TwoInputText:f,DropDownListAndTwoInputText:A,PopupAccountComponent:C},props:{title:{type:String,default:""}}}),U0={class:"colomn q-pa-sm q-mt-md",style:{width:"100%",border:"2px solid black","border-radius":"30px"}},j0={class:"componentForm__text",style:{width:"100%"}},M0={class:"colomn",style:{width:"100%"}},R0={class:"row"},z0={class:"row"},J0={class:"row"},K0={class:"row"};function H0(o,n,d,s,c,i){const t=a("DropDownList"),l=a("PopupAccountComponent"),r=a("TwoInputText"),D=a("DropDownListAndTwoInputText");return p(),_("div",U0,[e("p",j0,g(o.title),1),e("div",M0,[e("div",R0,[u(t),u(l,{text:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0447\u0451\u0442 \u043C\u0430\u0442\u0447\u0430"})]),e("div",z0,[u(r,{title:"\u0413\u0417"}),u(r,{title:"\u0413\u041F",style:{"margin-left":"33px","margin-right":"33px"}}),u(r,{title:"\u0412\u0441\u0435\u0433\u043E \u0417+\u041F"})]),e("div",J0,[u(D,{title:"\u0422\u0411",list:["-","0.5","1.5","2.5","3.5","4.5","5.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432"}),u(D,{title:"\u0418\u043D\u0434. \u0422\u0411",list:["-","0.5","1.5","2.5","3.5","4.5","5.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432",style:{"margin-left":"80px"}}),u(D,{title:"\u0422\u041C",list:["-","0.5","1.5","2.5","3.5","4.5","5.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432"}),u(D,{title:"\u0418\u043D\u0434. \u0422\u041C",list:["-","0.5","1.5","2.5","3.5","4.5","5.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432",style:{"margin-left":"77px"}})]),e("div",K0,[u(t,{title:"\u0413\u0417 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C min \u043C\u0430\u0442\u0447\u0435"}),u(t,{title:"\u0413\u041F \u0432 \u043A\u0430\u0436\u0434\u043E\u043C min \u043C\u0430\u0442\u0447\u0435",style:{"margin-left":"202px"}})])])])}var W0=$(Q0,[["render",H0]]);const X0=m({name:"FormCommands",components:{BlockForFormCommands:W0},props:{titleGeneral:{type:String,default:"\u0424\u043E\u0440\u043C\u0430 \u043A\u043E\u043C\u0430\u043D\u0434"}}}),Y0={class:"componentForm colomn q-pa-sm",style:{width:"100%",border:"2px solid black","border-radius":"30px"}},Z0={class:"componentForm__text",style:{width:"100%"}};function uu(o,n,d,s,c,i){const t=a("BlockForFormCommands");return p(),_("div",Y0,[e("p",Z0,g(o.titleGeneral),1),u(t,{title:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 1"}),u(t,{title:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 2"}),u(t,{title:"\u0424\u0430\u0432\u043E\u0440\u0438\u0442"}),u(t,{title:"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440"}),u(t,{title:"\u041B\u044E\u0431\u0430\u044F \u0438\u0437 \u043A\u043E\u043C\u0430\u043D\u0434"})])}var tu=$(X0,[["render",uu]]);const eu=m({name:"FaceToFaceGames",components:{DropDownList:v,TwoInputText:f,PopupAccount:C}}),ou={class:"componentForm q-pa-sm",style:{width:"100%",border:"2px solid black","border-radius":"30px"}},nu=e("p",{class:"componentForm__text",style:{width:"100%"}},"\u041E\u0447\u043D\u044B\u0435 \u0438\u0433\u0440\u044B \u0438\u0441\u0445\u043E\u0434",-1),su={class:"colomn"},lu={class:"row"},au={class:"row"},iu={class:"row"};function ru(o,n,d,s,c,i){const t=a("DropDownList"),l=a("PopupAccount"),r=a("TwoInputText");return p(),_("div",ou,[nu,e("div",su,[e("div",lu,[u(t),u(l,{text:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0447\u0451\u0442 \u043C\u0430\u0442\u0447\u0430"})]),e("div",au,[u(r,{title:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 1","text-end":"\u0438\u0433\u0440"}),u(r,{title:"\u041D\u0438\u0447\u044C\u044F","text-end":"\u0438\u0433\u0440"}),u(r,{title:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 2","text-end":"\u0438\u0433\u0440"})]),e("div",iu,[u(r,{title:"\u041B\u044E\u0431\u0430\u044F \u0412","text-end":"\u0438\u0433\u0440"}),u(r,{title:"\u041B\u044E\u0431\u0430\u044F \u041F","text-end":"\u0438\u0433\u0440"})])])])}var cu=$(eu,[["render",ru]]);const du=m({name:"FaceToFaceGoals",components:{DropDownList:v,TwoInputText:f,DropDownListAndTwoInputText:A,PopupAccount:C}}),pu={class:"componentForm q-pa-sm",style:{width:"100%",border:"2px solid black","border-radius":"30px"}},_u=e("p",{class:"componentForm__text",style:{width:"100%"}},"\u041E\u0447\u043D\u044B\u0435 \u0438\u0433\u0440\u044B \u0433\u043E\u043B\u044B",-1),mu={class:"colomn",style:{width:"100%"}},$u={class:"row"},gu={class:"row"},hu={class:"row"};function Du(o,n,d,s,c,i){const t=a("DropDownList"),l=a("PopupAccount"),r=a("TwoInputText"),D=a("DropDownListAndTwoInputText");return p(),_("div",pu,[_u,e("div",mu,[e("div",$u,[u(t),u(l,{text:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0447\u0451\u0442 \u043C\u0430\u0442\u0447\u0430"})]),e("div",gu,[u(r,{title:"\u0413\u0417 \u041A\u043E\u043C\u0430\u043D\u0434\u0430 1"}),u(r,{title:"\u0413\u0417 \u041A\u043E\u043C\u0430\u043D\u0434\u0430 2"}),u(r,{title:"\u0413\u041F \u041A\u043E\u043C\u0430\u043D\u0434\u0430 1"}),u(r,{title:"\u0413\u041F \u041A\u043E\u043C\u0430\u043D\u0434\u0430 2"})]),u(D,{title:"\u0418\u041D\u0414. \u0422 \u041A\u043E\u043C\u0430\u043D\u0434\u0430 1",list:["-","0.5","1.5","2.5","3.5","4.5","5.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432"}),u(D,{title:"\u0418\u041D\u0414. \u0422 \u041A\u043E\u043C\u0430\u043D\u0434\u0430 2",list:["-","0.5","1.5","2.5","3.5","4.5","5.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432"}),e("div",hu,[u(D,{title:"\u0422\u0411",list:["-","0.5","1.5","2.5","3.5","4.5","5.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432"}),u(D,{title:"\u0422\u041C",list:["-","0.5","1.5","2.5","3.5","4.5","5.5"],"end-text":"\u0433\u043E\u043B\u043E\u0432"}),u(r,{title:"\u0424\u0430\u0432\u043E\u0440\u0438\u0442"}),u(r,{title:"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440",style:{"margin-left":"80px"}})])])])}var Eu=$(du,[["render",Du]]);const fu=m({name:"PenaltyComponent",components:{DropDownList:v}}),wu={class:"componentForm q-pa-sm"},vu=e("p",{class:"componentForm__text",style:{width:"100%"}},"\u041F\u0435\u043D\u0430\u043B\u044C\u0442\u0438",-1),xu={class:"row"};function bu(o,n,d,s,c,i){const t=a("DropDownList");return p(),_("div",wu,[vu,e("div",xu,[u(t,{title:"\u0412 \u043F\u0435\u0440\u0432\u043E\u043C \u0442\u0430\u0439\u043C\u0435",list:["-","\u0414\u0430","\u041D\u0435\u0442"],class:"col-3"}),u(t,{title:"\u0417\u0430\u0431\u0438\u0442",list:["-","\u0414\u0430","\u041D\u0435\u0442"],class:"col-7"}),u(t,{title:"\u0412\u043E \u0432\u0442\u043E\u0440\u043E\u043C \u0442\u0430\u0439\u043C\u0435",list:["-","\u0414\u0430","\u041D\u0435\u0442"],class:"col-3"}),u(t,{title:"\u0417\u0430\u0431\u0438\u0442",list:["-","\u0414\u0430","\u041D\u0435\u0442"],class:"col-7"}),u(t,{title:"\u0412 \u043C\u0430\u0442\u0447\u0435",list:["-","\u0414\u0430","\u041D\u0435\u0442"],class:"col-3"}),u(t,{title:"\u0417\u0430\u0431\u0438\u0442",list:["-","\u0414\u0430","\u041D\u0435\u0442"],class:"col-7"})])])}var yu=$(fu,[["render",bu]]);const Fu=m({name:"BlockForFormStatistics",components:{TwoInputText:f},props:{title:{type:String,default:""}}}),Cu={class:"colomn q-pa-sm q-mt-md",style:{width:"48%",border:"2px solid black","border-radius":"30px","margin-right":"9px"}},Bu={class:"componentForm__text",style:{width:"100%"}},Tu={class:"colomn",style:{width:"100%"}};function Au(o,n,d,s,c,i){const t=a("TwoInputText");return p(),_("div",Cu,[e("p",Bu,g(o.title),1),e("div",Tu,[u(V,{rounded:"",style:{margin:"10px 0"}},{default:x(()=>[u(h,{rounded:"",class:"button",label:"\u041C\u0430\u0442\u0447"}),u(h,{rounded:"",class:"button",label:"1 \u0442\u0430\u0439\u043C"}),u(h,{rounded:"",class:"button",label:"2 \u0442\u0430\u0439\u043C"})]),_:1}),u(t,{title:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 1"}),u(t,{title:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 2"}),u(t,{title:"\u041B\u044E\u0431\u0430\u044F"}),u(t,{title:"\u0412\u0441\u0435\u0433\u043E"}),u(t,{title:"\u0424\u0430\u0432\u043E\u0440\u0438\u0442"}),u(t,{title:"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440"})])])}var ku=$(Fu,[["render",Au]]);const Su=m({name:"BlockForFormStatisticsBig",components:{TwoInputText:f,DropDownList:v},props:{title:{type:String,default:""}}}),qu={class:"colomn q-pa-sm q-mt-md",style:{width:"48%",border:"2px solid black","border-radius":"30px","margin-right":"9px"}},Lu={class:"componentForm__text",style:{width:"100%"}},Iu={class:"colomn",style:{width:"100%"}},Vu=e("p",null,"\u043C\u0438\u043D\u0443\u0442",-1),Gu=e("p",null,"\u0432\u0441\u0435\u0433\u043E",-1);function Ou(o,n,d,s,c,i){const t=a("TwoInputText"),l=a("DropDownList");return p(),_("div",qu,[e("p",Lu,g(o.title),1),e("div",Iu,[u(V,{rounded:"",style:{margin:"10px 0"}},{default:x(()=>[u(h,{rounded:"",class:"button",label:"\u041C\u0430\u0442\u0447"}),u(h,{rounded:"",class:"button",label:"1 \u0442\u0430\u0439\u043C"}),u(h,{rounded:"",class:"button",label:"2 \u0442\u0430\u0439\u043C"})]),_:1}),u(t,{title:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 1"}),u(t,{title:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 2"}),u(t,{title:"\u041B\u044E\u0431\u0430\u044F"}),u(t,{title:"\u0412\u0441\u0435\u0433\u043E"}),u(t,{title:"\u0424\u0430\u0432\u043E\u0440\u0438\u0442"}),u(t,{title:"\u0410\u0443\u0442\u0441\u0430\u0439\u0434\u0435\u0440"}),e("div",null,[e("div",null,[u(l,{title:"\u0423\u0433\u043B\u043E\u0432\u044B\u0445 \u043F\u043E\u0434\u0430\u043D\u043E"}),u(l,{title:"\u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435",list:["-","1","3","5","10","15","20","25","30","35","40"]}),Vu]),e("div",null,[u(l,{title:"\u0423\u0433\u043B\u043E\u0432\u044B\u0445 \u043F\u043E\u0434\u0430\u043D\u043E"}),Gu])])])])}var Pu=$(Su,[["render",Ou]]);const Nu=m({name:"StatisticsCommands",components:{BlockForFormStatisticsVue:ku,BlockForFormStatisticsBig:Pu},props:{titleGeneral:{type:String,default:"\u0424\u043E\u0440\u043C\u0430 \u043A\u043E\u043C\u0430\u043D\u0434"}}}),Qu={class:"componentForm q-pa-sm",style:{width:"100%",border:"2px solid black","border-radius":"30px"}},Uu={class:"componentForm__text",style:{width:"100%"}},ju={class:"row"};function Mu(o,n,d,s,c,i){const t=a("BlockForFormStatisticsVue"),l=a("BlockForFormStatisticsBig");return p(),_("div",Qu,[e("p",Uu,g(o.titleGeneral),1),e("div",ju,[u(t,{title:"% \u0412\u043B\u0430\u0434\u0435\u043D\u0438\u044F \u043C\u044F\u0447\u043E\u043C",class:"col-6"}),u(t,{title:"\u0423\u0434\u0430\u0440\u044B \u043F\u043E \u0432\u043E\u0440\u043E\u0442\u0430\u043C",class:"col-6"}),u(t,{title:"\u0423\u0434\u0430\u0440\u044B \u0432 \u0441\u0442\u0432\u043E\u0440 \u0432\u043E\u0440\u043E\u0442",class:"col-6"}),u(l,{title:"\u0423\u0433\u043B\u043E\u0432\u044B\u0435 \u0443\u0434\u0430\u0440\u044B",class:"col-6"}),u(t,{title:"\u0416\u0451\u043B\u0442\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",class:"col-6"}),u(t,{title:"\u041A\u0440\u0430\u0441\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",class:"col-6"}),u(t,{title:"\u0410\u0443\u0442\u044B",class:"col-6"}),u(t,{title:"\u0424\u043E\u043B\u044B",class:"col-6"}),u(t,{title:"\u0410\u0442\u0430\u043A\u0438",class:"col-6"}),u(t,{title:"\u041E\u043F\u0430\u0441\u043D\u044B\u0435 \u0410\u0442\u0430\u043A\u0438",class:"col-6"})])])}var Ru=$(Nu,[["render",Mu]]);const zu=m({name:"CreatePage",components:{LeaguesList:u4,BlokMain:h4,ComandType:I4,OutcomeGames:e0,Goals:h0,OddsOutcome:F0,TotalPrematchAndLive:N0,FormCommandsVue:tu,FaceToFaceGames:cu,FaceToFaceGoals:Eu,Penalty:yu,Statistics:Ru},setup(){const{locale:o}=J({useScope:"global"}),n=E([]),d=E([]);return{locale:o,status1:n,status2:d,handler1(s){n.value=[];for(const c in s){const i=s[c],t=`type: ${i.type}, nodes added: ${i.addedNodes.length>0?"true":"false"}, nodes removed: ${i.removedNodes.length>0?"true":"false"}, oldValue: ${i.oldValue}`;n.value.push(t)}},handler2(s){d.value=[];for(const c in s){const i=s[c],t=`type: ${i.type}, nodes added: ${i.addedNodes.length>0?"true":"false"}, nodes removed: ${i.removedNodes.length>0?"true":"false"}, oldValue: ${i.oldValue}`;d.value.push(t)}},onDragStart(s){s.dataTransfer.setData("text",s.target.id),s.dataTransfer.dropEffect="move"},onDragEnter(s){s.target.draggable!==!0&&s.target.classList.add("drag-enter")},onDragLeave(s){s.target.classList.remove("drag-enter")},onDragOver(s){s.preventDefault()},onDrop(s){if(console.log(s),s.preventDefault(),s.target.draggable===!0)return;const c=s.dataTransfer.getData("text"),i=document.getElementById(c);if(console.log(""),console.log(c),console.log(i.draggable),console.log(""),i.parentNode===s.target){s.target.classList.remove("drag-enter");return}const t=document.querySelector("#bot");console.log(t),i.parentNode.removeChild(i),console.log(s.target);var l=Object.keys(i);console.log(l),i.draggable=!1,t.appendChild(i),s.target.classList.remove("drag-enter")}}}}),Ju=e("p",{class:"page__text"},"\u0427\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0431\u043E\u0442, \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043D\u0443\u0436\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0431\u043E\u0442\u0430 \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0438\u0445.",-1),Ku={class:"row"},Hu={class:"areas"},Wu=e("h2",{class:"areas__title"},"\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440",-1),Xu=["v-mutation"],Yu={class:"areas"},Zu=e("h2",{class:"areas__title"},"\u0411\u043E\u0442",-1),ut=["v-mutation"],tt={class:"button__block col"};function et(o,n,d,s,c,i){const t=a("BlokMain"),l=a("ComandType"),r=a("OutcomeGames"),D=a("Goals"),G=a("OddsOutcome"),k=a("TotalPrematchAndLive"),O=a("FormCommandsVue"),P=a("FaceToFaceGames"),N=a("FaceToFaceGoals"),Q=a("Penalty"),U=a("Statistics"),j=a("LeaguesList");return p(),I(M,{style:{"min-height":"calc(100% - 300px)",position:"relative"}},{default:x(()=>[Ju,e("div",Ku,[e("div",Hu,[Wu,e("div",{class:"areas__content areas__content_border_solid column","v-mutation":o.handler1,onDragover:n[0]||(n[0]=(...w)=>o.onDragOver&&o.onDragOver(...w))},[u(t,{id:"box1",draggable:"true",onDragstart:o.onDragStart},null,8,["onDragstart"]),u(l,{id:"box2",draggable:"true",onDragstart:o.onDragStart},null,8,["onDragstart"]),u(r,{id:"box3",draggable:"true",onDragstart:o.onDragStart},null,8,["onDragstart"]),u(D,{id:"box4",draggable:"true",onDragstart:o.onDragStart},null,8,["onDragstart"]),u(G,{id:"box5",draggable:"true",onDragstart:o.onDragStart,titleGeneral:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u043A\u043D\u0442\u044B \u043D\u0430 \u0438\u0441\u0445\u043E\u0434",titleOne:"\u041F\u0440\u0435\u043C\u0430\u0442\u0447",titleTwo:"\u041B\u0430\u0439\u0432"},null,8,["onDragstart"]),u(k,{id:"box6",draggable:"true",onDragstart:o.onDragStart,titleGeneral:"\u0422\u043E\u0442\u0430\u043B \u043F\u0440\u0435\u043C\u0430\u0442\u0447"},null,8,["onDragstart"]),u(k,{id:"box7",draggable:"true",onDragstart:o.onDragStart,titleGeneral:"\u0422\u043E\u0442\u0430\u043B \u043B\u0430\u0439\u0432"},null,8,["onDragstart"]),u(O,{id:"box8",draggable:"true",onDragstart:o.onDragStart},null,8,["onDragstart"]),u(P,{id:"box9",draggable:"true",onDragstart:o.onDragStart},null,8,["onDragstart"]),u(N,{id:"box10",draggable:"true",onDragstart:o.onDragStart},null,8,["onDragstart"]),u(Q,{id:"box11",draggable:"true",onDragstart:o.onDragStart},null,8,["onDragstart"]),u(U,{id:"box12",draggable:"true",onDragstart:o.onDragStart,"title-general":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"},null,8,["onDragstart"])],40,Xu)]),e("div",Yu,[Zu,e("div",{id:"bot",class:"areas__content column","v-mutation":o.handler2,onDragenter:n[1]||(n[1]=(...w)=>o.onDragEnter&&o.onDragEnter(...w)),onDragleave:n[2]||(n[2]=(...w)=>o.onDragLeave&&o.onDragLeave(...w)),onDragover:n[3]||(n[3]=(...w)=>o.onDragOver&&o.onDragOver(...w)),onDrop:n[4]||(n[4]=(...w)=>o.onDrop&&o.onDrop(...w)),style:{"min-height":"97.9%","padding-bottom":"0"}},[u(j)],40,ut)])]),e("div",tt,[u(h,{class:"button__element glossy",color:"indigo-7"},{default:x(()=>[T("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")]),_:1}),u(h,{class:"button__element glossy",color:"indigo-7"},{default:x(()=>[T("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435")]),_:1}),u(h,{class:"button__element glossy",color:"indigo-7"},{default:x(()=>[T("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0431\u043B\u043E\u043A\u0438")]),_:1})])]),_:1})}var ct=$(zu,[["render",et]]);export{ct as default};
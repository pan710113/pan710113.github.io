import{_ as i,r as n,c as a,a as t,b as _,d as m,F as c,o as d,P as r}from"./index-DzdtQbR9.js";const u={class:"modal fade",id:"item_modal_id",tabindex:"-1"},p={class:"modal-dialog modal-xl"},f={class:"modal-content"},b={key:0,class:"rounded-1 modal_container"},y={__name:"TestView",props:{search_list:{type:Array,default:[]}},setup(v){const s=n(!1);function l(){s.value=!0;let o=document.getElementById("show_item_modal_id");o&&o.click()}return(o,e)=>(d(),a(c,null,[t("div",{class:"test_container"},[t("button",{onClick:l},"test")]),t("div",null,[e[1]||(e[1]=t("button",{type:"button",id:"show_item_modal_id",style:{display:"none"},"data-bs-toggle":"modal","data-bs-target":"#item_modal_id"},"Show Modal",-1)),t("div",u,[t("div",p,[t("div",f,[s.value?(d(),a("div",b,[_(r)])):m("",!0)]),e[0]||(e[0]=t("button",{type:"button",id:"hide_item_modal_id",style:{display:"none"},"data-bs-dismiss":"modal"},"Hide Modal",-1))])])])],64))}},g=i(y,[["__scopeId","data-v-6465f674"]]);export{g as default};
import{c as $,e as Me}from"./chunk-7QZA5FO3.js";import{D as U,E as me,G as ve,H as ze,I as T,R as ye,Ya as be,ea as Se,t as fe,v as ge,z as P}from"./chunk-S6VHRKWT.js";import{Aa as z,Ac as pe,Ba as ne,C as M,Ca as se,Gb as S,Hb as W,I as _,Ia as re,Jb as p,L as A,Lb as w,Lc as K,M as B,Ma as ae,Oc as o,Pc as f,Sb as q,Vb as x,W as L,Wb as F,Xb as de,Yb as he,Yd as v,Zb as m,a as b,b as E,bc as ue,ec as N,ga as j,gb as oe,gc as V,ia as Q,kd as C,la as ee,lb as k,lc as O,ma as te,mb as g,mc as R,na as ie,nc as H,q as J,tb as y,ub as le,yc as ce}from"./chunk-6OWGBYMB.js";var je={1:v("_calendar"),2:v("_offWork"),3:v("_runtime"),4:v("_image"),5:v("_countdown"),6:"HTML",7:v("_holiday")};var Ce=["handle"],Te=n=>({$implicit:n}),G=(n,l)=>l.value;function De(n,l){if(n&1&&m(0,"span",1),n&2){let e=l.$implicit;w("ant-slider-mark-active",e.active),p("ngStyle",e.style)("innerHTML",e.label,oe)}}function _e(n,l){if(n&1&&m(0,"span",1),n&2){let e=l.$implicit;w("ant-slider-dot-active",e.active),p("ngStyle",e.style)}}function Ae(n,l){if(n&1&&m(0,"nz-slider-step",2),n&2){let e=V();p("vertical",e.nzVertical)("min",e.nzMin)("max",e.nzMax)("lowerBound",e.bounds.lower)("upperBound",e.bounds.upper)("marksArray",e.marksArray)("included",e.nzIncluded)("reverse",e.nzReverse)}}function we(n,l){if(n&1){let e=ue();de(0,"nz-slider-handle",4),N("focusin",function(){let i=ne(e).$index,s=V();return se(s.onHandleFocusIn(i))}),he()}if(n&2){let e=l.$implicit,t=V();p("vertical",t.nzVertical)("reverse",t.nzReverse)("offset",e.offset)("value",e.value)("active",e.active)("tooltipFormatter",t.nzTipFormatter)("tooltipVisible",t.nzTooltipVisible)("tooltipPlacement",t.nzTooltipPlacement)("dir",t.dir)}}function xe(n,l){if(n&1&&m(0,"nz-slider-marks",2),n&2){let e=V();p("vertical",e.nzVertical)("min",e.nzMin)("max",e.nzMax)("lowerBound",e.bounds.lower)("upperBound",e.bounds.upper)("marksArray",e.marksArray)("included",e.nzIncluded)("reverse",e.nzReverse)}}var X=(()=>{class n{constructor(){this.isDragging=!1}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=te({token:n,factory:n.\u0275fac})}}return n})(),Y=(()=>{class n{constructor(e,t){this.sliderService=e,this.cdr=t,this.tooltipVisible="default",this.active=!1,this.dir="ltr",this.style={},this.enterHandle=()=>{this.sliderService.isDragging||(this.toggleTooltip(!0),this.updateTooltipPosition(),this.cdr.detectChanges())},this.leaveHandle=()=>{this.sliderService.isDragging||(this.toggleTooltip(!1),this.cdr.detectChanges())}}ngOnChanges(e){let{offset:t,value:i,active:s,tooltipVisible:r,reverse:a,dir:d}=e;(t||a||d)&&this.updateStyle(),i&&(this.updateTooltipTitle(),this.updateTooltipPosition()),s&&(s.currentValue?this.toggleTooltip(!0):this.toggleTooltip(!1)),r?.currentValue==="always"&&Promise.resolve().then(()=>this.toggleTooltip(!0,!0))}focus(){this.handleEl?.nativeElement.focus()}toggleTooltip(e,t=!1){!t&&(this.tooltipVisible!=="default"||!this.tooltip)||(e?this.tooltip?.show():this.tooltip?.hide())}updateTooltipTitle(){this.tooltipFormatter?this.tooltipTitle=typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.tooltipFormatter:this.tooltipTitle=`${this.value}`}updateTooltipPosition(){this.tooltip&&Promise.resolve().then(()=>this.tooltip?.updatePosition())}updateStyle(){let e=this.vertical,t=this.reverse,i=this.offset,s=e?{[t?"top":"bottom"]:`${i}%`,[t?"bottom":"top"]:"auto",transform:t?null:"translateY(+50%)"}:E(b({},this.getHorizontalStylePosition()),{transform:`translateX(${t?this.dir==="rtl"?"-":"+":this.dir==="rtl"?"+":"-"}50%)`});this.style=s,this.cdr.markForCheck()}getHorizontalStylePosition(){let e=this.reverse?"auto":`${this.offset}%`,t=this.reverse?`${this.offset}%`:"auto";if(this.dir==="rtl"){let i=e;e=t,t=i}return{left:e,right:t}}static{this.\u0275fac=function(t){return new(t||n)(g(X),g(K))}}static{this.\u0275cmp=y({type:n,selectors:[["nz-slider-handle"]],viewQuery:function(t,i){if(t&1&&(O(Ce,5),O($,5)),t&2){let s;R(s=H())&&(i.handleEl=s.first),R(s=H())&&(i.tooltip=s.first)}},hostBindings:function(t,i){t&1&&N("mouseenter",function(){return i.enterHandle()})("mouseleave",function(){return i.leaveHandle()})},inputs:{vertical:[2,"vertical","vertical",o],reverse:[2,"reverse","reverse",o],offset:[2,"offset","offset",P],value:[2,"value","value",P],tooltipVisible:"tooltipVisible",tooltipPlacement:"tooltipPlacement",tooltipFormatter:"tooltipFormatter",active:[2,"active","active",o],dir:"dir"},exportAs:["nzSliderHandle"],features:[S,z],decls:2,vars:7,consts:[["handle",""],["tabindex","0","nz-tooltip","",1,"ant-slider-handle",3,"ngStyle","nzTooltipTitle","nzTooltipTitleContext","nzTooltipTrigger","nzTooltipPlacement"]],template:function(t,i){t&1&&m(0,"div",1,0),t&2&&p("ngStyle",i.style)("nzTooltipTitle",i.tooltipFormatter===null||i.tooltipVisible==="never"?null:i.tooltipTitle)("nzTooltipTitleContext",pe(5,Te,i.value))("nzTooltipTrigger",null)("nzTooltipPlacement",i.tooltipPlacement)},dependencies:[Me,$,C],encapsulation:2,changeDetection:0})}}return n})(),Fe=(()=>{class n{constructor(){this.lowerBound=null,this.upperBound=null,this.marksArray=[],this.vertical=!1,this.included=!1,this.marks=[]}ngOnChanges(e){let{marksArray:t,lowerBound:i,upperBound:s,reverse:r}=e;(t||r)&&this.buildMarks(),(t||i||s||r)&&this.togglePointActive()}buildMarks(){let e=this.max-this.min;this.marks=this.marksArray.map(t=>{let{value:i,offset:s,config:r}=t,a=this.getMarkStyles(i,e,r);return{label:ke(r)?r.label:r,offset:s,style:a,value:i,config:r,active:!1}})}getMarkStyles(e,t,i){let s,r=this.reverse?this.max+this.min-e:e;return this.vertical?s={marginBottom:"-50%",bottom:`${(r-this.min)/t*100}%`}:s={transform:"translate3d(-50%, 0, 0)",left:`${(r-this.min)/t*100}%`},ke(i)&&i.style&&(s=b(b({},s),i.style)),s}togglePointActive(){this.marks&&this.lowerBound!==null&&this.upperBound!==null&&this.marks.forEach(e=>{let t=e.value,i=!this.included&&t===this.upperBound||this.included&&t<=this.upperBound&&t>=this.lowerBound;e.active=i})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["nz-slider-marks"]],hostAttrs:[1,"ant-slider-mark"],inputs:{lowerBound:"lowerBound",upperBound:"upperBound",marksArray:"marksArray",min:[2,"min","min",f],max:[2,"max","max",f],vertical:[2,"vertical","vertical",o],included:[2,"included","included",o],reverse:[2,"reverse","reverse",o]},exportAs:["nzSliderMarks"],features:[S,z],decls:2,vars:0,consts:[[1,"ant-slider-mark-text",3,"ant-slider-mark-active","ngStyle","innerHTML"],[1,"ant-slider-mark-text",3,"ngStyle","innerHTML"]],template:function(t,i){t&1&&x(0,De,1,4,"span",0,G),t&2&&F(i.marks)},dependencies:[C],encapsulation:2,changeDetection:0})}}return n})();function ke(n){return typeof n!="string"}var Ne=(()=>{class n{constructor(){this.lowerBound=null,this.upperBound=null,this.marksArray=[],this.vertical=!1,this.included=!1,this.steps=[]}ngOnChanges(e){let{marksArray:t,lowerBound:i,upperBound:s,reverse:r}=e;(t||r)&&this.buildSteps(),(t||i||s||r)&&this.togglePointActive()}buildSteps(){let e=this.vertical?"bottom":"left";this.steps=this.marksArray.map(t=>{let{value:i,config:s}=t,r=t.offset,a=this.max-this.min;return this.reverse&&(r=(this.max-i)/a*100),{value:i,offset:r,config:s,active:!1,style:{[e]:`${r}%`,transform:this.vertical?"translateY(50%)":"translateX(-50%)"}}})}togglePointActive(){this.steps&&this.lowerBound!==null&&this.upperBound!==null&&this.steps.forEach(e=>{let t=e.value,i=!this.included&&t===this.upperBound||this.included&&t<=this.upperBound&&t>=this.lowerBound;e.active=i})}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["nz-slider-step"]],hostAttrs:[1,"ant-slider-step"],inputs:{lowerBound:"lowerBound",upperBound:"upperBound",marksArray:"marksArray",min:[2,"min","min",f],max:[2,"max","max",f],vertical:[2,"vertical","vertical",o],included:[2,"included","included",o],reverse:[2,"reverse","reverse",o]},exportAs:["nzSliderStep"],features:[S,z],decls:2,vars:0,consts:[[1,"ant-slider-dot",3,"ant-slider-dot-active","ngStyle"],[1,"ant-slider-dot",3,"ngStyle"]],template:function(t,i){t&1&&x(0,_e,1,3,"span",0,G),t&2&&F(i.steps)},dependencies:[C],encapsulation:2,changeDetection:0})}}return n})(),Oe=(()=>{class n{constructor(){this.offset=0,this.reverse=!1,this.dir="ltr",this.length=0,this.vertical=!1,this.included=!1,this.style={}}ngOnChanges(){let e=this.vertical,t=this.reverse,i=this.included?"visible":"hidden",s=this.offset,r=this.length,a=e?{[t?"top":"bottom"]:`${s}%`,[t?"bottom":"top"]:"auto",height:`${r}%`,visibility:i}:E(b({},this.getHorizontalStylePosition()),{width:`${r}%`,visibility:i});this.style=a}getHorizontalStylePosition(){let e=this.reverse?"auto":`${this.offset}%`,t=this.reverse?`${this.offset}%`:"auto";if(this.dir==="rtl"){let i=e;e=t,t=i}return{left:e,right:t}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["nz-slider-track"]],inputs:{offset:[2,"offset","offset",f],reverse:[2,"reverse","reverse",o],dir:"dir",length:[2,"length","length",f],vertical:[2,"vertical","vertical",o],included:[2,"included","included",o]},exportAs:["nzSliderTrack"],features:[S,z],decls:1,vars:1,consts:[[1,"ant-slider-track",3,"ngStyle"]],template:function(t,i){t&1&&m(0,"div",0),t&2&&p("ngStyle",i.style)},dependencies:[C],encapsulation:2,changeDetection:0})}}return n})(),Re=(()=>{class n{constructor(e,t,i,s,r){this.slider=e,this.sliderService=t,this.cdr=i,this.platform=s,this.directionality=r,this.nzDisabled=!1,this.nzDots=!1,this.nzIncluded=!0,this.nzRange=!1,this.nzVertical=!1,this.nzReverse=!1,this.nzMarks=null,this.nzMax=100,this.nzMin=0,this.nzStep=1,this.nzTooltipVisible="default",this.nzTooltipPlacement="top",this.nzOnAfterChange=new re,this.value=null,this.cacheSliderStart=null,this.cacheSliderLength=null,this.activeValueIndex=void 0,this.track={offset:null,length:null},this.handles=[],this.marksArray=null,this.bounds={lower:null,upper:null},this.dir="ltr",this.destroy$=new J,this.isNzDisableFirstChange=!0}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(j(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges(),this.updateTrackAndHandles(),this.onValueChange(this.getValue(!0))}),this.handles=Ve(this.nzRange?2:1),this.marksArray=this.nzMarks?this.generateMarkItems(this.nzMarks):null,this.bindDraggingHandlers(),this.toggleDragDisabled(this.nzDisabled),this.getValue()===null&&this.setValue(this.formatValue(null))}ngOnChanges(e){let{nzDisabled:t,nzMarks:i,nzRange:s}=e;t&&!t.firstChange?this.toggleDragDisabled(t.currentValue):i&&!i.firstChange?this.marksArray=this.nzMarks?this.generateMarkItems(this.nzMarks):null:s&&!s.firstChange&&(this.handles=Ve(s.currentValue?2:1),this.setValue(this.formatValue(null)))}ngOnDestroy(){this.unsubscribeDrag(),this.destroy$.next(!0),this.destroy$.complete()}writeValue(e){this.setValue(e,!0)}onValueChange(e){}onTouched(){}registerOnChange(e){this.onValueChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.toggleDragDisabled(this.nzDisabled),this.cdr.markForCheck()}onKeyDown(e){if(this.nzDisabled)return;let t=e.keyCode,i=t===39||t===38,s=t===37||t===40;if(!(i||s))return;e.preventDefault();let r=(s?-this.nzStep:this.nzStep)*(this.nzReverse?-1:1);r=this.dir==="rtl"?r*-1:r;let a=this.nzRange?this.value[this.activeValueIndex]+r:this.value+r;this.setActiveValue(T(a,this.nzMin,this.nzMax)),this.nzOnAfterChange.emit(this.getValue(!0))}onHandleFocusIn(e){this.activeValueIndex=e}setValue(e,t=!1){t?(this.value=this.formatValue(e),this.updateTrackAndHandles()):Ie(this.value,e)||(this.value=e,this.updateTrackAndHandles(),this.onValueChange(this.getValue(!0)))}getValue(e=!1){return e&&this.value&&h(this.value)?[...this.value].sort((t,i)=>t-i):this.value}getValueToOffset(e){let t=e;return typeof t>"u"&&(t=this.getValue(!0)),h(t)?t.map(i=>this.valueToOffset(i)):this.valueToOffset(t)}setActiveValueIndex(e){let t=this.getValue();if(h(t)){let i=null,s,r=-1;t.forEach((a,d)=>{s=Math.abs(e-a),(i===null||s<i)&&(i=s,r=d)}),this.activeValueIndex=r,this.handlerComponents.toArray()[r].focus()}else this.handlerComponents.toArray()[0].focus()}setActiveValue(e){if(h(this.value)){let t=[...this.value];t[this.activeValueIndex]=e,this.setValue(t)}else this.setValue(e)}updateTrackAndHandles(){let e=this.getValue(),t=this.getValueToOffset(e),i=this.getValue(!0),s=this.getValueToOffset(i),r=h(i)?i:[0,i],a=h(s)?[s[0],s[1]-s[0]]:[0,s];this.handles.forEach((d,u)=>{d.offset=h(t)?t[u]:t,d.value=h(e)?e[u]:e||0}),[this.bounds.lower,this.bounds.upper]=r,[this.track.offset,this.track.length]=a,this.cdr.markForCheck()}onDragStart(e){this.toggleDragMoving(!0),this.cacheSliderProperty(),this.setActiveValueIndex(this.getLogicalValue(e)),this.setActiveValue(this.getLogicalValue(e)),this.showHandleTooltip(this.nzRange?this.activeValueIndex:0)}onDragMove(e){this.setActiveValue(this.getLogicalValue(e)),this.cdr.markForCheck()}getLogicalValue(e){return this.nzReverse?!this.nzVertical&&this.dir==="rtl"?e:this.nzMax-e+this.nzMin:!this.nzVertical&&this.dir==="rtl"?this.nzMax-e+this.nzMin:e}onDragEnd(){this.nzOnAfterChange.emit(this.getValue(!0)),this.toggleDragMoving(!1),this.cacheSliderProperty(!0),this.hideAllHandleTooltip(),this.cdr.markForCheck()}bindDraggingHandlers(){if(!this.platform.isBrowser)return;let e=a=>d=>a.reduce((u,c)=>u[c]||u,d),t=this.slider.nativeElement,i=this.nzVertical?"pageY":"pageX",s={start:"mousedown",move:"mousemove",end:"mouseup",pluckKey:[i]},r={start:"touchstart",move:"touchmove",end:"touchend",pluckKey:["touches","0",i],filter:a=>a instanceof TouchEvent};[s,r].forEach(a=>{let{start:d,move:u,end:c,pluckKey:D,filter:Z=()=>!0}=a;a.startPlucked$=_(t,d).pipe(B(Z),Q(U),M(e(D)),M(I=>this.findClosestValue(I))),a.end$=_(document,c),a.moveResolved$=_(document,u).pipe(B(Z),Q(U),M(e(D)),L(),M(I=>this.findClosestValue(I)),L(),j(a.end$))}),this.dragStart$=A(s.startPlucked$,r.startPlucked$),this.dragMove$=A(s.moveResolved$,r.moveResolved$),this.dragEnd$=A(s.end$,r.end$)}subscribeDrag(e=["start","move","end"]){e.indexOf("start")!==-1&&this.dragStart$&&!this.dragStart_&&(this.dragStart_=this.dragStart$.subscribe(this.onDragStart.bind(this))),e.indexOf("move")!==-1&&this.dragMove$&&!this.dragMove_&&(this.dragMove_=this.dragMove$.subscribe(this.onDragMove.bind(this))),e.indexOf("end")!==-1&&this.dragEnd$&&!this.dragEnd_&&(this.dragEnd_=this.dragEnd$.subscribe(this.onDragEnd.bind(this)))}unsubscribeDrag(e=["start","move","end"]){e.indexOf("start")!==-1&&this.dragStart_&&(this.dragStart_.unsubscribe(),this.dragStart_=null),e.indexOf("move")!==-1&&this.dragMove_&&(this.dragMove_.unsubscribe(),this.dragMove_=null),e.indexOf("end")!==-1&&this.dragEnd_&&(this.dragEnd_.unsubscribe(),this.dragEnd_=null)}toggleDragMoving(e){let t=["move","end"];e?(this.sliderService.isDragging=!0,this.subscribeDrag(t)):(this.sliderService.isDragging=!1,this.unsubscribeDrag(t))}toggleDragDisabled(e){e?this.unsubscribeDrag():this.subscribeDrag(["start"])}findClosestValue(e){let t=this.getSliderStartPosition(),i=this.getSliderLength(),s=T((e-t)/i,0,1),r=(this.nzMax-this.nzMin)*(this.nzVertical?1-s:s)+this.nzMin,a=this.nzMarks===null?[]:Object.keys(this.nzMarks).map(parseFloat).sort((c,D)=>c-D);if(this.nzStep!==0&&!this.nzDots){let c=Math.round(r/this.nzStep)*this.nzStep;a.push(c)}let d=a.map(c=>Math.abs(r-c)),u=a[d.indexOf(Math.min(...d))];return this.nzStep===0?u:parseFloat(u.toFixed(ze(this.nzStep)))}valueToOffset(e){return ve(this.nzMin,this.nzMax,e)}getSliderStartPosition(){if(this.cacheSliderStart!==null)return this.cacheSliderStart;let e=me(this.slider.nativeElement);return this.nzVertical?e.top:e.left}getSliderLength(){if(this.cacheSliderLength!==null)return this.cacheSliderLength;let e=this.slider.nativeElement;return this.nzVertical?e.clientHeight:e.clientWidth}cacheSliderProperty(e=!1){this.cacheSliderStart=e?null:this.getSliderStartPosition(),this.cacheSliderLength=e?null:this.getSliderLength()}formatValue(e){return ge(e)?this.nzRange?[this.nzMin,this.nzMax]:this.nzMin:Pe(e,this.nzRange)?h(e)?e.map(t=>T(t,this.nzMin,this.nzMax)):T(e,this.nzMin,this.nzMax):this.nzDefaultValue?this.nzDefaultValue:this.nzRange?[this.nzMin,this.nzMax]:this.nzMin}showHandleTooltip(e=0){this.handles.forEach((t,i)=>{t.active=i===e})}hideAllHandleTooltip(){this.handles.forEach(e=>e.active=!1)}generateMarkItems(e){let t=[];for(let i in e)if(e.hasOwnProperty(i)){let s=e[i],r=typeof i=="number"?i:parseFloat(i);r>=this.nzMin&&r<=this.nzMax&&t.push({value:r,offset:this.valueToOffset(r),config:s})}return t.length?t:null}static{this.\u0275fac=function(t){return new(t||n)(g(ae),g(X),g(K),g(ye),g(Se))}}static{this.\u0275cmp=y({type:n,selectors:[["nz-slider"]],viewQuery:function(t,i){if(t&1&&O(Y,5),t&2){let s;R(s=H())&&(i.handlerComponents=s)}},hostAttrs:[1,"ant-slider"],hostVars:8,hostBindings:function(t,i){t&1&&N("keydown",function(r){return i.onKeyDown(r)}),t&2&&w("ant-slider-rtl",i.dir==="rtl")("ant-slider-disabled",i.nzDisabled)("ant-slider-vertical",i.nzVertical)("ant-slider-with-marks",i.marksArray)},inputs:{nzDisabled:[2,"nzDisabled","nzDisabled",o],nzDots:[2,"nzDots","nzDots",o],nzIncluded:[2,"nzIncluded","nzIncluded",o],nzRange:[2,"nzRange","nzRange",o],nzVertical:[2,"nzVertical","nzVertical",o],nzReverse:[2,"nzReverse","nzReverse",o],nzDefaultValue:"nzDefaultValue",nzMarks:"nzMarks",nzMax:[2,"nzMax","nzMax",f],nzMin:[2,"nzMin","nzMin",f],nzStep:[2,"nzStep","nzStep",P],nzTooltipVisible:"nzTooltipVisible",nzTooltipPlacement:"nzTooltipPlacement",nzTipFormatter:"nzTipFormatter"},outputs:{nzOnAfterChange:"nzOnAfterChange"},exportAs:["nzSlider"],features:[ce([{provide:be,useExisting:ee(()=>n),multi:!0},X]),S,z],decls:6,vars:8,consts:[[1,"ant-slider-rail"],[3,"vertical","included","offset","length","reverse","dir"],[3,"vertical","min","max","lowerBound","upperBound","marksArray","included","reverse"],[3,"vertical","reverse","offset","value","active","tooltipFormatter","tooltipVisible","tooltipPlacement","dir"],[3,"focusin","vertical","reverse","offset","value","active","tooltipFormatter","tooltipVisible","tooltipPlacement","dir"]],template:function(t,i){t&1&&(m(0,"div",0)(1,"nz-slider-track",1),W(2,Ae,1,8,"nz-slider-step",2),x(3,we,1,9,"nz-slider-handle",3,G),W(5,xe,1,8,"nz-slider-marks",2)),t&2&&(k(),p("vertical",i.nzVertical)("included",i.nzIncluded)("offset",i.track.offset)("length",i.track.length)("reverse",i.nzReverse)("dir",i.dir),k(),q(i.marksArray?2:-1),k(),F(i.handles),k(2),q(i.marksArray?5:-1))},dependencies:[Oe,Ne,Y,Fe],encapsulation:2,changeDetection:0})}}return n})();function He(){return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`)}function h(n){return n instanceof Array?n.length===2:!1}function Ve(n){return Array(n).fill(0).map(()=>({offset:null,value:null,active:!1}))}function Pe(n,l){return!h(n)&&isNaN(n)||h(n)&&n.some(e=>isNaN(e))?!1:$e(n,l)}function $e(n,l=!1){if(h(n)!==l)throw He();return!0}function Ie(n,l){return typeof n!=typeof l?!1:h(n)&&h(l)?fe(n,l):n===l}var gt=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=le({type:n})}static{this.\u0275inj=ie({imports:[Re,Y]})}}return n})();export{je as a,Re as b,gt as c};

(function(t){function e(e){for(var s,o,i=e[0],c=e[1],d=e[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/OC-projet-7/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"05ce":function(t,e,a){"use strict";a("853d")},"0853":function(t,e,a){"use strict";a("ce27")},"389b":function(t,e,a){"use strict";a("c30d")},"44bf":function(t,e,a){"use strict";a("dfa6")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("7a23");const n={id:"main-holder"};function r(t,e,a,r,o,i){const c=Object(s["o"])("RestaurantsList"),d=Object(s["o"])("CustomMap"),l=Object(s["o"])("ModalRestaurant");return Object(s["i"])(),Object(s["c"])("div",n,[Object(s["f"])(c),Object(s["f"])(d),t.showModal?(Object(s["i"])(),Object(s["c"])(l,{key:0})):Object(s["d"])("",!0)])}const o=Object(s["v"])("data-v-456eb344");Object(s["k"])("data-v-456eb344");const i={id:"map-holder"};Object(s["j"])();const c=o((t,e,a,n,r,c)=>{const d=Object(s["o"])("Geolocation"),l=Object(s["o"])("MapMarker"),u=Object(s["o"])("GMapLoader");return Object(s["i"])(),Object(s["c"])("div",i,[Object(s["f"])(d,{ref:"geolocation"},null,512),Object(s["f"])(u,{ref:"loader",onSetToUserPosition:c.setToUserPosition,onSortVisibleRestaurants:c.sortVisibleRestaurants,onNewMarker:t.addMarker},{default:o(({google:e,map:a})=>[(Object(s["i"])(!0),Object(s["c"])(s["a"],null,Object(s["m"])(t.markers,t=>(Object(s["i"])(),Object(s["c"])(l,{key:t.id,name:t.name,id:t.id,position:t.position,google:e,map:a},null,8,["name","id","position","google","map"]))),128))]),_:1},8,["onSetToUserPosition","onSortVisibleRestaurants","onNewMarker"])])});var d=a("5502"),l={name:"MapMarker",props:{google:Object,map:Object,position:Object,key:String,id:String,name:String},data:function(){return{marker:null}},methods:{...Object(d["b"])("modal",["toggleModal","setInfosModal"])},mounted:function(){this.marker=new this.google.maps.Marker({map:this.map,position:this.position,title:this.name,label:this.name}),"user"!=this.id&&this.marker.addListener("click",()=>{this.setInfosModal(this.id),this.toggleModal(!0)})},__scopeId:"data-v-077e6d16"},u=l;const m=Object(s["v"])("data-v-ae6e2e10");Object(s["k"])("data-v-ae6e2e10");const b={id:"map",ref:"map"};Object(s["j"])();const g=m((t,e,a,n,r,o)=>{const i=Object(s["o"])("GPlacesAPI");return Object(s["i"])(),Object(s["c"])(s["a"],null,[Object(s["f"])("div",b,null,512),Boolean(t.google)&&Boolean(t.map)?(Object(s["i"])(),Object(s["c"])(s["a"],{key:0},[Object(s["n"])(t.$slots,"default",{google:t.google,map:t.map},void 0,!0),Object(s["f"])(i,{ref:"gPlacesApi",places:t.places,map:t.map},null,8,["places","map"])],64)):Object(s["d"])("",!0)],64)});var p={name:"GPlacesAPI",props:{places:Object,map:Object},methods:{getNearbyPlaces(){console.log(this.restaurants),console.log(this.getGplacesRestaurants),this.places.nearbySearch({bounds:this.map.getBounds(),types:["restaurant","food","establishment","point_of_interest"]},(t,e)=>{console.log(t),console.log(e),"OK"==e?this.addNearbyPlaces(t):"OVER_QUERY_LIMIT"==e&&setTimeout(()=>{console.log("retry getting nearby places"),this.getNearbyPlaces()},550)})},addNearbyPlaces(t){let e=this.excludeTypes(t);e=this.excludeDuplicates(e),e.forEach(t=>{let e=this.formateRestaurantInfos(t);this.addRestaurant(e),this.addMarker({id:e.id,name:e.name,position:{lat:e.lat,lng:e.long}}),this.addPlaceReviews(t.place_id,e.id)})},excludeDuplicates(t){const e=this.getGplacesRestaurants;return t.filter(t=>!e.some(e=>e.gplacesId==t.place_id))},excludeTypes(t=[]){console.log(t);const e=["campground","lodging","store","bakery"],a=t.filter(t=>!e.some(e=>t.types.includes(e)));return a},formateRestaurantInfos(t){const e={name:t.name,address:t.vicinity,lat:t.geometry.location.lat(),long:t.geometry.location.lng(),id:this.getNextRestaurantId,gplacesId:t.place_id};return e},addPlaceReviews(t,e){this.places.getDetails({placeId:t},(a,s)=>{if("OK"===s){const t=this.formateReviews(a.reviews);this.setReviewsListToRestaurant({reviews:t,id:e})}else"OVER_QUERY_LIMIT"==s?setTimeout(()=>{console.log("retry getting place details"),this.addPlaceReviews(t,e)},550):console.log(s)})},formateReviews(t=[]){let e=[];return t.forEach(t=>{e.push({comment:t.text,stars:t.rating})}),e},...Object(d["b"])("restaurantsList",["addRestaurant","setReviewsListToRestaurant"]),...Object(d["b"])("map",["addMarker"])},computed:{...Object(d["c"])("restaurantsList",["getNextRestaurantId","getRestaurantFromId","getGplacesRestaurants"]),...Object(d["d"])({restaurants:t=>t.restaurantsList.restaurants})},mounted(){console.log("GPlacesAPI component mounted")},__scopeId:"data-v-676feaf6"},O=p,j=a("4272");const f={zoom:16,disableDefaultUI:!0,styles:[{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"off"}]}]};var h={name:"GMapLoader",components:{GPlacesAPI:O},data:function(){return{apiKey:"AIzaSyCXyZH2Jqcbnp4fSLYDdx6ez8GfMY7_hqs",google:null,geocoder:null,places:null,map:null,loader:!1}},methods:{initMap(){const t=this.$refs.map;this.map=new this.google.maps.Map(t,f),console.log("Map init"),this.google.maps.event.addListenerOnce(this.map,"idle",()=>{this.map.addListener("idle",()=>{this.$refs.gPlacesApi.getNearbyPlaces(),this.$emit("sortVisibleRestaurants")})}),this.map.addListener("click",this.addRestaurantOnMap)},addRestaurantOnMap(t){const e={lat:t.latLng.lat(),long:t.latLng.lng()};let a=this;this.geocoder.geocode({location:{lat:t.latLng.lat(),lng:t.latLng.lng()}},t=>{a.setPositionNewRestaurantInfos({address:t[0].formatted_address,coords:e}),a.toggleNewRestaurant(!0)})},...Object(d["b"])("restaurantsList",["toggleNewRestaurant","setPositionNewRestaurantInfos"])},computed:{...Object(d["d"])(["googleApiKey"]),...Object(d["d"])({restaurants:t=>t.restaurantsList.restaurants})},async mounted(){console.log("GMapLoader component mounted");const t=new j["a"]({apiKey:this.apiKey,libraries:["places"]}),e=await t.load().then((function(){return window.google}));this.google=e,this.geocoder=new this.google.maps.Geocoder,this.initMap(),this.$emit("setToUserPosition"),this.places=new this.google.maps.places.PlacesService(this.map),console.log("Nearby places call")}};a("44bf");h.render=g,h.__scopeId="data-v-ae6e2e10";var R=h;const v=Object(s["v"])("data-v-4d20f976");Object(s["k"])("data-v-4d20f976");const I={key:0,id:"geolocation-disclaimer"},M={class:"message"},S=Object(s["e"])(" Oups ! Il semblerait que vous ayez refusé l'utilisation de. Activer la localisation puis rechargez la page.");Object(s["j"])();const T=v((t,e,a,n,r,o)=>{const i=Object(s["o"])("BIconExclamationCircle");return"off"==t.state?(Object(s["i"])(),Object(s["c"])("div",I,[Object(s["f"])("span",M,[Object(s["f"])(i),S])])):Object(s["d"])("",!0)});var _={name:"Geolocation",data:function(){return{state:"on"}},methods:{getUserPosition(t){navigator.geolocation.getCurrentPosition(t,()=>{this.state="off"})}}};a("05ce");_.render=T,_.__scopeId="data-v-4d20f976";var A=_,N={name:"CustomMap",components:{MapMarker:u,GMapLoader:R,Geolocation:A},methods:{setToUserPosition(){this.$refs.geolocation.getUserPosition(t=>{const e={lat:t.coords.latitude,lng:t.coords.longitude};this.$refs.loader.map.setCenter(e),this.addInitMarkers(e)})},addInitMarkers(t){this.addUserMarker(t);for(let e=0;e<this.restaurants.length;e++)this.addRestaurantMarker(this.restaurants[e])},addUserMarker(t){const e={position:t,id:"user",name:"Utilisateur"};this.addMarker(e)},addRestaurantMarker(t){const e={position:{lat:t.lat,lng:t.long},id:t.id,name:t.restaurantName};this.addMarker(e)},sortVisibleRestaurants(){const t=this.restaurants,e=this.$refs.loader.map.getBounds();t.forEach(t=>{const a=e.contains({lat:t.lat,lng:t.long});this.setRestaurantVisibility({id:t.id,visibility:a}),console.log(this.restaurants)})},...Object(d["b"])("map",["addMarker","removeMarker"]),...Object(d["b"])("restaurantsList",["setRestaurantVisibility"])},computed:{...Object(d["d"])({restaurants:t=>t.restaurantsList.restaurants,markers:t=>t.map.markers})},mounted(){console.log("CustomMap component mounted")}};a("0853");N.render=c,N.__scopeId="data-v-456eb344";var y=N;const w=Object(s["v"])("data-v-8cca9c3e");Object(s["k"])("data-v-8cca9c3e");const E={id:"restaurants-list"},k={class:"ctrls"},L={class:"order"},x={class:"sort"},P=Object(s["f"])("span",null,"De",-1),U=Object(s["f"])("span",null,"à",-1),C={class:"c-scrollbar"};Object(s["j"])();const D=w((t,e,a,n,r,o)=>{const i=Object(s["o"])("BIconSortNumericDown"),c=Object(s["o"])("BIconSortNumericUpAlt"),d=Object(s["o"])("BIconStarFill"),l=Object(s["o"])("RestaurantItem"),u=Object(s["o"])("RestaurantItemNew");return Object(s["i"])(),Object(s["c"])("div",E,[Object(s["f"])("div",k,[Object(s["f"])("div",L,[Object(s["f"])("button",{class:["btn",["asc"==t.order?"selected":""]],onClick:e[1]||(e[1]=t=>o.sortRestaurantsByNote("asc"))},[Object(s["f"])(i)],2),Object(s["f"])("button",{class:["btn",["desc"==t.order?"selected":""]],onClick:e[2]||(e[2]=t=>o.sortRestaurantsByNote("desc"))},[Object(s["f"])(c)],2)]),Object(s["f"])("div",x,[P,Object(s["f"])("select",{name:"min",onChange:e[3]||(e[3]=t=>o.minSort(t))},[(Object(s["i"])(!0),Object(s["c"])(s["a"],null,Object(s["m"])(t.sortRange,e=>(Object(s["i"])(),Object(s["c"])("option",{value:e,key:e,selected:e==t.sortMin},Object(s["p"])(e),9,["value","selected"]))),128))],32),U,Object(s["f"])("select",{name:"max",onChange:e[4]||(e[4]=t=>o.maxSort(t))},[(Object(s["i"])(!0),Object(s["c"])(s["a"],null,Object(s["m"])(t.sortRange,e=>(Object(s["i"])(),Object(s["c"])("option",{value:e,key:e,selected:e==t.sortMax},Object(s["p"])(e),9,["value","selected"]))),128))],32),Object(s["f"])(d)])]),Object(s["f"])("ul",C,[(Object(s["i"])(!0),Object(s["c"])(s["a"],null,Object(s["m"])(o.sortedRestaurants,t=>(Object(s["i"])(),Object(s["c"])(l,{key:t.id,id:t.id,name:t.restaurantName,address:t.address,ratings:t.ratings},null,8,["id","name","address","ratings"]))),128))]),t.isAddingNew?(Object(s["i"])(),Object(s["c"])(u,{key:0})):Object(s["d"])("",!0)])}),G=Object(s["v"])("data-v-28371d96");Object(s["k"])("data-v-28371d96");const B={class:"name"},V={class:"address"},F={class:"rating"},K={class:"rating-average"},z={key:0},H={class:"nb-ratings"};Object(s["j"])();const W=G((t,e,a,n,r,o)=>{const i=Object(s["o"])("BIconStarFill"),c=Object(s["o"])("BIconStarHalf"),d=Object(s["o"])("BIconStar");return Object(s["i"])(),Object(s["c"])("li",{class:{selected:o.isSelected},onClick:e[1]||(e[1]=(...t)=>o.showDetails&&o.showDetails(...t))},[Object(s["f"])("span",B,Object(s["p"])(a.name),1),Object(s["f"])("span",V,Object(s["p"])(a.address),1),Object(s["f"])("div",F,[Object(s["f"])("div",K,[0==a.ratings.length?(Object(s["i"])(),Object(s["c"])("i",z,"Aucun avis")):Object(s["d"])("",!0),(Object(s["i"])(!0),Object(s["c"])(s["a"],null,Object(s["m"])(Math.floor(o.ratingAverage),t=>(Object(s["i"])(),Object(s["c"])(i,{key:t}))),128)),o.ratingHasDecimal?(Object(s["i"])(),Object(s["c"])(c,{key:1})):Object(s["d"])("",!0),(Object(s["i"])(!0),Object(s["c"])(s["a"],null,Object(s["m"])(Math.floor(o.oppositeRatingAverage),t=>(Object(s["i"])(),Object(s["c"])(d,{key:t}))),128)),Object(s["f"])("span",H," ("+Object(s["p"])(a.ratings.length)+")",1)])])],2)});var $={name:"RestaurantItem",props:{id:Number,name:String,address:String,ratings:Array},data(){return{}},methods:{showDetails:function(){this.setInfosModal(this.id),this.toggleModal(!0),this.isSelected=!0},...Object(d["b"])("modal",["toggleModal","setInfosModal"])},computed:{ratingAverage:function(){let t=0;for(let e=0;e<this.ratings.length;e++)t+=this.ratings[e].stars;return t/this.ratings.length},oppositeRatingAverage(){return 5-this.ratingAverage},ratingHasDecimal(){return-1!=this.ratingAverage.toString().indexOf(".")},isSelected(){return null!==this.restaurantModal&&this.id===this.restaurantModal.id},...Object(d["d"])({restaurantModal:t=>t.modal.restaurantModal})},mounted(){}};a("ab8d");$.render=W,$.__scopeId="data-v-28371d96";var Y=$;const q=Object(s["v"])("data-v-e8049e4a");Object(s["k"])("data-v-e8049e4a");const J={class:"new-restaurant"},X={class:"infos"},Q={class:"adress"};Object(s["j"])();const Z=q((t,e,a,n,r,o)=>(Object(s["i"])(),Object(s["c"])("div",J,[Object(s["f"])("div",X,[Object(s["t"])(Object(s["f"])("input",{type:"text",name:"name","onUpdate:modelValue":e[1]||(e[1]=e=>t.newRestaurantInfos.name=e),class:{error:o.nameError},ref:"restaurantName",form:"form-new-restaurant",placeholder:"Nom du restaurant"},null,2),[[s["r"],t.newRestaurantInfos.name]]),Object(s["f"])("span",Q,Object(s["p"])(t.newRestaurantInfos.address),1)]),Object(s["f"])("form",{action:"#",id:"form-new-restaurant",onSubmit:e[4]||(e[4]=Object(s["u"])(()=>{},["prevent"]))},[Object(s["f"])("button",{class:"btn-add",onClick:e[2]||(e[2]=(...t)=>o.addRestaurantClick&&o.addRestaurantClick(...t))},"+"),Object(s["f"])("button",{class:"btn-cancel",onClick:e[3]||(e[3]=(...t)=>o.cancelRestaurantAddingClick&&o.cancelRestaurantAddingClick(...t))},"x")],32)])));var tt={name:"RestaurantItemNew",data(){return{}},methods:{addRestaurantClick(){if(null==this.newRestaurantInfos.name)return;const t={name:this.newRestaurantInfos.name,address:this.newRestaurantInfos.address,lat:this.newRestaurantInfos.coords.lat,long:this.newRestaurantInfos.coords.long,id:this.getNextRestaurantId};this.addRestaurant(t),this.addMarker({position:{lat:t.lat,lng:t.long},id:t.id,name:t.name}),this.toggleNewRestaurant(!1),this.resetNewRestauranInfos()},cancelRestaurantAddingClick(){this.toggleNewRestaurant(!1),this.resetNewRestauranInfos()},...Object(d["b"])("restaurantsList",["addRestaurant","toggleNewRestaurant","resetNewRestauranInfos"]),...Object(d["b"])("map",["addMarker"])},computed:{nameError(){return null==this.newRestaurantInfos.name||""==this.newRestaurantInfos.name},...Object(d["d"])({newRestaurantInfos:t=>t.restaurantsList.newRestaurantInfos}),...Object(d["c"])("restaurantsList",["getNextRestaurantId"])},mounted(){this.$refs.restaurantName.focus()}};a("aec9");tt.render=Z,tt.__scopeId="data-v-e8049e4a";var et=tt,at={name:"RestaurantsList",components:{RestaurantItem:Y,RestaurantItemNew:et},data:function(){return{order:"desc",sortMin:1,sortMax:5,sortRange:[1,2,3,4,5]}},methods:{sortRestaurantsByNote(t){const e=this.restaurants,a="asc"==t?1:-1;e.sort((t,e)=>t.averageRating*a-e.averageRating*a),this.order=t},minSort(t){this.sortMin=Number(t.target.value),this.sortMin>this.sortMax&&(this.sortMax=this.sortMin)},maxSort(t){this.sortMax=Number(t.target.value),this.sortMax<this.sortMin&&(this.sortMin=this.sortMax)}},computed:{sortedRestaurants:function(){return this.restaurants.filter(t=>(t.averageRating>=this.sortMin&&t.averageRating<=this.sortMax||0==t.ratings.length)&&t.isVisible)},...Object(d["d"])({restaurants:t=>t.restaurantsList.restaurants,isAddingNew:t=>t.restaurantsList.isAddingNew})}};a("616d");at.render=D,at.__scopeId="data-v-8cca9c3e";var st=at;const nt=Object(s["v"])("data-v-21fe282a");Object(s["k"])("data-v-21fe282a");const rt={class:"modal"},ot={class:"modal-content"},it={class:"modal-header"},ct={class:"modal-body"},dt={class:"infos"},lt={class:"name"},ut={class:"address"},mt={class:"comments"},bt={class:"c-scrollbar"},gt={key:0,class:"no-comment"},pt={class:"new-comment"},Ot=Object(s["f"])("option",{disabled:"",value:""},"Note",-1);Object(s["j"])();const jt=nt((t,e,a,n,r,o)=>{const i=Object(s["o"])("GStreetViewImage"),c=Object(s["o"])("Comment");return Object(s["i"])(),Object(s["c"])("div",{class:"modal-holder",ref:"holder",onClick:e[5]||(e[5]=(...t)=>o.closeModalFromBackground&&o.closeModalFromBackground(...t))},[Object(s["f"])("div",rt,[Object(s["f"])("div",ot,[Object(s["f"])("div",it,[Object(s["f"])("span",{class:"close",onClick:e[1]||(e[1]=(...t)=>o.closeModal&&o.closeModal(...t))},"X")]),Object(s["f"])("div",ct,[Object(s["f"])("div",dt,[Object(s["f"])("p",lt,Object(s["p"])(t.restaurantModal.restaurantName),1),Object(s["f"])("p",ut,Object(s["p"])(t.restaurantModal.address),1),Object(s["f"])(i,{address:t.restaurantModal.address},null,8,["address"])]),Object(s["f"])("div",mt,[Object(s["f"])("ul",bt,[(Object(s["i"])(!0),Object(s["c"])(s["a"],null,Object(s["m"])(t.restaurantModal.ratings,t=>(Object(s["i"])(),Object(s["c"])(c,{key:t.id,text:t.comment,rating:t.stars},null,8,["text","rating"]))),128)),0==t.restaurantModal.ratings.length?(Object(s["i"])(),Object(s["c"])("li",gt,"Aucun commentaire posté")):Object(s["d"])("",!0)]),Object(s["f"])("div",pt,[Object(s["t"])(Object(s["f"])("textarea",{"onUpdate:modelValue":e[2]||(e[2]=e=>t.commentText=e),placeholder:"Votre commentaire..."},null,512),[[s["r"],t.commentText]]),Object(s["t"])(Object(s["f"])("select",{"onUpdate:modelValue":e[3]||(e[3]=e=>t.commentRating=e)},[Ot,(Object(s["i"])(),Object(s["c"])(s["a"],null,Object(s["m"])(6,t=>Object(s["f"])("option",{key:t-1,value:t-1},Object(s["p"])(t-1),9,["value"])),64))],512),[[s["q"],t.commentRating]]),Object(s["f"])("button",{class:"btn",onClick:e[4]||(e[4]=(...t)=>o.addNewComment&&o.addNewComment(...t))},"OK")])])])])])],512)}),ft=Object(s["v"])("data-v-7fdda201");Object(s["k"])("data-v-7fdda201");const ht={class:"rating"},Rt=Object(s["e"])(),vt=Object(s["f"])("br",null,null,-1),It={class:"comment"};Object(s["j"])();const Mt=ft((t,e,a,n,r,o)=>{const i=Object(s["o"])("BIconStarFill"),c=Object(s["o"])("BIconStar");return Object(s["i"])(),Object(s["c"])("li",null,[Object(s["f"])("span",ht,[(Object(s["i"])(!0),Object(s["c"])(s["a"],null,Object(s["m"])(a.rating,t=>(Object(s["i"])(),Object(s["c"])(i,{key:t}))),128)),(Object(s["i"])(!0),Object(s["c"])(s["a"],null,Object(s["m"])(o.oppositeRating,t=>(Object(s["i"])(),Object(s["c"])(c,{key:t}))),128))]),Rt,vt,Object(s["f"])("span",It,Object(s["p"])(a.text),1)])});var St={name:"Comment",props:{text:String,rating:Number},computed:{oppositeRating(){return 5-this.rating}}};St.render=Mt,St.__scopeId="data-v-7fdda201";var Tt=St;const _t=Object(s["v"])("data-v-70fd6a64"),At=_t((t,e,a,n,r,o)=>(Object(s["i"])(),Object(s["c"])("img",{src:o.imageURL},null,8,["src"])));var Nt={name:"GStreetViewImage",props:{address:String},data:function(){return{apiKey:"AIzaSyCXyZH2Jqcbnp4fSLYDdx6ez8GfMY7_hqs"}},computed:{imageURL(){return"https://maps.googleapis.com/maps/api/streetview?location="+this.parsedAddress+"&size=300x200&key="+this.apiKey},parsedAddress(){return this.address.split(" ").join("+")}}};Nt.render=At,Nt.__scopeId="data-v-70fd6a64";var yt=Nt,wt={name:"ModalRestaurant",components:{Comment:Tt,GStreetViewImage:yt},data:function(){return{commentRating:"",commentText:void 0}},methods:{closeModalFromBackground(t){t.target==this.$refs.holder&&this.closeModal()},closeModal(){this.toggleModal(!1)},addNewComment(){""!=this.commentRating&&void 0!=this.commentText&&(this.restaurantModal.ratings.push({stars:this.commentRating,comment:this.commentText}),this.resetInputs())},resetInputs(){this.commentRating="",this.commentText=void 0},...Object(d["b"])("modal",["toggleModal"])},computed:{...Object(d["d"])({restaurantModal:t=>t.modal.restaurantModal})}};a("7155");wt.render=jt,wt.__scopeId="data-v-21fe282a";var Et=wt,kt={name:"App",components:{CustomMap:y,RestaurantsList:st,ModalRestaurant:Et},methods:{...Object(d["b"])("restaurantsList",["initRestaurantsList"])},mounted(){this.initRestaurantsList()},computed:{...Object(d["d"])({showModal:t=>t.modal.showModal})}};a("389b");kt.render=r;var Lt=kt;const xt=[{restaurantName:"Bronco",address:"39 Rue des Petites Écuries, 75010 Paris",lat:43.218141,long:5.7332463,ratings:[{stars:4,comment:"Un excellent restaurant, j'y reviendrai ! Par contre il vaut mieux aimer la viande."},{stars:5,comment:"Tout simplement mon restaurant préféré !"}]},{restaurantName:"Babalou",address:"4 Rue Lamarck, 75018 Paris",lat:43.2073059,long:5.7343181,ratings:[{stars:5,comment:"Une minuscule pizzeria délicieuse cachée juste à côté du Sacré choeur !"},{stars:3,comment:"J'ai trouvé ça correct, sans plus"}]}],Pt={namespaced:!0,state:()=>({restaurants:[],isAddingNew:!1,newRestaurantInfos:{name:null,address:null,coords:null}}),getters:{getNextRestaurantId(t){let e=1;return t.restaurants.forEach(t=>{t.id>=e&&(e+=1)}),e},getRestaurantFromId(t){return e=>t.restaurants.find(t=>t.id==e)},getGplacesRestaurants(t){return t.restaurants.filter(t=>0!=t.gplacesId)}},mutations:{SET_RESTAURANT_VISIBILITY(t,e){t.restaurants[e.index].isVisible=e.visibility},SETUP_RESTAURANTS_LIST(t){t.restaurants=xt.slice()},TOGGLE_NEW_RESTAURANT(t,e){t.isAddingNew=e},SET_POSITION_NEW_RESTAURANT(t,e){t.newRestaurantInfos.address=e.address,t.newRestaurantInfos.coords=e.coords},RESET_NEW_RESTAURANT_INFOS(t){t.newRestaurantInfos.name=null,t.newRestaurantInfos.address=null},ADD_RESTAURANT(t,e){t.restaurants.push(e)},REPLACE_RESTAURANT_LIST(t,e){t.restaurants=e},SET_ID_TO_RESTAURANTS(t,e){t.restaurants[e.index].id=e.id},SET_AVERAGE_RATING_RESTAURANTS(t,e){t.restaurants[e.index].averageRating=e.rating},SET_REVIEWS_LIST_TO_RESTAURANT(t,e){const a=t.restaurants.findIndex(t=>t.id==e.id);-1!=a&&(t.restaurants[a].ratings=e.reviews)}},actions:{setRestaurantVisibility(t,e){const a=this.state.restaurantsList.restaurants.findIndex(t=>t.id==e.id);t.commit("SET_RESTAURANT_VISIBILITY",{index:a,visibility:e.visibility})},setReviewsListToRestaurant(t,e){t.commit("SET_REVIEWS_LIST_TO_RESTAURANT",e),t.dispatch("updateRestaurantAverage",e.id)},toggleNewRestaurant(t,e){t.commit("TOGGLE_NEW_RESTAURANT",e)},setPositionNewRestaurantInfos(t,e){t.commit("SET_POSITION_NEW_RESTAURANT",e)},resetNewRestauranInfos(t){t.commit("RESET_NEW_RESTAURANT_INFOS")},addRestaurant(t,e){const a={id:e.id||t.getters.getNextRestaurantId,restaurantName:e.name,address:e.address,lat:e.lat,long:e.long,gplacesId:e.gplacesId||!1,averageRating:0,ratings:[],isVisible:!0};t.commit("ADD_RESTAURANT",a)},replaceRestaurantsList(t,e){t.commit("REPLACE_RESTAURANT_LIST",e)},updateRestaurantAverage(t,e){const a=this.getters.getRestaurantFromId(e).ratings;let s=0;a.forEach(t=>{s+=t.stars});const n=s/a.length||0,r=this.state.restaurantsList.restaurants.findIndex(t=>t.id==e);t.commit("SET_AVERAGE_RATING_RESTAURANTS",{index:r,rating:n})},updateAllRestaurantsAverage(t){for(let e=0;e<this.state.restaurantsList.restaurants.length;e++)t.dispatch("updateRestaurantAverage",this.state.restaurants[e].id)},initRestaurantsList(t){t.commit("SETUP_RESTAURANTS_LIST");for(let e=0;e<this.state.restaurantsList.restaurants.length;e++){t.commit("SET_ID_TO_RESTAURANTS",{index:e,id:e});const a=this.state.restaurantsList.restaurants[e].ratings;let s=0;a.forEach(t=>{s+=t.stars});const n=s/a.length;t.commit("SET_AVERAGE_RATING_RESTAURANTS",{index:e,rating:n}),t.commit("SET_RESTAURANT_VISIBILITY",{index:e,visibility:!1})}}}},Ut={namespaced:!0,state:()=>({showModal:!1,restaurantModal:null}),getters:{},mutations:{SHOW_MODAL(t){t.showModal=!0},HIDE_MODAL(t){t.showModal=!1,t.restaurantModal=null},SET_INFOS_MODAL(t,e){t.restaurantModal=e}},actions:{toggleModal(t,e){e?t.commit("SHOW_MODAL"):t.commit("HIDE_MODAL")},setInfosModal(t,e){const a=this.getters.getRestaurantFromId(e);t.commit("SET_INFOS_MODAL",a)}}},Ct={namespaced:!0,state:()=>({markers:[]}),getters:{getMarkerIndexFromId(t){let e;return this.state.markers.forEach((a,s)=>{a.id==t&&(e=s)}),e}},mutations:{ADD_MARKER(t,e){t.markers.push(e)},REMOVE_MARKER(t,e){t.markers.splice(e,1)}},actions:{addMarker(t,e){t.commit("ADD_MARKER",e)},removeMarker(t,e){let a=this.getters.getMarkerIndexFromId(e);t.commit("REMOVE_MARKER",a)}}};var Dt=Object(d["a"])({state:{},getters:{getRestaurantFromId(t){return e=>t.restaurantsList.restaurants.find(t=>t.id==e)}},mutations:{},actions:{},modules:{restaurantsList:Pt,modal:Ut,map:Ct}}),Gt=a("5089");const Bt=Object(s["b"])(Lt).use(Dt);Bt.component("BIconStar",Gt["d"]),Bt.component("BIconStarFill",Gt["e"]),Bt.component("BIconStarHalf",Gt["f"]),Bt.component("BIconSortNumericDown",Gt["b"]),Bt.component("BIconSortNumericUpAlt",Gt["c"]),Bt.component("BIconExclamationCircle",Gt["a"]),Bt.mount("#app")},"616d":function(t,e,a){"use strict";a("7734")},7155:function(t,e,a){"use strict";a("7de4")},7734:function(t,e,a){},"7de4":function(t,e,a){},"853d":function(t,e,a){},"969d":function(t,e,a){},"9dd7":function(t,e,a){},ab8d:function(t,e,a){"use strict";a("969d")},aec9:function(t,e,a){"use strict";a("9dd7")},c30d:function(t,e,a){},ce27:function(t,e,a){},dfa6:function(t,e,a){}});
//# sourceMappingURL=app.8bab1f41.js.map
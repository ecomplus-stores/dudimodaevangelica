(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{174:function(t,e,i){"use strict";i(187)},175:function(t,e,i){"use strict";e.a=(t,e)=>new Promise((i=>{const s="object"==typeof window&&window.storefront;if(s){const a=()=>{let a=s.info&&s.info[t];return!!(a&&(e&&(a=a[e]),a&&Object.keys(a).length))&&(i(a),!0)};a()||s.on(`info:${t}`,a)}}))},176:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return n}));i(4);var s=i(26);const a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.a;const i=e.getCustomer().favorites||[],a=n(t,e);if(a){const e=i.indexOf(t);i.splice(e,1)}else i.push(t);return e.requestApi("/me.json","patch",{favorites:i}),!a},n=(t,e)=>{const{favorites:i}=e.getCustomer();return i&&i.includes(t)}},186:function(t,e,i){"use strict";var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((t=>{let{path:e}=t;return e===this.href}))))}}},a=i(43),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},187:function(t,e,i){var s=i(216);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(173).default)("083be3a1",s,!0,{})},188:function(t,e,i){"use strict";var s=i(24),a=i(34),n=i(27),o=i(35),r=i(71),c=i(175);const l=(t,e)=>{const{type:i,value:s}=e;let a;if(s)return a="percentage"===i?t*(100-s)/100:t-s,a>0?a:0};var u={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""},canShowPriceOptions:{type:Boolean,default:!0}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0,min_amount:0},discountLabel:this.discountText,pointsProgramName:null,pointsMinPrice:0,earnPointsFactor:0}},computed:{i19asOf:()=>Object(a.a)(s.r),i19from:()=>Object(a.a)(s.Gb),i19interestFree:()=>Object(a.a)(s.Ub),i19of:()=>Object(a.a)(s.Ec),i19to:()=>Object(a.a)(s.be),i19upTo:()=>Object(a.a)(s.me),i19youEarn:()=>Object(a.a)(s.ue),price(){const t=Object(n.a)(this.product);return this.extraDiscount.value&&(!this.extraDiscount.min_amount||t>this.extraDiscount.min_amount)?l(t,this.extraDiscount):t},comparePrice(){return Object(o.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(n.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(n.a)(this.product);for(let i=0;i<t.length;i++){if(Object(n.a)({...this.product,...t[i]})>e)return!0}}return!1},priceWithDiscount(){return this.canShowPriceOptions&&l(this.price,this.discount)},installmentValue(){if(this.canShowPriceOptions&&this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:r.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){this.canShowPriceOptions&&(this.discountOption?this.updateDiscount(this.discountOption):Object(c.a)("apply_discount").then((t=>{t.available_extra_discount&&(this.extraDiscount=t.available_extra_discount)})),this.installmentsOption?this.updateInstallments(this.installmentsOption):Object(c.a)("list_payments").then((t=>{this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option);const e=t.loyalty_points_programs;this.isLiteral&&e&&this.$nextTick((()=>{for(const t in e){const i=e[t];if(i&&i.earn_percentage>0){this.pointsMinPrice=i.min_subtotal_to_earn,this.pointsProgramName=i.name,this.earnPointsFactor=i.earn_percentage/100;break}}}))})))}},d=(i(174),i(43)),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(" "+t._s(t.i19from)+" ")]),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),i("small",[t._v(" "+t._s(t.i19to)+" ")])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"prices__value"},[t.hasVariedPrices?i("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.earnPointsFactor>0&&!(t.pointsMinPrice>t.price)?i("div",{key:"points",staticClass:"prices__points"},[i("i",{staticClass:"i-check-circle"}),t._v(" "+t._s(t.i19youEarn)+" "),i("span",[t._v(" +"+t._s((t.earnPointsFactor*t.price).toFixed(1))+" ")]),i("em",[t._v(t._s(t.pointsProgramName))])]):t._e(),t.installmentsNumber>1&&t.installmentValue?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?i("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),i("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?i("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),i("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[i("small",[t._v(" "+t._s(t.i19asOf)+" ")]),i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=p.exports},189:function(t,e,i){"use strict";i(4);var s=i(23),a=i(86),n=i(41);var o={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],imgWidth:0,imgHeight:0,height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(a.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:i}=this;if(i)return i;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:i}=this;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:i}=this.$el,s=((t,e,i,s)=>{let a,n;for(const o in s){const r=s[o];if(void 0!==r&&t[o]){if(void 0!==n)if(null===r){if(n>=e)continue}else if(r<e||r-50<=i||null!==n&&r>n)continue;a=o,n=r}}return a})(this.src,t,i,this.containerBreakpoints),a=this.src[s],{url:n,size:o}=a||this.defaultImgObj;e=n,o&&([this.imgWidth,this.imgHeight]=o.split("x").map((t=>parseInt(t,10))),t&&this.imgHeight&&this.canCalcHeight&&(this.height=(t>=this.imgWidth?this.imgHeight:t*this.imgHeight/this.imgWidth)+"px"))}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/"+(".png"===e.substr(-9,4)?"png":"jpeg")}):e.endsWith(".avif")?t.push({srcset:e,type:"image/avif"},{srcset:e.replace(".avif",".webp"),type:"image/webp"}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(n.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,i="IMG"===t.tagName?t:t.lastChild;i.style.opacity=0,this.imgHeight&&(i.height=this.imgHeight,i.width=this.imgWidth),i.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const i=document.createElement("IMG");i.src=e,t.parentNode.insertBefore(i,t.nextSibling)},i.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=i.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},r=(i(174),i(43)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,a=t.type;return i("source",{key:e,attrs:{srcset:s,type:a}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},190:function(t,e,i){"use strict";var s=i(24),a=i(34),n=i(27),o=i(21),r=i(73),c=i(35),l=i(25),u=i(2),d=i(6),p=i(186),h=i(189),m=i(188),b=i(26),_=i(176);const f=(t,e)=>{if("object"==typeof window){t=`productCard${t}Html`;const i="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof i)return i}};var g={name:"ProductCard",components:{ALink:p.a,APicture:h.a,APrices:m.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},ecomPassport:{type:Object,default:()=>b.a},accountUrl:{type:String,default:"/app/#/account/"},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,isFavorite:!1,error:""}),computed:{i19addToFavorites:()=>Object(a.a)(s.m),i19outOfStock:()=>Object(a.a)(s.Qc),i19unavailable:()=>Object(a.a)(s.he),i19uponRequest:()=>"Sob consulta",isWithoutPrice(){return!Object(n.a)(this.body)},ratingHtml(){return f("Rating",this.body)},buyHtml(){return f("Buy",this.body)},footerHtml(){return f("Footer",this.body)},name(){return Object(o.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(a.a)(s.z)},isInStock(){return Object(r.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},isLogged:()=>b.a.checkAuthorization(),discount(){const{body:t}=this;return Object(c.a)(t)?Math.round(100*(t.base_price-Object(n.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records,this.isFavorite=Object(_.a)(this.body._id,this.ecomPassport)},fetchItem(){this.productId&&(this.isLoading=!0,Object(u.g)({url:`/products/${this.productId}.json`}).then((t=>{let{data:e}=t;this.$emit("update:product",e),this.setBody(e),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(a.a)(s.W))})).finally((()=>{this.isLoading=!1})))},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(_.b)(this.body._id,this.ecomPassport))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(u.g)({url:`/products/${t._id}.json`}).then((e=>{let{data:s}=e;const a=["variations","customizations","kit_composition"];for(let t=0;t<a.length;t++){const e=s[a[t]];if(e&&e.length)return Promise.all([i.e(0),i.e(2),i.e(5),i.e(17)]).then(i.bind(null,388)).then((t=>{new l.a({render:e=>e(t.default,{props:{product:s}})}).$mount(this.$refs.quickview)}))}const{quantity:n,price:o}=s;d.a.addProduct({...t,quantity:n,price:o})})).catch((e=>{console.error(e),window.location=`/${t.slug}`})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},y=(i(174),i(43)),v=Object(y.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[i("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():i("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?i("span",{staticClass:"product-card__offer-stamp"},[i("i",{staticClass:"i-arrow-down"}),t._v(" "),i("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("stamps"),t._t("body",(function(){return[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),i("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,s){return 1===t.body.pictures.length||1===s||t.isHovered?i("a-picture",{key:s,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):i("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",(function(){return[i(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2)]})),t._t("rating",(function(){return[t._m(0)]})),t.body.available&&t.body.visible?t.isInStock?t.isWithoutPrice?t._t("without-price",(function(){return[i("p",{staticClass:"badge badge-info mt-auto"},[t._v(" "+t._s(t.i19uponRequest)+" ")])]})):[t._t("prices",(function(){return[i("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]})),i("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",(function(){return[t.buyHtml?i("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),i("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?i("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",(function(){return[i("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}))],2)]:t._t("out-of-stock",(function(){return[i("p",{staticClass:"badge badge-dark mt-auto"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[i("p",{staticClass:"badge badge-warning mt-auto"},[t._v(" "+t._s(t.i19unavailable)+" ")])]})),t._t("favorite",(function(){return[i("a",{staticClass:"btn product-card__favorite fade",attrs:{href:t.isLogged?null:t.accountUrl,"aria-label":t.i19addToFavorites},on:{click:t.toggleFavorite}},[i("i",{staticClass:"i-heart mr-1",class:t.isFavorite?"active":null})])]})),t._t("footer",(function(){return[t.footerHtml?i("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2)]),t.isLoading?[t._t("default"),t.error?i("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),i("div",{ref:"quickview"})],2)}),[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}],!1,null,null,null);e.a=v.exports},216:function(t,e,i){(e=i(172)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{375:function(e,a,r){"use strict";r.r(a);var t=r(72),n=r(27),o=r(26);a.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{compreConfieStoreId:a}=e;if(a){const e=window.storefrontApp&&window.storefrontApp.router;if(e){const r=e=>{let{name:r,params:i}=e;if("confirmation"===r&&i.json){let e;const r=decodeURIComponent(i.json);if(r)try{e=JSON.parse(r)}catch(e){}if(e){const r=o.a.getCustomer(),i=e.transactions&&e.transactions[0],c=i&&i.payer,s=Object(t.a)(r),d=new Date;let l=`orderSellerID=${a}&orderTotalSpent=${e.amount.total}&orderDeliveryTax=${e.amount.freight||0}&orderID=${e.number||e._id}&consumerEmail=${r.main_email}&billingEmail=${r.main_email}&consumerName=${encodeURIComponent(s)}&orderDate=${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;if("m"===r.gender?l+="&consumerGender=Masculino&billingGender=Masculino":"f"===r.gender&&(l+="&consumerGender=Feminino&billingGender=Feminino"),"p"===r.registry_type&&r.doc_number&&(l+=`&consumerCPF=${r.doc_number}&billingCPF=${c&&c.doc_number||r.doc_number}`),r.birth_date){const{day:e,month:a,year:t}=r.birth_date;e&&a&&t&&(l+=`&consumerBirthDate=${e.toString().padStart(2,"0")}/${a.toString().padStart(2,"0")}/${t}`)}navigator&&navigator.userAgent.includes("Mobile")?l+="&orderPlatform=1":l+="&orderPlatform=0";const{items:m}=e;if(m&&m.length){let e=m[0].sku,a=Object(n.a)(m[0]),r=m[0].quantity,t=encodeURIComponent(m[0].name),o="0";for(let i=1;i<m.length;i++)e+=`|${m[i].sku}`,a+=`|${Object(n.a)(m[i])}`,r+=`|${m[i].quantity}`,t+=`|${encodeURIComponent(m[i].name)}`,o+="|0";l+=`&productSKU=${e}&productValue=${a}&productQuantity=${r}&ProductName=${t}&ProductMktSaleID=${o}`}if(e.shipping_lines&&e.shipping_lines[0]){const a=e.shipping_lines[0];if(a.app&&a.app.label)switch(l+="&orderDeliveryType=",a.app.label.toLowerCase()){case"pac":l+="0";break;case"sedex":l+="1";break;case"retirar na loja":l+="3";break;default:l+="4"}a.delivery_time&&a.delivery_time.days&&(l+=`&orderDeliveryTime=${a.delivery_time.days}&productDeliveryTime=${a.delivery_time.days}`),l+=`&consumerZipcode=${a.to.zip}&billingZipcode=${a.to.zip}`}if(i){if(i.app&&i.app.intermediator&&i.app.intermediator.code)switch(l+="&orderPartnerPayment=",i.app.intermediator.code.toLowerCase()){case"mercadopago":l+="1";break;case"paypal":l+="2";break;case"pagseguro":l+="4";break;case"pagarme":l+="7";break;case"wirecard":l+="8";break;case"vindi":l+="12";break;default:l+="17"}switch(l+=`&billingName=${encodeURIComponent(c&&c.fullname||s)}`,l+=`&orderParcels=${i.installments&&i.installments.number||1}`,l+="&orderPaymentType=",i.payment_method.code){case"credit_card":l+="1";break;case"banking_billet":l+="2";break;case"debit_card":case"online_debit":l+="9";break;case"account_deposit":l+="6";break;case"loyalty_points":l+="8";break;default:l+="3"}if(i.credit_card&&i.credit_card.company)switch(l+="&orderCardFlag=",i.credit_card.company.toLowerCase()){case"visa":l+=3;break;case"mastercard":l+=2;break;case"american express":case"amex":l+=5;break;case"elo":l+=8;break;case"aura":l+=7;break;case"hipercard":l+=6;break;case"diners club":l+=1;break;default:l+=9}}const p=setInterval((()=>{const e=document.getElementById("confirmation");if(e){e.insertAdjacentHTML("beforeend",`<a id="bannerEconfy"></a> <param id="TagEConfy" value="${l}">`);const r=document.createElement("script");r.id="getData",r.type="text/javascript",r.src=`https://cdn.confi.com.vc/scripts/tagBanner.min.js?sellerId=${a}&lightbox=true`,document.body.appendChild(r),clearInterval(p)}}),200)}}};e.currentRoute&&r(e.currentRoute),e.afterEach(r)}}else console.error(new Error("Can't show lightbox without `compreConfieStoreId` option"))}}}]);
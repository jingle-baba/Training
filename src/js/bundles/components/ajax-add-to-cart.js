import $ from 'jquery';
export const addToCart = (varId,qty) => {
   let body = {
       "id": varId,
       "qty": qty
   }

   let headers = {
    "Content-Type": "application/json"
   }

   let url = "/cart/add.js";

   let options = {
       "url": url,
       "headers": headers,
       "method": "POST",
       "data": JSON.stringify(body)
    }
    
    // try {
    //     const res = await fetch(url,options);
    //     const data = await (res => res.json());
    //     console.log(data);
    // }
    // catch (e) {
    //    console.log("some error occured");
    // }

    $.ajax(options).done(function(){
        window.location.href="/cart";
    })
   
}
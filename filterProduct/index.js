const product = [{
   "product_id":101,
   "product_name":"samsung mobile",
   "product_url":"https://m.media-amazon.com/images/I/61I2zZDF2ZL.jpg",
   "product_color":"black",
   "product_price":"36000"
},
{
   "product_id":102,
   "product_name":"OnePlus mobile",
   "product_url":"https://static.digit.in/OnePlus-12R-4-300x300.jpg",
   "product_color":"aqua",
   "product_price":"38000"
},
{
   "product_id":103,
   "product_name":"Realme mobile",
   "product_url":"https://i.pinimg.com/236x/19/15/e8/1915e86152d75e1ce58a7c0a5cf215d5.jpg",
   "product_color":"aquamarine",
   "product_price":"38000"
},
{
   "product_id":104,
   "product_name":"Oppo mobile",
   "product_url":"https://i.pinimg.com/236x/3c/df/29/3cdf29214859257da6bfc3d0075824e9.jpg",
   "product_color":"aqua",
   "product_price":"38000"
},
{ "product_id":105,
"product_name":"Apple mobile",
"product_url":"https://i.pinimg.com/736x/52/d0/71/52d071a6fc8a550eb4c9acf189f8b694.jpg",
"product_color":"blue",
"product_price":"38000"
},
{ 
   "product_id":106,
   "product_name":"Tv",
   "product_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdt2Ew298yPt2JU0GV_UJZ8ZoFnlUDarLSJUrBNu9P6Be8bw67iriNFWXV-bvVRBqdKPY&usqp=CAU",
   "product_color":"blue",
   "product_price":"38000"
   },
];
function checkData(product) {
  
   let totalSum = 0;
   product.forEach(({ product_price }) => {
      totalSum += parseInt(product_price);
   });

 

   product.forEach(({ product_id, product_name, product_url, product_color, product_price }) => {

      let DynamicData = document.getElementById("DynamicData");
      DynamicData.innerHTML += `
         <tr>
            <td>${product_id}</td>
            <td>${product_name}</td>
            <td><img src="${product_url}" width="300px" height="400px"/></td>
            <td>${product_color}</td>
            <td>${product_price}</td>
         </tr>`;
   });

   let tfoot = document.getElementById("tfoot");
   tfoot.innerHTML = `
      <tr>
         <td colspan="4">Total Price</td>
         <td>${totalSum}</td>
      </tr>`;
}

checkData(product);

function filterData(product) {
   let inputSearch = document.getElementById("inputSearch").value.toLowerCase();
   let data = product.filter(({ product_name }) => {
      return product_name.toLowerCase().includes(inputSearch);
   });

   let DynamicData = document.getElementById("DynamicData");
   DynamicData.innerHTML = "";

   if (data.length === 0) {
      DynamicData.innerHTML = `<tr><td colspan="5">Product not found</td></tr>`;
      let tfoot = document.getElementById("tfoot");
      tfoot.innerHTML = `
         <tr>
            <td colspan="4">Total</td>
            <td>0</td>
         </tr>`;
   } else {
      let totalSum = 0;
      data.forEach(({ product_price }) => {
         totalSum += parseInt(product_price);
      });

      data.forEach(({ product_id, product_name, product_url, product_color, product_price }) => {
         DynamicData.innerHTML += `
            <tr>
               <td>${product_id}</td>
               <td>${product_name}</td>
               <td><img src="${product_url}" width="300px" height="400px"/></td>
               <td>${product_color}</td>
               <td>${product_price}</td>
            </tr>`;
      });

      let tfoot = document.getElementById("tfoot");
      tfoot.innerHTML = `
         <tr>
            <td colspan="4">Total Price</td>
            <td>${totalSum}</td>
         </tr>`;
   }
}

let buttonSearch = document.getElementById("button-search");
buttonSearch.addEventListener("click", (event) => {
   event.preventDefault();
   filterData(product);
});

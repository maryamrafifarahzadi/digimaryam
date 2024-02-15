
// let fetchmenu=()=>{
//     return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     let xml=new XMLHttpRequest();
//     xml.open("get","http://localhost:3004/menu");
//     xml.responseType="json"
//     xml.onload=()=>{
//         resolve(xml.response);
//     };
//    xml.onerror=()=>{
//     reject("error")
//    };
//    xml.send(null) ;
//     });

//    },1000);
// };
// let html=""
// let showdata=()=>{
//     fetchmenu().then((res)=>{
//         res.forEach(element => {
//             html+=`     <div class="menu">
//             <div class="right">
//               <nav>`
//               res.foreach(element=>{})
//             <div class="active" ><a href="#">${element.title}</a></div>});
//         html+= `
          
//           </nav>
//             </div>`  
//         });
//         document.querySelector("div.menu") .innerHTML=html
//         });
      

    
//     .catch((err)
    

// };
// document.addEventListener("DOMContentLoaded",showdata);
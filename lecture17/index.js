const map=(products)=>{
    document.getElementById("productList").innerHTML=""
    products.map((list,index)=>
        {
        let title = document.createElement("h3");
        title.innerHTML = list.title;
        let price = document.createElement("p");
        price.innerHTML = list.price;
        let img = document.createElement("img");
        img.src = list.img; 
        let category = document.createElement("p");
        category.innerHTML = list.category;
        let  button=document.createElement("button");
        button.innerHTML=Delete;
        button.addEventListener("click", () => handleDelete(index))
        let div=document.createElement("div")
        div.append(title,price,category,button);
        document.getElementById("productList").append(div);

    });
};
if (isMatched.length > 0) {
    alert("login success")
     
    localStorage.setItem("username",isMatched[0].username)


    localStorage.setItem("isLogin", true)
   
  }
  else {
    alert("login failure")
  }

mapper(products);



import { createTag } from "../components/helper.js";
import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];



const mapper = (data) => {

    data.map((ele) => {

        let img = createTag("img", ele.img)
        let price = createTag("price", ele.price)
        let title = createTag("title", ele.title)
        let category = createTag("category", ele.category)
        
        let div = document.createElement("div")
        div.append(img, title, price, category)
        document.getElementById("productList").append(div)
    })

}


mapper(products)
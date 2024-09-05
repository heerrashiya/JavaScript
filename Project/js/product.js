import { createTag } from "../components/helper.js";
import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];

const mapper = (data) => {
    if (data.length === 0) {
        document.getElementById("productList").textContent = "No products available.";
        return;
    }

    data.forEach((ele) => {
        let img = createTag("img", "", { src: ele.img, alt: ele.title });
        let title = createTag("h3", ele.title);
        let price = createTag("p", `Price: $${ele.price}`);
        let category = createTag("p", `Category: ${ele.category}`);
        
        let div = document.createElement("div");
        div.classList.add("product-item");
        div.append(img, title, price, category);

        document.getElementById("productList").append(div);
    });
};

mapper(products);

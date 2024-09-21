
import getValue from "../components/helper.js";
import Navbar from "../components/navbar.js";


document.getElementById("navbar").innerHTML = Navbar()
let users = JSON.parse(localStorage.getItem("users")) || []
const handleData=(e)=>{
    e.preventDefault();

    let user={
        username:getValue('.username'),
        email:getValue('.email'),
        password:getValue('.password'),
    };


    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));


}

document.querySelector('#userdata').addEventListener("submit",handleData);







import getValue from "../components/helper.js";
import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar(); 


let users = JSON.parse(localStorage.getItem("users")) || [];
const handleData = (e) => {
  e.preventDefault();

  let user = {
    email: getValue(".email"),
    password: getValue(".password"),
  };
  

  let isMatched = users.filter(
    (ele) => ele.email == user.email && ele.password == user.password
 
  );

  console.log(isMatched);
  
  if(isMatched.length>0)
    {
      alert("login succes")

    localStorage.setItem("username",isMatched[0].username)

    localStorage.setItem("islogin",true)
    
  }
  else{
    alert("failed")
  }


 
};


document.getElementById("userdata").addEventListener("submit",handleData)
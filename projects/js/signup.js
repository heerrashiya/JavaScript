let users=JSON.parse(localStorage.getItem("u"))
const HandleData=(e)=>{
    e.preventDefault();

    let user={
        email:getValue(".email"),
        username:getValue(".username"),
        password:getValue(".password"),
    };

    user.push(user);
    localStorage.setItem("users",JSON.stringify(users));

    window.location.href="./home.html"

};

document.querySelector("#userdata").addEeventListener("submit",HandleData)
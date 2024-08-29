const  handledata =(news)=>{
 
    document.getElementById("profile").innerHTML = "";

  user.map((data) => {
    let img = document.createElement("img");
    img.src = data.img;
    let username = document.createElement("h3");
    username.innerHTML = data.username;
    let div = document.createElement("div");
    div.append(img, username);
    document.getElementById("profile").append(div);
  });
};

const handleusers = (users,index) => {
    document.getElementById("Data").innerHTML = "";
    users.map((newsdata) => {
      let div = document.createElement("div");
      div.className = "news-box";
      let image = document.createElement("img");
      image.src = newsdata.image;
      let content = document.createElement("div");
      content.className = "news-content";
      let title = document.createElement("h2");
      title.innerHTML = newsdata.title;
      let p = document.createElement("p");
      p.innerHTML = newsdata.description;
      let deletebtn = document.createElement("button");
      deletebtn.innerHTML = "Delete";
      deletebtn.className = "delete-btn";
      deletebtn.addEventListener("click", () => {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        handleusers(users);
      });
      content.append(title, p, deletebtn);
      div.append(image, content);
      document.getElementById("Data").append(div);
    });
  };
  
  handledata(user);
  
  handleusers(users);

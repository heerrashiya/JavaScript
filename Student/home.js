import Navbar from "./navbar.js";

document.getElementById("navbar").innerHTML=Navbar();

let users = JSON.parse(localStorage.getItem("users")) || [];

const mapper = (data) => {
document.getElementById("tbody").innerHTML = "";
  data.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.phone}</td>
      <td>${user.fee}</td>
      <td>${user.course}</td>
    `;
    document.getElementById("tbody").append(row);
  });
};


mapper(users);

const handleSort = (orderBy) => {
    if (orderBy == "lth") {
        let stu = students.sort((a, b) => a.fee - b.fee);

        mapper(stu);
    } else {
        let stu = students.sort((a, b) => b.fee - a.fee);

        mapper(stu);
    }
};

const handlesort = (orderBy) =>
    {
   if (orderBy == "htl") {
       let stu = students.sort((a, b) => a.fee - b.fee);
    

       mapper(stu);
   }
    else 
    {
       let stu = students.sort((a, b) => b.fee - a.fee);

       mapper(stu);
   }
};

const handleCategory = (Coures) => {
    let stu = students.filter((ele) => ele.coures == coures);
    mapper(stu);
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));

document.getElementById("htl").addEventListener("click", () => handlesort("htl"));

document.getElementById("fullstack").addEventListener("click", () => handleCategory("fullstack"));

document.getElementById("backend").addEventListener("click", () => handleCategory("backend"));

document.getElementById("frontend").addEventListener("click", () => handleCategory("frontend"));



const search = (e) => {
    e.preventDefault();

    let searchValue = getValue("#search");
    let stu = students.filter((ele) => ele.name.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(stu);

};

document.getElementById("searching").addEventListener("submit", search);

document.getElementById("search").addEventListener("keypress", (e) => {
    if(e.key=="Enter"){
      
    }
    });
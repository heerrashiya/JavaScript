import Navbar from "./navbar.js";

document.getElementById("navbar").innerHTML=Navbar();

let student = JSON.parse(localStorage.getItem("student")) || [];

const mapper = (data) => {
    document.getElementById("studentList").innerHTML = "";
    data.map((ele) => {
      
        let name = createTag("img", ele.name);
        let age = createTag("p", ele.age);
        let number = createTag("h3", ele.number);
        let email = createTag("p", ele.email);
        let fee = createTag("h3", ele.fee);
        let coures = createTag("h3", ele.coures);
        let div = document.createElement("div");
        div.append(name, age, number, email,fee,coures);
        document.getElementById("studentList").append(div);
    });
};

mapper(student);

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
import Navbar from "./navbar.js";

document.getElementById("navbar").innerHTML=Navbar();

const map=(products)=>{
    document.getElementById("studentList").innerHTML=""
    students.map((list,index)=>
        {
        let name = document.createElement("h3");
        name.innerHTML = list.name;
        let age = document.createElement("p");
        age.innerHTML = list.age;
        let email = document.createElement("p");
        email.innerHTML = list.email;
        let coures = document.createElement("p");
        coures.innerHTML = list.coures;
        let div=document.createElement("div")
        div.append(name,age,email,coures);
        document.getElementById("studentList").append(div);

    });
};

mapper(students);
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
       let temp = students.sort((a, b) => b.fee - a.fee);

       mapper(stu);
   }
};

const handleCategory = (Coures) => {
    let stu = students.filter((ele) => ele.coures == coures);
    mapper(stu);
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));

document.getElementById("htl").addEventListener("click", () => handleSort("htl"));

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

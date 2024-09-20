import Navbar from "./navbar.js";


document.getElementById("navbar").innerHTML=Navbar();

let students = JSON.parse(localStorage.getItem("students")) || [];
const handleData = (e) => {
    e.preventDefault();

    let student = {
        name: document.getElementById('nameInput').value,
        age: document.getElementById('ageInput').value, 
        number: document.getElementById('numberInput').value,
        email: document.getElementById('emailInput').value,
        course: document.getElementById('feeInput').value,
    };
     
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
   
};

document.getElementById("studentData").addEventListener('submit', handleData);



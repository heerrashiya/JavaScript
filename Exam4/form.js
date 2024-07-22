let users = []

const Delete = (index) =>
{
    users.splice(index,1);
    uimaker();
    
};



const uimaker = () => {
    document.getElementById('tbody').innerHTML = ''
    for (let i =0 ; i<users.length ; i++)
    {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].Name;
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].Gr_id;
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].Course;
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].Number;
        let td5 =document.createElement('td')
        td5.innerHTML = users[i].Fees;
        let td6=document.createElement('td')
        td6.innerHTML='remove';
        td6.addEventListener("click",() => Delete(i));

        tr.append(td1,td2,td3,td4,td5,td6)
        document.getElementById('tbody').append(tr)
    }
}

const Sales = () => {
    document.getElementById('body').innerHTML = '';

    let courseData = {};

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let fees = user.fees;
        let feeAmount = "";
        for (let j = 0; j < fees.length; j++) {
            if (!isNaN(fees[j]) && fees[j] !== ' ') {
                feeAmount += fees[j];
            }
        }
        if (!courseData[user.course]) {
            courseData[user.course] = { count: 0, totalFees: 0 };
        }
        courseData[user.course].count++;
        courseData[user.course].totalFees += Number(feeAmount);
    }

    for (let course in courseData) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = course;
        let td2 = document.createElement('td');
        td2.innerHTML = courseData[course].count;
        let td3 = document.createElement('td');
        td3.innerHTML = courseData[course].totalFees;

        tr.append(td1, td2, td3);
        document.getElementById('body').append(tr);
    }
}


const HandleData=(e)=>{
    e.preventDefault();

    let Name = document.getElementById('name').value;
    let Gr_id = document.getElementById('number').value;
    let Course = document.getElementById('text').value;
    let Number = document.getElementById('password').value;
    let Fee = document.getElementById('number').value;

    let user = {
        Name: Name,
        Gr_id: Gr_id,
        Course: Course,
        Number:Number,
        Fee:Fee

    }
    

   if (Name.length < 2) {
        alrt("Please enter a valid name");
        return;
    }
    if (Gr_id.length <=4) {
        alert("Please enter a valid phone number");
        return;
    }
    if (Course.length !=0) {
        alert("Please select Course");
        return;
    }
    if (Number.length !=10) {
        alert("Please enter 10 digit number");
        return;
    }
    if(Fee.length !=0){
        alert("Please Enter Fee ");
        return;
     }
    }
    users.push(user);
    console.log(user);
    uimaker();
    

document.getElementById('userData').addEventListener("submit", HandleData)




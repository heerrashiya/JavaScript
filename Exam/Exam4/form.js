let users = []

const Delete = (index) => {
    users.splice(index, 1);
    uimaker();


};




function uimaker() {
    let sales = {
        Data_Science: {
            count: 0,
            Total: 0,
        },
        AI: {
            count: 0,
            Total: 0,
        },
        Cyber_Security: {
            count: 0,
            Total: 0,
        },
        Web_Devloper: {
            count: 0,
            Total: 0,
        },
    
    }
    document.getElementById('tbody').innerHTML = '';
    for (let i = 0; i < users.length; i++) {

        if(users[i].Course=="Data Science"){
            sales.Data_Science.count+=1
            sales.Data_Science.Total+=users[i].Fee
        }
        else if(users[i].Course=="AI"){
            sales.AI.count+=1
            sales.AI.Total+=users[i].Fee
        }
        else if(users[i].Course=="Cyber Security"){
            sales.Cyber_Security.count+=1
            sales.Cyber_Security.Total+=users[i].Fee
        }
        else if(users[i].Course=="Web Devloper"){
            sales.Web_Devloper.count+=1
            sales.Web_Devloper.Total+=users[i].Fee
        }


        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = users[i].Name;
        let td2 = document.createElement('td');
        td2.innerHTML = users[i].Gr_id;
        let td3 = document.createElement('td');
        td3.innerHTML = users[i].Course;
        let td4 = document.createElement('td');
        td4.innerHTML = users[i].Number;
        let td5 = document.createElement('td');
        td5.innerHTML = users[i].Fee;
        let td6 = document.createElement('td');
        td6.innerHTML = 'remove';
        td6.addEventListener("click", () => Delete(i));

        tr.append(td1, td2, td3, td4, td5, td6);
        document.getElementById('tbody').append(tr);
    }
    document.getElementById('sales').innerHTML='';
    let tr=document.createElement('tr')
    let td=document.createElement('td')
    td.innerHTML="Data Science"
    let td2=document.createElement('td')
    td2.innerHTML=sales.Data_Science.count
    let td3=document.createElement('td')
    td3.innerHTML=sales.Data_Science.Total
    tr.append(td,td2,td3)
    document.getElementById('sales').append(tr)

    let tr2=document.createElement('tr')
    let td4=document.createElement('td')
    td4.innerHTML="AI"
    let td5=document.createElement('td')
    td5.innerHTML=sales.AI.count
    let td6=document.createElement('td')
    td6.innerHTML=sales.AI.Total
    tr2.append(td4,td5,td6)
    document.getElementById('sales').append(tr2)

    let tr3=document.createElement('tr')
    let td7=document.createElement('td')
    td7.innerHTML="Cyber Security"
    let td8=document.createElement('td')
    td8.innerHTML=sales.Cyber_Security.count
    let td9=document.createElement('td')
    td9.innerHTML=sales.Cyber_Security.Total
    tr3.append(td7,td8,td9)
    document.getElementById('sales').append(tr3)

    let tr4=document.createElement('tr')
    let td10=document.createElement('td')
    td10.innerHTML="Web Devloper"
    let td11=document.createElement('td')
    td11.innerHTML=sales.Web_Devloper.count
    let td12=document.createElement('td')
    td12.innerHTML=sales.Web_Devloper.Total
    tr4.append(td10,td11,td12)
    document.getElementById('sales').append(tr4)

    
    
    
}



const HandleData = (e) => {
    e.preventDefault();

    let Name = document.getElementById('name').value;
    let Gr_id = document.getElementById('Gr_id').value;
    let Course = document.getElementById('course').value;
    let number = document.getElementById('Number').value;
    let Fee = Number(document.getElementById('fees').value);

    let user = {
        Name: Name,
        Gr_id: Gr_id,
        Course: Course,
        Number: number,
        Fee: Fee

    }
    console.log('user', user);


    if (Name.length < 2) {
        alrt("Please enter a valid name");
        return;
    }
    if (Gr_id.length != 4) {
        alert("Please enter a valid phone number");
        return;
    }
    if (Course.length == 0) {
        alert("Please select Course");
        return;
    }
    if (number.length != 10) {
        
        alert("Please enter 10 digit number");
        return;
    }
    if (Fee.length == 0) {
        alert("Please Enter Fee ");
        return;
    }

    users.push(user);
    console.log(user)
    uimaker();

}



document.getElementById('userData').addEventListener("submit", HandleData)



console.log("test");
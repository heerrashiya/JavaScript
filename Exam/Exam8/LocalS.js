let users=[]

const data=()=>
{
    document.getElementById('tbody').innerHTML = ''
    for (let i = 0; i < users.length; i++)
      {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].Name
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].Roll_no
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].Age
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].Address
        

        tr.append(td1, td2, td3, td4)
        document.getElementById('tbody').append(tr)
     }   
}

const HandleData = (e) => {
    e.preventDefault();


    let Name = document.getElementById('Name').value;
    let Roll_no  = document.getElementById('Roll_no').value;
    let Age = document.getElementById('Age').value;
    let Address = document.getElementById('Address').value;

    let user = {
        Name: Name,
        Roll_no: Roll_no,
        Age: Age,
        Address:Address
    }

    if (Name.length < 2) {
        alert("Please enter a Name");
        return;
    }
    if (!Roll_no) {
        alert("Please enter  Roll Number");
        return;
    }
    if (!Age) {
        alert("Please enter your Age ");
        return;
    }
    if (!Address) {
        alert("Please enter your Address");
        return;
    }

    user .push(user);
    console.log(users)
    Student();
}

document.getElementById('data').addEventListener("submit", HandleData)
    

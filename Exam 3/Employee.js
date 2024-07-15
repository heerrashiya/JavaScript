

const Record = () => {
    document.getElementById('Employe').innerHTML = ''

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML=i+1;
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].Ename;
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].email;
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].Dept_no;
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].Exp_year;
        let td5=document.createElement('td')
        if(users[i].Exp_year>=0&&users[i].Exp_year<=5)
        {
            td5.innereHTML='junniar';
             }     else
            {
                td5.innerHTML='sini';
            }
        
        let td6 = document.createElement('td')
        td6.innerHTML = users[i].salary;
        tr.append(td,td1, td2, td3, td4, td5,td6)
        document.getElementById('Employe').append(tr)
    }
}

let users = []

const handleData = (event) => {
    event.preventDefault();

    let Ename = document.getElementById('Ename').value
    let email = document.getElementById('email').value
    let Dept_no = document.getElementById('Dept_no').value
    let Exp_year = document.getElementById('Exp_year').value
    let salary = document.getElementById('salary').value

    const user = {
        Ename: Ename,
        email: email,
        Dept_no: Dept_no,
        Exp_year: Exp_year,
        salary: salary,
    }

    users.push(user);
    console.log(user);
    Record();
}

document.getElementById('Employee').addEventListener("submit", handleData)



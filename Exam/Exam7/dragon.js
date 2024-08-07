let users = []

const Delete = (index) =>
     {
    users.splice(index, 1);
    Dragon();

};

const Dragon=()=>
{
    document.getElementById('tbody').innerHTML = '';
    
    for (let i = 0; i < users.length; i++) 
        {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].name
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].price
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].colour
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].quantity
        let td5 = document.createElement('td')
        td5.innerHTML = "remove";
        td5.addEventListener("click", () => Delete(i));

        tr.append(td1, td2, td3, td4, td5)
        document.getElementById('tbody').append(tr)
        }
    }


const HandleData = (e) => {
    e.preventDefault();

    let Name = document.getElementById('Name').value;
    let Price = document.getElementById('Price').value;
    let Color = document.getElementById('Color').value;
    let Quantity = document.getElementById('Quantity').value;
   

    let user = {
        Name: Name,
        Price: Price,
        Color: Color,
        Quantity: Quantity
       

    }

    if (name.length < 2) {
        alert("Enter valid name.");
        return;
    }

    if(!price)
        {
            alert("Please Select Price.");
            return;
        }

        if(!colour)
            {
                alert("Please Select Colour.");
                return;
            }

            if(!quantity)
                {
                    alert("Please Select Quantity.");
                    return;
                }

                users.push(user);
                console.log(user)
                Dragon();
}

document.getElementById('data').addEventListener("submit", HandleData)
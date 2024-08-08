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
        td1.innerHTML = users[i].Name
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].Price
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].colour
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].Quantity
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
    let Colour = document.getElementById('Colour').value;
    let Quantity = document.getElementById('Quantity').value;
   

    let user = {
        Name: Name,
        Price: Price,
        Colour: Colour,
        Quantity: Quantity
       

    }

    if (Name.length < 2) {
        alert("Enter valid name.");
        return;
    }

    if(!Price)
        {
            alert("Please Select Price.");
            return;
        } 

        if(!Colour)
            {
                alert("Please Select Colour.");
                return;
            }

            if(!Quantity)
                {
                    alert("Please Select Quantity.");
                    return;
                }

                users.push(user);
                console.log(user)
                Dragon();
}

document.getElementById('data').addEventListener("submit", HandleData)
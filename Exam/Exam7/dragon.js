let users = []

const Delete = (index) =>
     {
    users.splice(index, 1);
    uimaker();

};

function uimaker()
{
    document.getElementById('tbody').innerHTML = '';
    



const HandleData = (e) => {
    e.preventDefault();

    let Name = document.getElementById('name').value;
    let Price = document.getElementById('Price').value;
    let Color = document.getElementById('Color').value;
    let Quantity = document.getElementById('Quantity').value;
   

    let user = {
        Name: Name,
        Price: Price,
        Color: Color,
        Quantity: Quantity
       

    }
}
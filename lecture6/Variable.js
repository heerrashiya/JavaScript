
const vari = () =>
    {
        let num = document.getElementById('num1').value;
        document.getElementById('result').innerHTML = `${num} `
        num += " <br> " + document.getElementById('num2').value;
        document.getElementById('result').innerHTML = `${num} `

        // let num1=document.getElementById('num2').value;

        // document.getElementById('result').innerHTML = `${num} ${num1} `

    }

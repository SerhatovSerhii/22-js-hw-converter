
let myHeaders = new Headers();
myHeaders.append("apikey", "TX2SvgxuaBvozHUW0cxKiVTYwYm7VSmH");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
    .then(response => response.json())
    .then(data => {
        let from = document.getElementById("from");
        let to = document.getElementById("to");
        for (let key in data.symbols) {
            let optionFrom = document.createElement('option');
            optionFrom.value = key;
            optionFrom.textContent = key;
            from.appendChild(optionFrom);
            let optionTo = document.createElement('option');
            optionTo.value = key;
            optionTo.textContent = key;
            to.appendChild(optionTo);
        }
    }).then(result => console.log(result))
    .catch(error => console.log('error', error));

const base_url = "https://api.apilayer.com/fixer";
const api_key = "TX2SvgxuaBvozHUW0cxKiVTYwYm7VSmH";
const convert = document.getElementById("convert");
const from = document.getElementById("from");
const to = document.getElementById("to");
const sum = document.getElementById("sum");
const result = document.getElementById("result");

convert.onclick = () => {
    fetch(`${base_url}/convert?from=${from.value.trim()}&to=${to.value.trim()}&amount=${sum.value.trim()}`,
        {
            headers: {
                apikey: api_key
            }
        })
        .then(result => result.json()) // then - обработка ответа, response - ответ сервера
        .then(data => data.result) // data - это ответ сервера
        .then(res => {
            const h1 = document.createElement('h1');
            h1.append(`Result: ${res.toFixed(2)}`);
            if (result.firstElementChild) {
                result.replaceChild(h1, result.firstElementChild);
            } else {
                result.append(h1);
            }
        })
        .catch(error => {
            const h1 = document.createElement('h1');
            h1.append(`Error`);
            if (result.firstElementChild) {
                result.replaceChild(h1, result.firstElementChild);
            } else {
                result.append(h1);
            }
        }) // catch - обработка ошибок
}
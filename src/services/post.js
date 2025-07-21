export function post(productList) {
    fetch('http://127.0.0.1:5000', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(productList),
    })
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
}
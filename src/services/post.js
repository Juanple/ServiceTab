export function post(object, route) {
    fetch(`http://127.0.0.1:5000${route}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(object),
    })
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
}
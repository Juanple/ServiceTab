export async function post(object, route) {
    const response = await fetch(`http://127.0.0.1:5000${route}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(object),
    });
    const data = await response.json();
    return data;
}
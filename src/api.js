const HOST ='http://localhost:8000';
const ROOT_URL = `${HOST}`;

function queryParams(params) {
    var esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}


async function sendRequest(path, opts = {}, req) {
    const headers = Object.assign({}, opts.headers || {}, {
        'Content-type': 'application/json; charset=UTF-8',
    });

    const response = await fetch(
        `${ROOT_URL}${path}`,
        Object.assign({ method: 'POST' }, opts, { headers }),
    );

    const data = await response.json();

    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}

export const getUsers = () => sendRequest('/users', {
    method: 'GET'
})

export const getCashierBalance = () => {
    return Promise.resolve(256.45);
}

export const getProducts = () => sendRequest('/products', {
    method: 'GET'
})
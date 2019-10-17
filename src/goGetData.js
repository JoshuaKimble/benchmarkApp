import fetch from 'node-fetch';

function goGetData() {
    return fetch('http://localhost:8000/bench').then(response => {
        return  response.json()
    });
}

export default goGetData;

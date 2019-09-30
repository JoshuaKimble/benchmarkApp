import fetch from 'node-fetch';

function massage(data) {
    const newData = data.map(item => ({
            ...item,
            body: item.body.toUpperCase()
        }));
    newData.sort((a, b) => a.title.length - b.title.length);
    
    return newData;
}

function getData() {
    const promises = [];
    
    for (let index = 0; index < 15; index++) {
        promises.push(fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => massage(data)));
    }
    
    return Promise.all(promises);
}

export default getData;

// HTTP Requests

const getTodos = (resource) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', ()=>{
        
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('error getting resource');
            }
        
        });
        
        request.open('GET', resource);
        request.send();

    });
}

getTodos('https://jsonplaceholder.typicode.com/todos/').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('https://jsonplaceholder.typicode.com/posts/');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('https://jsonplaceholder.typicode.com/users/');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
})

// Promise example

/* const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch something
        resolve("some data");
        //reject("some errror");
    });
} */

/* getSomething().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
}) */

/* getSomething().then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
})
 */

// Callback function
/*
getTodos('https://jsonplaceholder.typicode.com/todos/', (error, data) => {
    if (error) {
        console.log(error);
    }else{
        console.log(data);
    }
});
*/
// https://jsonplaceholder.typicode.com/todos/
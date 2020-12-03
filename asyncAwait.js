// async & await

const getUsers = async () => {

    const response =  await fetch('https://jsonplaceholder.typicode.com/users/');

    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }

    const data = response.json();

    return data;

};

getUsers()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));


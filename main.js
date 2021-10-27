// UDEMY SECTION 12
// callback functions & promise
/* const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            //console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText); // get response in JSON form
                resolve(data);
            } else if (request.readyState === 4) {
                reject("error getting resource");
            }
        });

        request.open("GET", resource); // gets request
        request.send(); // sends request
    })
};

getTodos("todos/luigi.json").then(data => {
    console.log("promise 1 resolved:", data);
    return getTodos("todos/mario.json");
}).then(data => {
    console.log("promise 2 resolved:", data);
    return getTodos("todos/shaun.json");
}).then(data => {
    console.log("promise 3 resolved:", data);
}).catch(err => {
    console.log("promise rejected", err);
}); */


// fetch api - easier & newer way
/* fetch("todos/luigi.json").then((response) => {
    console.log("resolved", response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log("rejected", err); // rejection only if network error (?)
}); */


// async & await
const getTodos = async () => { // async returns a promise in itself

    const response = await fetch("todos/luigi.json");

    if (response.status !== 200) {
        throw new Error("cannot fetch the data");
    }

    const data = await response.json();

    return data;
};

getTodos()
    .then(data => console.log("resolved:", data))
    .catch(err => console.log("rejected:", err.message));




// Exercise 58
/* console.info("%cExercise 58", "color: black; background-color: pink");

var myArr = {
    "stations": [ 
      {
        "name": "Lyngby", 
        "lastName": "Doe",
        "age": 23
      },
      {
        "name": "Hellerup", 
        "lastName": "Smith",
        "age": 32
      },
      {
        "name": "Svanemøllen",
        "lastName": "Smith",
        "age": 32
      }
    ]
}
console.log(myArr) */

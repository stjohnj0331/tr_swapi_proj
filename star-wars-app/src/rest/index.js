export function getPeople(){
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("http://localhost:4000/people", myInit);
    return promise.then((response) => {
        console.log(response);
        return response.json();
    });
}

export function getFilms(){
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("http://localhost:4000/films", myInit);
    return promise.then((response) => {
        console.log(response);
        return response.json();
    });
}

export function getPlanets(){
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("http://localhost:4000/planets", myInit);
    return promise.then((response) => {
        console.log(response);
        return response.json();
    });
}

//refactored the above into a generic function
export function getData(url){
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch(url, myInit);
    return promise.then((response) => {
        console.log(response);
        return response.json();
    });
}

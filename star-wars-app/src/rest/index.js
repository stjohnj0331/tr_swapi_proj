export function getPeople(){
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("http://localhost:4000/people", myInit);
    return promise.then((response) => {
        console.log(response);
        return response.json();
    });
}
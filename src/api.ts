const books = document.querySelectorAll("#books")
const book = document.querySelector("#book")

const getApi = async()=>{
    const data  = await fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books")
    const jsondata = await data.json() 
    console.log(jsondata);
}


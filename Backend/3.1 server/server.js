const express =  require('express');
const app  = express();

app.get("/", function (request, response){
    response.send("<h1>Hello World</h1>");
})

app.get("/contact", function (request , response){
    response.send("<h2>contact me at : manavbhullar341@gmail.com</h2>")
})

app.listen("/about", function (request , response){
    response.send("<h2>My name is Manav Bhullar and I am a web developer</h2>")
})

app.listen (3000 , function() {
    console.log('Server is running on port 3000');
});
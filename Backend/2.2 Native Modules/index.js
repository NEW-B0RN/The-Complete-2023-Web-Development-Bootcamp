const fs = require("fs");
/*

fs.writeFile("Hello.txt", "Hello From Node.js!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!")
});
*/

fs.readFile("./Hello.txt", "utf8",(err, data) => {
    if(err) throw err;
    console.log(data);
})

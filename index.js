const fs = require('fs');
const http = require("http");

//to create a webserver  include 
//req is used to get info about current http request
//res  is server response in request
 const server = http.createServer((req, res) => {
    //synchronous version ta k data ak hi dfa load ho start mn
    //synchronous method 
    //synchronous sy br br load krny py br br read ni kry ga ak hi dfa read kry ga.
    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
        const objdata = JSON.parse(data);
    //console.log(req.url);
    if(req.url == "/")
    {
        res.end('<h1> Hello from the home side..</h1>');
    }
    else if(req.url == "/about")
    {
        res.end('<h1>Hello from the aboutus side..</h1>');
    }
    else if(req.url == "/contact")
    {
        //res.write("Hello from the contactus side..")
        res.end("<h1> Hello from the contactus side..</h1>");
    }
    else if(req.url == "/userapi")
    {
        //user jab bhi userapi ko cal kry to wo file call ho jy
        //asynchronous
       // fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
           // console.log(data); //returns array of an object
            //agr srf first id ka naam chahiye then?so firstly o data mill rha hy usy object mn convert krna hy
           // const objdata = JSON.parse(data);
           res.writeHead(200, {"Content-type": "application/json"});
            res.end(objdata[1].name); // 0 index ka name fetch

        }
       // res.end("<h1> Hello from the userAPI side..</h1>");
  //  }
    else 
    {
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1> 404 error page.Page not exist </h1>")
    }
 });
//req listen kahan krna chahyn gy e.g port
 server.listen(4000, "127.0.0.1", () => {
    console.log('listening to port number');
 });
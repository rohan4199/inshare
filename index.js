console.log("Hello World")
const httpp = Require('http');
const hostname = "mcms.automagin.com"
const port =''
const server =http.createserver((req,res)=> {

console.log(req.headers);
res.statuscode = 200;

});

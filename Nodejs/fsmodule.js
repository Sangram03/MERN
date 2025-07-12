const fs = require('fs');


// fs.readFile('file.txt', 'utf-8' ,(err , data)=>{
//      console.log(err,data);
     
// })


// block the print
// const a = fs.readFileSync('file.txt')
// console.log(a.toString());


// fs.writeFile('text2.txt' , "This is a data" , () =>{
//     console.log("written to the file");
    
// })

 b=fs.writeFile('text2.txt' , "This is a data" )
 console.log(b);
 

console.log("Finishing reading file");

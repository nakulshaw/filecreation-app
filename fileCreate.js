const { log } = require("console");
const fs = require("fs");
const path = require("path");
const { stdin, stdout } = require("process");
const readline = require("readline");
// defining a filepath
let filePath="";
// creating readline interface
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
// heading of app
console.log("File Creation CLI app");

// determining result
const result = (options) => {
  if (options == 1) {
    rl.question("Enter the file name:", (fileName) => {
        filePath = path.join(__dirname, fileName);
        fs.writeFile(filePath, "", (err) => {
            if (err) {
              console.error(err);
            } 
            else {
              console.log("File created");
              rl.question("Enter file content:", (content) => {
                fs.writeFile(filePath, content, (err) => {
                  if (err) {
                    console.error(err);
                  } else {
                    console.log("content added\n");
                    showOptions();
                  }

                });
              });
            }
        
        });

      
    });
    
  } else if (options == 2) {
    rl.question("Enter file to read:",(fileName)=>{
        filePath=path.join(__dirname,fileName);
        fs.readFile(filePath, "utf-8",(err,data)=>{
            if(err){
                console.log(err);
                
            }
            else{
                console.log(data);
                showOptions();
            }
            
        });
    }) 
  } else if (options == 3) {
    console.log("Goodbye! Have a nice day");
  } else {
    console.log("Invalid input");
    showOptions();
  }
  
};
// showing options
const showOptions = () => {
  console.log("\nYour choices");
  console.log("1:Create a file");
  console.log("2:Read file content");
  console.log("3:Exit");

  rl.question("Enter your Choice:", result);
};

// starting point
showOptions();

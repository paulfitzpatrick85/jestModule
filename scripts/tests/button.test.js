/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

 beforeEach(() => {
     let fs = require("fs")        //fs = file system handling module used to open, read and write files
     let fileContents = fs.readFileSync("index.html", "utf-8"); //use fs to read contents of html and store variable fileContents, open using utf-8 character set set
     document.open();           
     document.write(fileContents);
     document.close();
 });
 
 describe("DOM tests", () => {
     test("Expects p content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
     test("h1 should exist", () => {
         expect(document.getElementsByTagName("h1").length).toBe(1); //if one h1 exists, length will be .toBe(1)
     });
 });
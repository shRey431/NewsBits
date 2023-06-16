const fs = require('fs')
const jsonData = JSON.parse(fs.readFileSync('./data/sports.json', 'utf-8'));
const Test = require("./models/testDataModel");

const test1 = () =>{
    jsonData.forEach(function(obj) { 
        Test.create({
            Title: obj.Title,
            Publisher:{
                href: obj.Publisher.href,
                title: obj.Publisher.href,
            },
            Published_Date: obj.Published_Date,
            Description: obj.Description,
            Link: obj.Link,
            Image: obj.Image,
        }); 
    });
}

module.exports = {test1};


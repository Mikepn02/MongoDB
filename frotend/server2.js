const cheerio = require('cheerio')
const stringfy = require('stringfy')
const fs = require('fs')
const html = fs.readFileSync('../crud/views/index.ejs','utf-8')
const dataObj = JSON.stringify(html);
console.log(dataObj)
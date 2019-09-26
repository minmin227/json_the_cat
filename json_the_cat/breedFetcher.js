const request = require('request');
const fs = require('fs');
let arg = process.argv.slice(2);

const breed = arg[0];
const URI = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


request(URI, function(error, response, body) {
  
  if (error) {
    console.log(`check the URI again`,error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("breed is not found");
    } else {
      console.log(data[0].description);
    }

  }
});

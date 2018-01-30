"use strict";

var request = require("request");
var fs = require("fs");

request("http://www.google.com", function(error, response, body) {
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body.substring(0, 50)); // Print the HTML for the Google homepage.
});

request("http://www.dmi.dk/uploads/tx_dmidatastore/webservice/k/d/_/n/g/femdgn_dk.png").pipe(fs.createWriteStream("temp/femdgn_dk.png"));

request.post({ url: "http://fdemo2.cronberg.dk/SimplePost_submit.cshtml", form: { key: "value" } }, function(err, response, body) {
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body.substring(0, 50)); // Print the HTML for the Google homepage.
});

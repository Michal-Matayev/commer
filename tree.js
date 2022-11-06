"use strict";
let myRequest = new Request("./data.json");

fetch(myRequest)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) { 
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            document.getElementById("id").innerHTML = data[i].id;
            document.getElementById("name").innerHTML = data[i].name;
            document.getElementById("url").innerHTML = data[i].url;

        }
            
    })




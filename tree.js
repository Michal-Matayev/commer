// "use strict";
// let myRequest = new Request("./data.json");

// fetch(myRequest)
//     .then(function (resp) {
//         return resp.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         for (let i = 0; i < data.length; i++) {
//             document.getElementById("id").innerHTML = data[i].id;
//             document.getElementById("name").innerHTML = data[i].name;
//             document.getElementById("url").innerHTML = data[i].url;


//         }
            
//     })




"use strict";
let myRequest = new Request("./data.json");

fetch(myRequest)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) { 
        console.log(data);

        data.filter(item => {
            iteratorObject(item);
        });

        function iteratorObject(obj) { 
            for (let prop in obj) { 
                if (typeof (obj[prop]) == "object") {
                    iteratorObject(obj[prop]);
                }
                else { 
                    console.log(prop.toUpperCase() + ":", obj[prop]);
                    if (prop == "id" ) { 
                        document.getElementById("id").innerHTML =  obj[prop];
                    }
                    if (prop == "name") {
                        document.getElementById("name").innerHTML =  obj[prop];
                    }
                    if (prop == "url") { 
                        document.getElementById("url").innerHTML =  obj[prop];
                    }

                }

            }

        }


        
            
    })




    // if (prop == "id" || prop == "name" || prop == "url") { 
    //     console.log(prop.toUpperCase() + ":", obj[prop]);
    //     document.getElementById("id").innerHTML =  obj[prop];
    //     document.getElementById("name").innerHTML =  obj[prop];
    //     document.getElementById("url").innerHTML =  obj[prop];
    // }

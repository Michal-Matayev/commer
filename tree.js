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
var mainContainer = document.getElementById(myRequest);

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
                    var div = document.createElement("div");
                    console.log(prop.toUpperCase() + ":", obj[prop]);
                    if (prop == "id" ) {
                        document.createElement("id").innerHTML =  obj[prop];
                    }
                    if (prop == "name") {
                        document.createElement("name").innerHTML =  obj[prop];
                    }
mainContainer.appendChild(div);

//                     if (prop == "url") { 
//                         // Create anchor element.
//                         a = document.createElement('a'); 
//                         // Create the text node for anchor element.
//                         var link = document.createTextNode(obj["name"]);
//                         // Append the text node to anchor element.
//                         a.appendChild(link); 
                  
//                         // Set the title.
//                          a.title = obj["name"]; 
//                         console.log( a.title)
//                         // Set the href property.
//                         a.href =  obj[prop]; 
//                         console.log( a.href)

//                         // Append the anchor element to the body.
//                         document.body.appendChild(a); 

//                         document.getElementById("url").innerHTML = `<a href=` + obj[prop] + `>` + obj["name"] + `</a>`;
//                     }

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

    
    
    
    
    
    // function appendData(data) {
    //     var mainContainer = document.getElementById("myData");
    //     for (var i = 0; i < data.length; i++) {
    //       var div = document.createElement("div");
    //       div.innerHTML = 'Name: ' + data[i].id + ' ' + data[i].name;
    //       mainContainer.appendChild(div);
    //     }
    //     }
    // })
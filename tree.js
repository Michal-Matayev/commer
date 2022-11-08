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
            var mainContainer = document.getElementById("myData");
            let saveName;
            for (let prop in obj) {
                var mybr = document.createElement('br');
                mainContainer.appendChild(mybr);
               
               
                if (typeof (obj[prop]) == "object") {
                    iteratorObject(obj[prop]);
                }
                else {
                    var div = document.createElement("div");
                    // console.log(prop.toUpperCase() + ":", obj[prop]);
                    if (prop == "id") {
                        div.innerHTML = 'Id: ' + obj[prop];
                        mainContainer.appendChild(div);
                    }
                    if (prop == "name") { 
                        div.innerHTML = 'Site Name:' + obj[prop];
                        saveName = obj[prop];
                        mainContainer.appendChild(div);
                    }
                    if (prop == "url") {
                        let text = 'Site Url:' + saveName;
                         div.innerHTML = "<a href="+ obj[prop] +">" + text + "</a>";
                         console.log(text +":" + obj[prop]);
                         mainContainer.appendChild(div);

                    } 
                }              
            }
        }
    })
         

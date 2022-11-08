"use strict";
let myRequest = new Request("./data.json");
var mainContainer = document.getElementById(myRequest);

fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    let level = 1; 
    var mainContainer = document.getElementById("myData");

    iteratorObject(mainContainer,data,level);
  });


function renderItem(parent,prop,level) {

  let saveName;
  const frames = window.frames;

    var div = document.createElement("div");
    
    div.setAttribute("class",`level${level}`)
    var subContainerId = document.createTextNode(`Id:${prop.id}`);
    div.appendChild(subContainerId);
    div.appendChild(document.createElement("br"));
   
   
    var subContainerName = document.createTextNode(`Site Name:${prop.name}`);
    div.appendChild(subContainerName);
    div.appendChild(document.createElement("br"));





    // var createA = document.createElement('a');
    // var createAText = document.createTextNode(theCounter);
    // createA.setAttribute('href', "http://google.com");
    // createA.appendChild(createAText);
    // getTheTableTag.appendChild(createA);

 
    var a = document.createElement('a');
    var createAText = document.createTextNode(`Site Url:${prop.name}`);
    a.setAttribute('href', `http://${prop.url}`);
    a.appendChild(createAText);
    div.appendChild(a);
    parent.appendChild(div)

    return div;


//     if (prop == "id") {
//     div.innerHTML = "Id: " + arrayObject[prop];
//     mainContainer.appendChild(div);
//   }
//   if (prop == "name") {
//     div.innerHTML = "Site Name:" + arrayObject[prop];
//     saveName = arrayObject[prop];
//     mainContainer.appendChild(div);
//   }
//   if (prop == "url") {
//     let text = "Site Url:" + saveName;
//     div.innerHTML =
//       "<a href=https://" + arrayObject[prop] + ">" + text + "</a>";
//     console.log(text + ":" + arrayObject[prop]);
//     mainContainer.appendChild(div);
//   }
}

function iteratorObject(mainContainer,arrayObject,level) {
  
  arrayObject.forEach((prop) => {
        var nextParent =renderItem(mainContainer,prop,level);

      if (prop.hasOwnProperty("subData")) {
        iteratorObject(nextParent,prop.subData,++level);
      }
      
  });
}

"use strict";

const fetchData = () => {
    fetch("./data.json")
        .then(resp => resp.json())
        .then(data => {
            const level = 1;
            const mainContainer = document.querySelector("#myData");
            iteratorObject(mainContainer, data, level);
        });
}


function renderItem(parent, prop, level) {
    

    const div = document.createElement("div");
    div.setAttribute("class", `level level${level}`)

    const subContainerId = document.createTextNode(`Id:${prop.id}`);
    div.appendChild(subContainerId);
    div.appendChild(document.createElement("br"));

    const subContainerName = document.createTextNode(`Site Name:${prop.name}`);
    div.appendChild(subContainerName);
    div.appendChild(document.createElement("br"));

    const a = document.createElement('a');
    const createAText = document.createTextNode(`Site Url:${prop.name}`);
    a.setAttribute('href', `http://${prop.url}`);
    a.appendChild(createAText);
    div.appendChild(a);
    parent.appendChild(div);

    return div;
}


function iteratorObject(mainContainer, arrayObject, level) {
    arrayObject.forEach((prop) => {

        const nextParent = renderItem(mainContainer, prop, level);  
        console.log(nextParent);
        if (prop.hasOwnProperty("subData")) {
            iteratorObject(nextParent, prop.subData, ++level);
            level--;
        }
               
    });
    
}

window.addEventListener('load', fetchData);




setInterval(() => {

    var date = new Date();
    var n = date.toDateString();
    var time = date.toLocaleTimeString();
    var om = n + ' ' + time;
    document.getElementById("timetxt").innerText = om;

}, 1000);

function getAndUpdate(){
    console.log("Updating List...");
    tit = document.getElementById('Title').value;
    desc = document.getElementById('desc').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
    
    let tableBody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        
        </tr>`; 
    });
    tablebody.innerHTML = str;
}
add = document.getElementById("subbtn");
add.addEventListener("click", getAndUpdate);
update();





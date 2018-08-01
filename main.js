function loadJSON(file){
  return new Promise((resolve,reject)=>{
return fetch(file).then(response=>{
  if(response.ok){
    resolve(response.json());
  }else{
    reject(new Error('error'));
  }
})
  })
}
var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
})


  var child2=document.querySelector("#child2");
  function career(car){
    var heading=document.createElement("h2");
    heading.textContent="Career Objevtive";
    child2.appendChild(heading);
    var hLine=document.createElement("hr");
    child2.appendChild(hLine);
      var p=document.createElement("p");
    p.textContent=car.info;
    child2.appendChild(p);


}//Education
function education(edu){
var heading=document.createElement("h2");
heading.textContent="Education Qualification";
child2.appendChild(heading);
var hLine=document.createElement("hr");
child2.appendChild(hLine);
var table=document.createElement("table");
child2.appendChild(table);
var tr="<tr><td>S.NO</td><td>degree</td><td> institute</td><td> Data</td></tr>"
table.innerHTML=tr;
table.border="1";
}

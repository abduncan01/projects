document.addEventListener('DOMContentLoaded', function() {
var task1 = [];
document.querySelector('#newTask').onsubmit = function (event){
event.preventDefault();
const list = document.createElement('list');
  

let title = document.querySelector('#title').value;
let priority = document.querySelector('#priority').value;
let status;// = document.querySelectorAll('name[status]').value;
 let inputs = document.querySelectorAll('[name=task-status]');
for (let i = 0; i< inputs.length;i++){
if (inputs[i].checked){
status = inputs[i].value;
}
let new_task_html = `<div class = "newTask"> <span> ${title} </span> <span>| ${priority} </span> <span> | ${status} </span> </div>
  
  
  <button class = "Completed"> Mark as Complete </button> <button class = "remove"> Remove </button>`;
let priority2 = ` <span> ${priority} </span>`;
let status2 = `<span> ${status} </span>`;
list.innerHTML = new_task_html
list.innerHTML = document.querySelector('#task').value;
task1.push(title);
document.querySelector('#task_list').append(list);
document.querySelector('#task-title').value = '';
return false;
}
document.addEventListener('click', function(event){
element = event.target;
if (element.className === 'remove'){
element.parentElement.remove();
task1.remove(element);
}
if (element.className === 'Completed' || element.className === 'completed'){
document.querySelector('#task-title').strike();
element.parentElement.querySelector('.newTask').style.textDecoration = "line-through";
element.status = "completed";
}
})
});

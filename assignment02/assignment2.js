document.addEventListener('DOMContentLoaded', function() {
var task1 = [];
document.querySelector('#newTask').onsubmit = function (event){
event.preventDefault();
const list = document.createElement('list');
  

let title = document.querySelector('#title').value;
let priority = document.querySelector('#priority').value;
let status = document.querySelectorAll('name[status]').value;
 let inputs = document.querySelectorAll('[name=status]');
for (let i = 0; i< inputs.length;i++){
if (inputs[i].checked){
status = inputs[i].value;
}
let filedTasks = `<div class = "newTask"> 
<span> ${title} </span>
<span>| ${priority} </span> 
<span> | ${status} </span> 
</div>
  
  
  <button class = "Completed"> Task Completed </button> <button class = "remove"> Remove Task </button>`;
let priority2 = `<span> ${priority} </span>`;
let status2 = `<span> ${status} </span>`;
list.innerHTML = filedTasks
list.innerHTML = document.querySelector('#task').value;
task1.push(title);
document.querySelector('#taskList').append(list);
document.querySelector('#title').value = '';
return false;
}
document.addEventListener('click', function(event){
element = event.target;
if (element.className === 'remove'){
element.parentElement.remove();
task1.remove(element);
}
if (element.className === 'Completed' || element.className === 'completed'){
document.querySelector('#title').strike();
element.parentElement.querySelector('.newTask').style.textDecoration = "line-through";
element.status = "completed";
}
})
});

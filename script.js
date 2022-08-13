let newTask = document.querySelector('.newTask');
let btnAdd = document.querySelector('.btn-add');
let fieldItems = document.querySelector('.fieldItems');
let titleItems = document.querySelector('.titleItems');


let tasks = [];
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task (descrip) {
	this.description = descrip;
	this.completed = false;
}

let updateLocal = function () {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

btnAdd.addEventListener('click', function() {
	tasks.push(new Task(newTask.value));

	if(newTask.value !== 0) {
		fieldWithItems();
        newTask.value = '';
    }

    updateLocal(); 


 });


let createElement = function(task, index) {
	return `
          <div class="task"> 
          	<div>
	          	<div class="btnTask-completed"></div>
	          	<div class="description">${task.description}</div>
          	</div>
          	<div class="btnTask-delete">delete</div>
          </div>

	`

}

let fieldWithItems = function() {
	fieldItems.innerHTML = '';
	if (tasks.length > 0) {
		tasks.map((item, index) => {
			fieldItems.innerHTML += createElement(item, index);
		})
	}
}

fieldWithItems();



let amountItems = function() {
	return `
		<div>${tasks.length} items</div>
	`
}

titleItems.insertAdjacentHTML('afterbegin', amountItems());

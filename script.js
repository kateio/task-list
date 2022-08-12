let newTask = document.querySelector('.newTask');
let btnAdd = document.querySelector('.btn-add');
let items = document.querySelector('.items');

btnAdd.addEventListener('click', function(){
	console.log('click');
	if(newTask.value !== 0) {
		createElement();
        newTask.value = '';
    } 

 });

let createElement = function(){

    let div = document.createElement('div');

	div.classList.add('task');
	items.append(div);
	console.log(div);

	let input = document.createElement('input');
	input.type = 'checkbox';
	input.value = newTask.value;
	input.classList.add('checkbox')
	div.append(input);

	let divText = document.createElement('div');
	divText.textContent = newTask.value;
	div.append(divText);
}



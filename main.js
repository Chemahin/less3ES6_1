'use strict';
/*
task1

Создать массив из n случайных чисел - диапазон [10-90]. Запишите последний элемент этого массива в переменную num1, а предпоследний - в переменную num2, в переменную num3 запишите количество элементов массива.
*/
var mainDiv = document.getElementById('main');
var arr = [];

for (var i = 0; i < getRandomArbitary(10, 90); i++) {
	arr[i]=getRandomArbitary(1, 99);
}
{
	let arrRev = arr.reverse();
	let [name1, name2] = arrRev;
	let num = arrRev.length;
	mainDiv.innerHTML = '<h2>Ваш массив: <span>  '+arr.reverse()+'</span></h2><h2>Последний элемент :<span>  '+name1+'</span></h2><h2>Предпоследний элемент :<span>  '+name2+'</span></h2><h2>Колличество элементов массива составляет :<span>  '+num+'</span></h2>';
}



function getRandomArbitary(min, max)
{
	return Math.round(Math.random() * (max - min) + min);
}

/*
task2

Дан объект {marka: 'BMW', model: 'X5', volume: 4.5 }. Запишите соответствующие значения в переменные marka, model и volume. Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {marka: 'XXX', model: 'XX', volume: 1.2 }
*/
{
	let mainDiv = document.getElementById('main2');
	let object = {
		marka: 'BMW',
		model: 'X5',
		volume: 4.5,
	};

	let { marka='XXX', model='XX', volume='1.2' } = object;
	mainDiv.innerHTML = '<h2>Автомобиль марки: <span>  '+marka+'</span></h2><h2>Модель :<span>  '+model+'</span></h2><h2>Объем двигателя :<span>  '+volume+' л.</span></h2>';
	
}

/*
task3

Запрашивать у пользователя строку. С помощью for-of подсчитать количество определенного символа в ней. (Символ так же запрашивать у пользователя.)
*/

var forma = document.getElementById('forma');
var allElem = document.getElementById('inp1');
var serchElem = document.getElementById('inp2');
var resElem = document.getElementById('res');
var count = 0;


forma.addEventListener('submit', function(e){
	e.preventDefault();
	var all = allElem.value.split('');
	var serhc = serchElem.value;
	// console.log(serhc);

	for (let symbol of all) {
		if(symbol==serhc) count+=1; 
	}
	resElem.innerText = count;
	resElem.style.display = 'inline-block';

});




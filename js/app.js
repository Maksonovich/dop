/* Задания на урок:

1) Изменить жанр фильма, поменять "комедия" на "драма"

2) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

3) Удалить все рекламные блоки со страницы (правая часть сайта)

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. 

Страница не должна перезагружаться. event.preventDefault()
Новый фильм должен добавляться в movieDB.movies.

7) Если название фильма больше, чем 15 символ - обрезать его и добавить три точки

8) При клике на мусорную корзину - элемент будет удаляться из списка и в movieDB.movies (сложно)

9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

10) Фильмы должны быть отсортированы по алфавиту 
*/

const movieDB = {
	movies: [
		'Логан',
		'Агент 007 Blood Money',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против',
	]
};


let { movies } = movieDB;
console.log('movies: ', movies);

const text = document.querySelector('.promo__genre')
text.textContent = "Драма"

const bg = document.querySelector('.promo__bg')
function changeBgImg(){
    bg.style.backgroundImage = "url('./img/bg.jpg')";
}
changeBgImg()


const advertising = document.querySelector('.promo__adv')
advertising.innerHTML = ""

const movieFilms = document.querySelector(".promo__interactive-list");

movieDB.movies.forEach(function (item, i) {
movieFilms.innerHTML = movieFilms.innerHTML + `
	 <li class="promo__interactive-item">${i + 1}. ${item}
		 <div class="delete"></div>
	 </li>`;
});


const btn = document.querySelector('button')
const inp = document.querySelector('.adding__input')

const films_list = document.querySelector('.promo__interactive-list')

btn.addEventListener('click',function(i) {
	films_list.innerHTML = films_list.innerHTML + `
		<li class="promo__interactive-item">${ + 7}.${inp.value}
			<div class="delete__films__list"></div>
		</li>
	`
	event.preventDefault()
})


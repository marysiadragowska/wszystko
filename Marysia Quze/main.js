var Quze = [
{question: 'Jak mam naimie',answer: 'Marysia'} ,
{question: 'Ile nug ma stonoga ?🐛',answer: '14'} ,
{question: 'Ile nug ma ośmiornica ?🐙',answer: '8'} ,
{question: 'Najcieplejszy miesiąc w Polsce ?🏝️',answer: 'Lipiec'} ,
{question: 'Ulubione danie Wlochów 🍕',answer: 'Pizza'} ,
{question: 'Jakie mam zwierze w domu 🐹 ?',answer: 'Chomik'} ,
{question: 'Ile mam lat ?',answer: '11'} ,
];

var punkty = 0;

for(var pytanie of Quze){
	console.log(pytanie);

console.log(pytanie);
	var wynik = prompt(pytanie.question);

	if(wynik == pytanie.answer){
		punkty++;
		alert("Dobrze");

	}
	else{
		alert ("Źle");
		punkty--;
	}
	alert ("Twoje punkty:" + punkty);
	}
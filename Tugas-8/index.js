var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

let i = 0;
bacaBuku = (time, books) => {
	readBooks(time, books[i++], (timeLeft) => {
		if(timeLeft > 0){
			bacaBuku(timeLeft, books)
		}
	})
}

bacaBuku(10000, books)
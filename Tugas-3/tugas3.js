//Soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";



console.log(kataPertama+' '+
            kataKedua.charAt(0).toUpperCase().concat(kataKedua.substring(1))+' '+
            kataKetiga+' '+
            kataKeempat.toUpperCase()); 

//Soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

kataPertama = parseInt(kataPertama);
kataKedua = parseInt(kataKedua);
kataKetiga = parseInt(kataKetiga);
kataKeempat = parseInt(kataKeempat);

console.log(kataPertama+kataKedua+kataKetiga+kataKeempat);

//Soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); // do your own! 
var kataKetiga = kalimat.substring(15,18); // do your own! 
var kataKeempat = kalimat.substring(19,24); // do your own! 
var kataKelima = kalimat.substring(25); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// Soal 4

var nilai;

nilai = 75;
if (nilai >= 80) {
    console.log('indeksnya A');
} else if(nilai >= 70) {
    console.log('indeksnya B');
} else if(nilai >= 60) {
    console.log('indeksnya C')
} else if(nilai >= 50) {
    console.log('indeksnya D')
} else {
    console.log('indeksnya E')
}

// Soal 5

var tanggal = 29;
var bulan = 2;
var tahun = 1996;

switch(bulan){
    case bulan = 1:
        bulan = 'Januari';
        break;
    case bulan = 2:
        bulan = 'Februari';
        break;
    case bulan = 3:
        bulan = 'Maret';
        break;
    case bulan = 4:
        bulan = 'April';
        break;
    case bulan = 5:
        bulan = 'Mei';
        break;
    case bulan = 6:
        bulan = 'Juni';
        break;
    case bulan = 7:
        bulan = 'Juli';
        break;
    case bulan = 8:
        bulan = 'Agustus';
        break;
    case bulan = 9:
        bulan = 'September';
        break;
    case bulan = 10:
        bulan = 'Oktober';
        break;
    case bulan = 11:
        bulan = 'November';
        break;
    case bulan = 12:
        bulan = 'Desember';
        break;
}

console.log(tanggal+' '+bulan+' '+tahun);
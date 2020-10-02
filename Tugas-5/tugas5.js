// Soal 1

function halo (){
    return 'Halo Sanbers!';
}

console.log(halo());

// Soal 2

function kalikan(num1, num2) {
    return num1*num2;
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

// Soal 3

function introduce(name, age, address, hobby) {
    return 'Nama saya '+name+' , umur saya '+age+' tahun, alamat saya di '+address+' , dan saya punya hobby yaitu '+hobby+'!';
}
 
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"

// Soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {}
objDaftarPeserta.name = arrayDaftarPeserta[0];
objDaftarPeserta.gender = arrayDaftarPeserta[1];
objDaftarPeserta.hobby = arrayDaftarPeserta[2];
objDaftarPeserta.birthYear = arrayDaftarPeserta[3];
console.log(objDaftarPeserta);

// Soal 5
var fruits = [
    {
        nama:"strawberry",
        warna:"merah",
        "ada bijinya":"tidak",
        harga:9000
    },
    {
        nama:"jeruk",
        warna:"oranye",
        "ada bijinya":"ada",
        harga:8000
    },
    {
        nama:"Semangka",
        warna:"Hijau & Merah",
        "ada bijinya":"ada",
        harga:10000
    },
    {
        nama:"Pisang",
        warna:"kuning",
        "ada bijinya":"tidak",
        harga:5000
    }
]
console.log(fruits[0]);

// Soal 6
var dataFilm = []
function inputDataFilm(vName, vDuration, vGenre, vYear){
    var objDataFilm = {};
    objDataFilm.name = vName;
    objDataFilm.duration = vDuration;
    objDataFilm.genre = vGenre;
    objDataFilm.year = vYear;
    dataFilm.push(objDataFilm);
    return dataFilm;
}

inputDataFilm("Impetigore", 120, "horror", 2019);
inputDataFilm("Gundala", 130, "Action", 2019);

console.log(dataFilm)
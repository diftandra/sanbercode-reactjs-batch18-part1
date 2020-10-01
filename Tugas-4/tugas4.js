// Soal 1

var i = 0;
console.log('LOOPING PERTAMA');
while (i < 20) {
    i++;
    i++;
    console.log(i+' - I love coding');
 
}
console.log('LOOPING KEDUA');
while (1 < i) {
    console.log(i+' - I will become a frontend developer');
    i--;
    i--;

}

// Soal 2 
var j;
for( j = 1; j <= 20; j++) {
    if(j%2 == 0) {
        console.log(j+' - Berkualitas');
    }else if((j%2 == 1) && (j%3 == 0)){
        console.log(j+' - I Love Coding');
    }else if(j%2 == 1){
        console.log(j+' - Santai');
    }
}

// Soal 3
var hashtag = '';
for(var k = 1; k <= 7; k++) {
        for(var l = 1; l <= k; l++)  {
            hashtag +='#';
        }
        console.log(hashtag);
        hashtag = '';
    }

// Soal 4
var kalimat="saya sangat senang belajar javascript"
kalimatArray = new Array(kalimat.substring(0,4),kalimat.substring(5,11),kalimat.substring(12,18),kalimat.substring(19,26),kalimat.substring(27));
console.log(kalimatArray);

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for(var i=0;i < daftarBuah.length; i++) {
    console.log(daftarBuah[i]);
}
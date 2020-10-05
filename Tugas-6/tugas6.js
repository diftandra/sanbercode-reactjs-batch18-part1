//Soal 1

const luasLingkaran = (radius) => {
   let phi = 3.14;
   return phi*radius*radius;
}

const kelilingLingkaran = (radius) => {
    let phi = 3.14;
   return 2*phi*radius;
}

console.log(luasLingkaran(7));
console.log(kelilingLingkaran(7));

// Soal 2

let kalimat = "";

const addKalimat = (word) => {
    return kalimat +=`${word} `
}

addKalimat('saya');
addKalimat('adalah');
addKalimat('seorang');
addKalimat('frontend');
addKalimat('developer');
console.log(kalimat);


// Soal 3

const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 

  // Soal 4

  const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

  const {firstName, lastName, destination, occupation,spell} = newObject
  console.log(firstName, lastName, destination, occupation);


  // Soal 5

    const west = ["Will", "Chris", "Sam", "Holly"]
    const east = ["Gill", "Brian", "Noel", "Maggie"]
    const combined = [...west, ...east]
    //Driver Code
    console.log(combined)
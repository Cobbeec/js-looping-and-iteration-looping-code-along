// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
function writeCards(names) {
    let greeting = [];
  for (let i = 0; i < names.length; i++) {
   greeting.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }

  return greeting;
}

function countDown(n) {
    while(n >=0){
        console.log(n)
        n-- 
    }
}
// exercise 1
let genre = 'horror';
let rating = 5;
let pillows = 1;

if (rating > 1 && pillows === 1 && genre === 'horror') {
    console.log('Your friend will watch it!')
} else if (rating > 1 && genre === 'horror' && pillows === 0) {
    console.log('Your friend will not watch it!')
} else if (rating <= 1 && genre === 'horror' && pillows === 1) {
    console.log('No point watching the movie!')
} else if (genre !== 'horror') {
    console.log('Your friend will watch anything!')
} else {
    console.log('We can hang out and talk!')
}

//exercise 2
function addTwoNumbers(num1,num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(2938,2))
// console.log("This is my 5-2 Progressive game tester")

// function diceRollPureFunction(){
// //need this function to repeat for multi-sided die
// }

// function myRoll(dieNumber){
// 	let randomNumber = Math.floor(Math.random() * dieNumber) +1;
// 	return randomNumber
// }
// console.log(myRoll(6));
// console.log(myRoll(8));
// console.log(myRoll(10));
// console.log(myRoll(12));
// console.log(myRoll(16));
// console.log(myRoll(20));
//_______^^_master random number generators^^^

let dieSideSix = {
	type: "Six-sided Die",
	sides:6,
}
// console.log(dieSideSix.sides)

let dieSideEight = {
	type: "Eight-sided Die",
	sides:8,
}
// console.log(dieSideEight.sides)

let dieSideTen = {
	type: "Ten-sided Die",
	sides:10,
}
// console.log(dieSideTen.sides)

let dieSideTwelve = {
	type: "Twelve-sided Die",
	sides:12,
}
// console.log(dieSideTwelve.sides)

let dieSideTwenty = {
	type: "Twenty-sided Die",
	sides:20,
}
// console.log(dieSideTwenty.sides)

// function myRoll(numberOfSides){
// 	let randomNumber = Math.floor(Math.random() * numberOfSides) +1;
// 	return randomNumber
// }
// console.log(myRoll(dieSideSix.sides));
// console.log(myRoll(dieSideEight.sides));
// console.log(myRoll(dieSideTen.sides));
// console.log(myRoll(dieSideTwelve.sides));
// console.log(myRoll(dieSideTwenty.sides));

// //_______^^^MASTER RANDOM NUMBER GENERATORS AT FIXED NUMBER OF SIDES^^^

// function runGame() { // master function
// 	let dieNumber1 = myRoll(dieSideSix.sides);
// 	let dieNumber2 = myRoll(dieSideEight.sides);
// 	let dieNumber3 = myRoll(dieSideTen.sides);
// 	let dieNumber4 = myRoll(dieSideTwelve.sides);
// 	let dieNumber5 = myRoll(dieSideTwenty.sides);
// }


// function determineDicePerValuesDivisibleBy2or5(){
// 	//function for each individual die...AKA "die roll pure function";
// 	//need this function to read value of the die
// 	//write loop to read value of die
// 	//determine value of die if divisible by 2 or 5
// 	//if condition loop determines value is divisible by 2 or 5 then die is pulled from the die pool
// }

// function myRoll(numberOfSides1){
// 	let dieNumber1 = Math.floor(Math.random() * numberOfSides1) +1;
// 	let dieNumber2 = Math.floor(Math.random() * numberOfSides1) +1;
// 	let valueTotal = dieNumber1 + dieNumber2;

// console.log(myRoll(dieSideSix.sides));
// console.log(valueTotal(dieNumber1 + dieNumber2));


function myRoll(numberOfSides){
	let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
	 return randomNumber1;

}
console.log(myRoll(dieSideSix.sides) + myRoll(dieSideEight.sides) + myRoll(dieSideTen.sides) + myRoll(dieSideTwelve.sides) + myRoll(dieSideTwenty.sides));

//_____write a loop to test for all possible outcomes and confirm values 5 - 56 can be rolled;
//write conditions for six sided & 8 sided dies to play the game.
//when figured out, add die accordingly.


// function pullDieIfValueIsDivisibleBy2or5(){
// 	//function to remove die from dice pool if value is divisible by 2 or 5
// 	//this die is no longer rolled for the remainder of the game
// }



// function determineDiceValueIsNotDivisibleBy2or5(){
// 	//need this function to read value of each die
// 	//write loop to read value of die
// 	//determine value of die is NOT divisible by 2 or 5
// 	//condition loop to sum value of die if value is not divisible by 2 or 5
// }

// function sumDieValueIf(){
// 	//need this function to read value of each die
// 	//write loop to read value of die
// 	//determine value of die if divisible by 2 or 5
// 	//condition loop to sum value of die if value is not divisible by 2 or 5
// 	//condition only occurs if remaining rolled dice value is not divisible by 2 or 5
// 	//sum of die value is calculated and recorded, dice are rerolled;

// function endCondition(){
// 	//player continue rolling until all dice values are multiples of 2 or 5
// }

// function multiplayerConditions
// 	//win condition is now score vs score between users. 
// 	//Lowest score wins the game



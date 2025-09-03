/* A black jack game has 13 cards and player has to get a 21 to win blackjack. If player's deck i.e. cards equal
to a number less than 21; they are considered alive and keep playing. However, if the player gets a number higher
than 21, then they "die" and the game ends.

The 13 cards are the general set where the Ace holds the value of 1 as well as 11, the jack which is an 11,
is considered to have a value 10. The queen with original value 12 is also considered to have a value of 10,
and lastly, the king who originally has a value of 13 is considered to have a value of 10 as well. */

//-------------------------------------------------------------------------------------------------------------------------

//Assigning initial values:

let cards = [] //array of cards which has nothing at the start as player hasn't started playing yet
let sum = 0
let hasBlackJack = false //creating boolean variable to check blackjack
let isAlive = false // checking if user is playing
let message = "" // asking user of his next move
let player = //player info via object
{
	name:"Lizzy" ,
	chips: 146
}

let messageEl = document.getElementById("message-el") //printing message on html part 1
let cardsEl = document.querySelector("#cards-el") //printing hand on html part 1
// in query selector; we have to specify whether element is id(#), class(.), etc
let sumEl = document.getElementById("sum-el") //printing sum on html part 1
let playerEl = document.querySelector("#player-el") //player name and chips earned  

playerEl.textContent = player.name + ": $" + player.chips

//---------------------------------------------------------------------------------------------------------------------------

//creating function for starting the game, playing the game, assigning a random card, and picking another card from the deck:

function startGame()
{
	//assigning cards when player decides to play
	let firstCard = random()
	let secondCard = random()

	cards.push(firstCard)
	cards.push(secondCard)
	
	cardsEl.textContent = ""
	sum = firstCard + secondCard
	isAlive = true //user is now alive as they want to start playing 

	play()
}

function random() //assigning random number to the card
{
	let cardVal = Math.floor(Math.random() * 13) + 1
	if (cardVal === 1) // in blackJack; ace equals 1 and 11 both
	{
		return 11
	}
	else if (cardVal > 10) // jack, queen, and king actually hold value 10 instead of 11, 12 or 13
	{
		return 10
	}
	else
	{
		return cardVal
	}
}

function play()
{
	if (sum === 21)
	{
		message = "wooho! you got blackJack"
		hasBlackJack = true //game over -> won
	}
	else if (sum < 21)
	{
		message = "Do you want to draw again?" //game can continue as blackjack is possible
	}
	else
	{
		message = "Ohhh... you're out!"
		isAlive = false //player dies as went over black jack value
	}

	messageEl.textContent = message //printing message on html part 2
	
	//printing hand on html part 2
	cardsEl.textContent = "Cards: " 
	for (let i = 0 ; i < cards.length ; i++)
	{
		cardsEl.textContent +=  cards[i] + " "
	}

	sumEl.textContent = "Sum: " + sum //printing sum on html part 2
}

function newCard() //if user wants to continue game at else if condition (sum < 21)
{
	//can pick a card ONLY IF game is still going and black jack hasn't occured
	if (isAlive === true && hasBlackJack === false)
	{
		let newCard = random()
		cards.push(newCard)

		sum += newCard
		play() // continuing game after updating the sum
	}
}
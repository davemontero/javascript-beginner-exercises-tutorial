function getRandomInt()
{
	var randomNumber = Math.random();
	return Math.ceil(randomNumber * 6);
}
console.log(getRandomInt());
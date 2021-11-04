/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
	var randomNumber = Math.random();
	return Math.ceil(randomNumber * 10);
}


console.log(getRandomInt());
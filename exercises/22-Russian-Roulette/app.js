var bulletPosition = Math.ceil((Math.random() * 6));

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    if (bulletPosition === spinnerPosition) return ("You're dead!");
    else return ("Keep playing!");
};

console.log(fireGun(spinChamber()));
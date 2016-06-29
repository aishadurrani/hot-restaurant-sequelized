// This holds our waiting list data, with a dummy customer and again can be an empty array


var waitingArray = [
	{
		customerName: "Saima",
		customerEmail: "saima@gmail.com",
		phoneNumber: "979-587-0887",
		customerID: "saimacool"
	}
];


// Note how we export the array. This makes it accessible to other files using require. 
module.exports = waitingArray;
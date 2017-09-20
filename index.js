// Main package function
function helloWorld(input) {
	console.log("helloWorldRequired");
    return "HelloWorld";
}

// Make the main function available to other packages that require us
module.exports = helloWorld;
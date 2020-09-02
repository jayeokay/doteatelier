//variables
var table = [["Product Name", "Price", "Quantity", "Change Quantity"]];

//DEFAULT Global Store
let checkout = {
    basket: [],
    num: 2
};

function addProduct() {
    //function
}

function deleteProduct() {
    //function
}

function clear() { //when they buy, clear all orders
    table = [["Product Name", "Price", "Quantity", "Change Quantity"]];
}

window.addEventListener('DOMContentLoaded', (event) => {
	if ((JSON.parse(localStorage.getItem("checkout"))) == null) {
		localStorage.setItem("checkout", JSON.stringify(checkout));
    } else if ((JSON.parse(localStorage.getItem("checkout"))) != null) {
        checkout = JSON.parse(localStorage.getItem("checkout"));
    }
    console.log(checkout);
    console.log('DOM fully loaded and parsed');
});
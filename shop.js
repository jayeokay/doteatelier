//variables
var table = [["Product Name", "Price", "Quantity", "Change Quantity"]];

//Global Store
var checkout = {
    basket: [],
    num: 2
};

function addToBag() {
    //function
    checkout.basket.push(1);
    if (typeof(Storage) !== "undefined") {
		localStorage.setItem("checkout", JSON.stringify(checkout));
	}
}

function filter() {
    var categories = ["all products", "bracelets", "rings", "necklaces"];
    var choosecat = document.getElementById("category").value;
    document.getElementById("product-category").innerHTML = choosecat.charAt(0).toUpperCase()+choosecat.slice(1);
    var i;
    if (choosecat == "all products") {
        for (i = 1; i < categories.length; i++) {
            var category = categories[i].slice(0, -1);
            document.getElementById(category).style.display = "initial";
        }
    } else {
        for (i = 1; i < categories.length; i++) {
            var category = categories[i].slice(0, -1);
            if (choosecat != categories[i]) {
                document.getElementById(category).style.display = "none";
            } else {
                document.getElementById(category).style.display = "initial";
            }
        }
    }
}

function filterAllProducts() {
    //function
}

function filterRings() {
    //function
}

function filterNecklaces() {
    //function
}

function filterPins() {
    //function
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
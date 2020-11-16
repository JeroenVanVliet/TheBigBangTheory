var mand = document.getElementById("myModal");
var productCount = 1;
var productPrice = 0;

const minButton = document.getElementsByClassName("min-btn")[0];
const plusButton = document.getElementsByClassName("plus-btn")[0];
const span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    mand.style.display = "none";
}
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == mand) {
        mand.style.display = "none";
    }
}

minButton.onclick = function() {
    if(productCount > 1) {
        productCount--;
        let price = (productCount * parseFloat(productPrice.substring(2).replace(",", ".")));

        mand.getElementsByClassName("qty")[0].innerHTML = productCount;
        mand.getElementsByClassName("modal-price")[0].innerHTML = "&euro; " + price.toFixed(2).toString().replace(".", ",");
    }
}

plusButton.onclick = function() {
    productCount++;
    let price = (productCount * parseFloat(productPrice.substring(2).replace(",", ".")));

    mand.getElementsByClassName("qty")[0].innerHTML = productCount;
    mand.getElementsByClassName("modal-price")[0].innerHTML = "&euro; " + price.toFixed(2).toString().replace(".", ",");
}

function bestelProduct(t) {
    productCount = 1;

    let productImage = t.children[0].children[0].src;
    let productName = t.children[1].innerHTML;
    productPrice = t.children[2].innerHTML;

    mand.getElementsByClassName("qty")[0].innerHTML = productCount;
    mand.getElementsByClassName("modal-image")[0].src = productImage;
    mand.getElementsByClassName("product-information")[0].innerHTML = productName;
    mand.getElementsByClassName("modal-price")[0].innerHTML = productPrice;

    mand.style.display = "block";
}
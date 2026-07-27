// -------------------------
// Banner Slider
// -------------------------

const banners = [
    "https://picsum.photos/1200/350?10",
    "https://picsum.photos/1200/350?20",
    "https://picsum.photos/1200/350?30",
    "https://picsum.photos/1200/350?40"
];

let currentBanner = 0;

const banner = document.getElementById("banner");

setInterval(() => {

    currentBanner++;

    if(currentBanner >= banners.length){
        currentBanner = 0;
    }

    banner.src = banners[currentBanner];

},3000);


// -------------------------
// Add To Cart
// -------------------------

let cart = [];

const buttons = document.querySelectorAll(".product button");

buttons.forEach((button)=>{

    button.addEventListener("click",()=>{

        const product =
        button.parentElement.querySelector("h3").innerText;

        cart.push(product);

        localStorage.setItem("cart",JSON.stringify(cart));

        button.innerHTML = "✓ Added";

        button.style.background = "green";

        setTimeout(()=>{

            button.innerHTML = "Add To Cart";

            button.style.background = "#fb641b";

        },1000);

        alert(product + " Added To Cart");

    });

});


// -------------------------
// Search Product
// -------------------------

const search = document.querySelector(".search input");

search.addEventListener("keyup",()=>{

    const value = search.value.toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach((item)=>{

        const name =
        item.querySelector("h3").innerText.toLowerCase();

        if(name.includes(value)){

            item.style.display="block";

        }

        else{

            item.style.display="none";

        }

    });

});


// -------------------------
// Show Cart Count
// -------------------------

window.onload=()=>{

    const data = JSON.parse(localStorage.getItem("cart"));

    if(data){

        cart=data;

    }

    console.log(cart);

};
// ============================
// LIKE BUTTON
// ============================

const likes = document.querySelectorAll(".like");

likes.forEach((like) => {

    like.addEventListener("click", () => {

        like.classList.toggle("fa-regular");
        like.classList.toggle("fa-solid");
        like.classList.toggle("active");

    });

});


// ============================
// DOUBLE CLICK LIKE
// ============================

const posts = document.querySelectorAll(".post-img");


posts.forEach((image) => {

    image.addEventListener("dblclick", () => {

        let like = image.parentElement.querySelector(".like");

        like.classList.remove("fa-regular");
        like.classList.add("fa-solid");
        like.classList.add("active");


        // Heart Animation

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.classList.add("big-heart");


        image.parentElement.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 1000);


    });

});



// ============================
// DARK MODE
// ============================

const darkMode = document.getElementById("darkMode");


darkMode.addEventListener("click", () => {


    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    }

    else {

        localStorage.setItem("theme", "light");

    }


});


// Remember Theme

if (localStorage.getItem("theme") == "dark") {

    document.body.classList.add("dark");

}



// ============================
// FOLLOW BUTTON
// ============================


const followButtons = document.querySelectorAll(".suggestion button");


followButtons.forEach((btn) => {


    btn.addEventListener("click", () => {


        if (btn.innerHTML == "Follow") {

            btn.innerHTML = "Following";

            btn.style.background = "#ddd";

            btn.style.color = "black";

        }

        else {

            btn.innerHTML = "Follow";

            btn.style.background = "#0095f6";

            btn.style.color = "white";

        }


    });


});



// ============================
// ADD COMMENT
// ============================


const inputs = document.querySelectorAll(".post input");


inputs.forEach((input) => {


    input.addEventListener("keypress", (e) => {


        if (e.key === "Enter" && input.value.trim() != "") {


            let comment = document.createElement("p");


            comment.innerHTML =
                `<b>You</b> ${input.value}`;


            input.parentElement.insertBefore(
                comment,
                input
            );


            input.value = "";


        }


    });


});



// ============================
// STORY CLICK EFFECT
// ============================


const stories = document.querySelectorAll(".story");


stories.forEach((story) => {


    story.addEventListener("click", () => {


        story.style.transform = "scale(1.15)";


        setTimeout(() => {

            story.style.transform = "scale(1)";

        }, 300);


    });


});



// ============================
// POST SCROLL ANIMATION
// ============================


const allPosts = document.querySelectorAll(".post");


const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }


    });


}, {


    threshold: 0.2


});



allPosts.forEach(post => {

    observer.observe(post);

});
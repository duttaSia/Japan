/* =========================================
   OSAKA  PAGE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       TRAVEL SPOTS
    ===================================== */

    const exploreButtons =
        document.querySelectorAll(".explore-btn");

    exploreButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const place =
                button.dataset.place;

            alert(
                "You selected " +
                place +
                ". Tokyo trip planning will open here."
            );

            // Later you can replace this with:
            // window.location.href =
            // "booking.html?place=" +
            // encodeURIComponent(place);

        });

    });


    /* =====================================
       ACTIVITIES
    ===================================== */

    const activityButtons =
        document.querySelectorAll(".activity-btn");

    activityButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const activity =
                button.dataset.activity;

            alert(
                "Activity selected: " +
                activity
            );

        });

    });


    /* =====================================
       HOTELS
    ===================================== */

    const hotelButtons =
        document.querySelectorAll(".hotel-btn");

    hotelButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const hotel =
                button.dataset.hotel;

            alert(
                "Hotel selected: " +
                hotel
            );

        });

    });


    /* =====================================
       HEADER SCROLL EFFECT
    ===================================== */

    const header =
        document.querySelector(".main-header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            header.style.background =
                "rgba(10,10,10,0.95)";

            header.style.position =
                "fixed";

        } else {

            header.style.background =
                "transparent";

            header.style.position =
                "absolute";
        }

    });


    /* =====================================
       IMAGE ERROR HANDLING
    ===================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            console.log(
                "Image not found: " +
                image.src
            );

        });

    });

});
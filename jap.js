/* =========================================================
   JAPAN TRAVEL WEBSITE - MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   DESTINATIONS
========================================================= */

const destinations = [

    {
        name: "Kyoto",
        category: "tradition",
        categoryName: "Ancient Tradition",
        description:
            "Discover temples, gardens, tea houses and the timeless beauty of traditional Japan.",
        image: "ljj.jpg"
    },

    {
        name: "Tokyo",
        category: "neon",
        categoryName: "Metropolis Neon",
        description:
            "Experience neon streets, modern architecture, world-class food and endless city energy.",
        image: "tto.jpg"
    },

    {
        name: "Hokkaido",
        category: "nature",
        categoryName: "Natural Alpine",
        description:
            "Explore snowy mountains, lavender fields, peaceful lakes and the wild beauty of northern Japan.",
        image: "oop.jpg"
    },

    {
        name: "Osaka",
        category: "neon",
        categoryName: "Metropolis Neon",
        description:
            "Enjoy Osaka's lively streets, famous food, shopping districts and vibrant nightlife.",
        image: "pou.jpg"
    },

    {
        name: "Nara",
        category: "tradition",
        categoryName: "Ancient Tradition",
        description:
            "Walk among ancient temples, peaceful parks and the famous friendly deer of Nara.",
        image: "oohk.jpg"
    },

       {
        name: "Hakone",
        category: "tradition",
        categoryName: "Ancient Tradition",
        description:
            "Walk among ancient temples, peaceful parks and the famous friendly deer of Nara.",
        image: "oog.jpg"
    }


];


/* =========================================================
   DESTINATION PAGE MAPPING
========================================================= */

const destinationPages = {

    Kyoto: "index2.html",

    Tokyo: "index3.html",

    Hokkaido: "index4.html",

    Osaka: "index5.html",

    Nara: "index6.html"

};


/* =========================================================
   DESTINATION GRID
========================================================= */

const destinationGrid =
    document.getElementById("destinationGrid");


function displayDestinations(category = "all") {

    if (!destinationGrid) {
        return;
    }

    destinationGrid.innerHTML = "";


    const filteredDestinations =
        category === "all"
            ? destinations
            : destinations.filter(
                destination =>
                    destination.category === category
            );


    filteredDestinations.forEach(
        destination => {

            const card =
                document.createElement("article");


            card.className =
                "destination-card";


            card.innerHTML = `

                <div class="destination-image">

                    <img
                        src="${destination.image}"
                        alt="${destination.name}"
                    >

                    <div class="destination-overlay">
                        <span>
                            Explore ${destination.name}
                        </span>
                    </div>

                </div>


                <div class="destination-card-content">

                    <span class="destination-category">
                        ${destination.categoryName}
                    </span>

                    <h3>
                        ${destination.name}
                    </h3>

                    <p>
                        ${destination.description}
                    </p>


                    <a
                        class="destination-arrow"
                        href="${destinationPages[destination.name]}?destination=${encodeURIComponent(destination.name)}&category=${encodeURIComponent(destination.categoryName)}&description=${encodeURIComponent(destination.description)}&image=${encodeURIComponent(destination.image)}"
                        aria-label="Plan a trip to ${destination.name}"
                    >

                        <i class="fa-solid fa-arrow-right"></i>

                    </a>

                </div>

            `;


            /* =================================================
               CARD CLICK
               ================================================= */

            card.addEventListener(
                "click",
                function(event) {

                    /*
                     * If the user clicks the arrow/link,
                     * allow the normal link to work.
                     */

                    if (
                        event.target.closest(
                            ".destination-arrow"
                        )
                    ) {
                        return;
                    }


                    const page =
                        destinationPages[
                            destination.name
                        ];


                    if (!page) {
                        console.error(
                            "No page found for:",
                            destination.name
                        );

                        return;
                    }


                    const bookingURL =
                        `${page}?destination=${encodeURIComponent(destination.name)}&category=${encodeURIComponent(destination.categoryName)}&description=${encodeURIComponent(destination.description)}&image=${encodeURIComponent(destination.image)}`;


                    window.location.href =
                        bookingURL;

                }
            );


            destinationGrid.appendChild(card);

        }
    );

}


/* =========================================================
   LOAD DESTINATIONS
========================================================= */

if (destinationGrid) {

    displayDestinations("all");

}


/* =========================================================
   FILTER BUTTONS
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function() {

                /* Remove active class */

                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                /* Add active class */

                this.classList.add(
                    "active"
                );


                /* Get category */

                const category =
                    this.dataset.category;


                /* Display destinations */

                displayDestinations(
                    category
                );

            }
        );

    }
);


/* =========================================================
   HERO SLIDER
========================================================= */

const slides =
    document.querySelectorAll(
        ".hero-slider .slide"
    );


const indicators =
    document.querySelectorAll(
        ".indicator"
    );


const nextSlide =
    document.getElementById(
        "nextSlide"
    );


const prevSlide =
    document.getElementById(
        "prevSlide"
    );


let currentSlide = 0;


/* =========================================================
   SHOW SLIDE
========================================================= */

function showSlide(index) {

    if (!slides.length) {
        return;
    }


    /* Calculate correct slide */

    currentSlide =
        (index + slides.length)
        % slides.length;


    /* Remove active */

    slides.forEach(
        slide => {

            slide.classList.remove(
                "active"
            );

        }
    );


    indicators.forEach(
        indicator => {

            indicator.classList.remove(
                "active"
            );

        }
    );


    /* Add active */

    slides[currentSlide]
        .classList.add(
            "active"
        );


    if (indicators[currentSlide]) {

        indicators[currentSlide]
            .classList.add(
                "active"
            );

    }


    /* =====================================================
       VIDEO SLIDE
    ===================================================== */

    slides.forEach(
        slide => {

            const video =
                slide.querySelector(
                    ".hero-video"
                );


            if (video) {

                if (
                    slide ===
                    slides[currentSlide]
                ) {

                    video.currentTime = 0;

                    video.play().catch(
                        () => {}
                    );

                } else {

                    video.pause();

                }

            }

        }
    );

}


/* =========================================================
   NEXT BUTTON
========================================================= */

if (nextSlide) {

    nextSlide.addEventListener(
        "click",
        function() {

            showSlide(
                currentSlide + 1
            );

        }
    );

}


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (prevSlide) {

    prevSlide.addEventListener(
        "click",
        function() {

            showSlide(
                currentSlide - 1
            );

        }
    );

}


/* =========================================================
   SLIDE INDICATORS
========================================================= */

indicators.forEach(
    indicator => {

        indicator.addEventListener(
            "click",
            function() {

                const slideNumber =
                    Number(
                        this.dataset.slide
                    );


                showSlide(
                    slideNumber
                );

            }
        );

    }
);


/* =========================================================
   AUTOMATIC SLIDER
========================================================= */

if (slides.length > 1) {

    setInterval(
        function() {

            showSlide(
                currentSlide + 1
            );

        },
        7000
    );

}


/* =========================================================
   VIDEO MODAL
========================================================= */

const videoModal =
    document.getElementById(
        "videoModal"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


const modalVideoPlayer =
    document.getElementById(
        "modalVideoPlayer"
    );


/* =========================================================
   CLOSE VIDEO MODAL
========================================================= */

function closeVideoModal() {

    if (!videoModal) {
        return;
    }


    videoModal.classList.add(
        "hidden"
    );


    if (modalVideoPlayer) {

        modalVideoPlayer.pause();

        modalVideoPlayer.currentTime =
            0;

    }

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeVideoModal
    );

}


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

if (videoModal) {

    videoModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                videoModal
            ) {

                closeVideoModal();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeVideoModal();

        }

    }
);


/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


const emailInput =
    document.getElementById(
        "emailInput"
    );


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";


            if (!email) {

                alert(
                    "Please enter your email address."
                );

                return;

            }


            alert(
                "Arigatou! You have subscribed."
            );


            newsletterForm.reset();

        }
    );

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(
        ".main-header"
    );


if (header) {

    window.addEventListener(
        "scroll",
        function() {

            if (
                window.scrollY > 80
            ) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }
    );

}


/* =========================================================
   INITIAL SLIDE
========================================================= */

showSlide(0);
/* ==================================================
   HELLO TOKYO — BOOKING PAGE JAVASCRIPT
================================================== */


/* ==================================================
   READ DESTINATION INFORMATION
================================================== */

const params =
    new URLSearchParams(
        window.location.search
    );


const destination =
    params.get("destination")
    || "Japan";


const category =
    params.get("category")
    || "EXPLORE JAPAN";


const description =
    params.get("description")
    || "Plan your unforgettable journey through Japan.";


const image =
    params.get("image")
    || "ih.jpg";



/* ==================================================
   DISPLAY DESTINATION
================================================== */

const destinationName =
    document.getElementById(
        "destinationName"
    );


const destinationCategory =
    document.getElementById(
        "destinationCategory"
    );


const destinationDescription =
    document.getElementById(
        "destinationDescription"
    );


const destinationImage =
    document.getElementById(
        "destinationImage"
    );


destinationName.textContent =
    destination;


destinationCategory.textContent =
    category;


destinationDescription.textContent =
    description;


destinationImage.src =
    image;


destinationImage.alt =
    destination + ", Japan";


/* ==================================================
   COUNTRY + PHONE
================================================== */

const country =
    document.getElementById(
        "country"
    );


const phone =
    document.getElementById(
        "phone"
    );


/*
    Allow only numbers,
    spaces, hyphens and brackets.
*/

phone.addEventListener(
    "input",
    () => {

        phone.value =
            phone.value.replace(
                /[^0-9\s\-()]/g,
                ""
            );

    }
);


/* ==================================================
   BOOKING FORM
================================================== */

const bookingForm =
    document.getElementById(
        "bookingForm"
    );


const successMessage =
    document.getElementById(
        "successMessage"
    );


const successDestination =
    document.getElementById(
        "successDestination"
    );


bookingForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        /* ===============================
           FORM VALUES
        ================================ */

        const fullName =
            document.getElementById(
                "fullName"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const phoneNumber =
            phone.value.trim();


        const startDate =
            document.getElementById(
                "startDate"
            ).value;


        const endDate =
            document.getElementById(
                "endDate"
            ).value;


        const travellers =
            document.getElementById(
                "travellers"
            ).value;


        const tripType =
            document.getElementById(
                "tripType"
            ).value;


        /* ===============================
           CHECK PHONE
        ================================ */

        const cleanPhone =
            phoneNumber.replace(
                /\D/g,
                ""
            );


        if (cleanPhone.length < 7) {

            alert(
                "Please enter a valid phone number."
            );

            phone.focus();

            return;

        }


        /* ===============================
           CHECK DATES
        ================================ */

        if (
            startDate &&
            endDate &&
            endDate < startDate
        ) {

            alert(
                "Departure date cannot be before the arrival date."
            );

            return;

        }


        /* ===============================
           GET COUNTRY
        ================================ */

        const countryData =
            country.value.split("|");


        const countryName =
            countryData[0];


        const countryCode =
            countryData[1];


        /* ===============================
           BOOKING INFORMATION
        ================================ */

        const bookingData = {

            destination:
                destination,

            category:
                category,

            name:
                fullName,

            email:
                email,

            country:
                countryName,

            countryCode:
                countryCode,

            phone:
                phoneNumber,

            arrival:
                startDate,

            departure:
                endDate,

            travellers:
                travellers,

            tripType:
                tripType

        };


        /*
         * This is where a real backend/API
         * can later be connected.
         *
         * For now, save the booking request
         * in the browser.
         */

        localStorage.setItem(
            "helloTokyoBooking",
            JSON.stringify(
                bookingData
            )
        );


        /* ===============================
           SHOW SUCCESS
        ================================ */

        successDestination.textContent =
            destination;


        successMessage.classList.add(
            "show"
        );


        /* Hide form after successful request */

        bookingForm.style.display =
            "none";


        /* Scroll to confirmation */

        setTimeout(() => {

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);


    }
);


/* ==================================================
   DATE RESTRICTIONS
================================================== */

const startDate =
    document.getElementById(
        "startDate"
    );


const endDate =
    document.getElementById(
        "endDate"
    );


/*
 * Prevent selecting dates in the past.
 */

const today =
    new Date()
        .toISOString()
        .split("T")[0];


startDate.min =
    today;


endDate.min =
    today;


/* ==================================================
   ARRIVAL DATE CHANGES
================================================== */

startDate.addEventListener(
    "change",
    () => {

        /*
         * Departure cannot be before arrival.
         */

        endDate.min =
            startDate.value;


        if (
            endDate.value &&
            endDate.value < startDate.value
        ) {

            endDate.value =
                "";

        }

    }
);


/* ==================================================
   COMPANY LOGO INTERACTION
================================================== */

const companyLogo =
    document.querySelector(
        ".company-logo"
    );


companyLogo.addEventListener(
    "click",
    () => {

        /*
         * Return to the main website.
         */

        window.location.href =
            "index.html";

    }
);
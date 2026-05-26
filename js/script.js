const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const destination =
            document.getElementById("destination").value;

        const date =
            document.getElementById("date").value;

        const message =
            document.getElementById("message");

        if(
            name === "" ||
            email === "" ||
            destination === "" ||
            date === ""
        ){

            message.style.color = "red";

            message.innerHTML =
                "Please fill all fields";

            return;
        }

        message.style.color = "green";

        message.innerHTML =
            "Booking Confirmed Successfully!";

        bookingForm.reset();

    });

}
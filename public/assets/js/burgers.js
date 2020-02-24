$(function () {
    $(".devoured-state").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("Changed devoured state to", newDevour);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");

                location.reload();
            }
        );
    });
});
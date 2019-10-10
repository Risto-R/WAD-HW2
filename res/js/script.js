$(function () {
    var user = new User("John", "Doe", 11 / 10 / 1990, "Software Engineering", 2.75);
    var courses = [
        new Course("Agile software development", 1, 82),
        new Course("System modeling", 1, 85),
        new Course("Object-oriented programming", 2, 99),
        new Course("Estonian language Level A2", 2, 65)
    ];

    $("#courses-button").click(function () {
        $("#profile-container").removeClass("active");
        $("#profile-button").removeClass("active");
        $("#courses-container").addClass("active");
        $("#courses-button").addClass("active");
    });

    $("#profile-button").click(function () {
        $("#courses-container").removeClass("active");
        $("#courses-button").removeClass("active");
        $("#profile-container").addClass("active");
        $("#profile-button").addClass("active");
    })




});

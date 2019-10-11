$(function () {
    var user = new User("Joe", "Mama", 10/10/1999, "Faculty of Science and Technology", 3.5);
    var courses = [
        new Course("Web Application Development", 3, 100),
        new Course("Introduction to Data Science", 3, 91),
        new Course("Software Engineering", 3, 87),
        new Course("Algorithms and data structures", 3, 85)
    ];

    init();

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
    });

    $("#add-course-button").click(function () {
        $("#add-course").toggle();
    });

    $("#save-course").click(function () {
        //Get the values from the fields
        let title = ($("#title").val());
        let semester = ($("#semester").val());
        let grade = ($("#grade").val());

        //Add the new course
        courses.push(new Course(title,semester,grade));

        //Add that course to the table
        $("#courses tr:last").after("<tr>"
            +("<td>"+($("#courses tr").length+1)+"</td>")
            +("<td>"+courses[courses.length-1].title+"</td>")
            +("<td>"+courses[courses.length-1].semester+"</td>")
            +("<td>"+courses[courses.length-1].grade+"</td>")
            +"</tr>")

        //Resetting the form and hiding it
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");
        $("#add-course").toggle();
    });

    $("#cancel-course").click(function () {
        //Resetting the form and hiding it
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");
        $("#add-course").toggle();
    });

    function init() {
        // Add user info to html
        $("#name").text(user.firstname+" "+user.lastname);
        $("#birthday").text(user.birthday);
        $("#faculty").text(user.faculty);
        $("#gpa strong").text(user.gpa);

        // Add rows to table
        let rows = ($("#courses tr").length);
        for (let i = 0; i < courses.length; i++) {
            let index = "<td>"+(rows+i)+"</td>";
            let title = "<td>"+courses[i].title+"</td>";
            let semster= "<td>"+courses[i].semester+"</td>";
            let grade = "<td>"+courses[i].grade+"</td>";
            $("#courses tr:last").after("<tr>"+index+title+semster+grade+"</tr>")
        }
    }
});

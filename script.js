$(document).ready(function() {
    var jobTitles = ["Web Developer...", "Web Designer...", "Freelancer..."];
    var index = 0;
    var currentTitle = "";
    var isDeleting = false;
    var speed = 100; // Typing speed in milliseconds

    function type() {
        var title = jobTitles[index % jobTitles.length];
        if (isDeleting) {
            currentTitle = title.substring(0, currentTitle.length - 1);
        } else {
            currentTitle = title.substring(0, currentTitle.length + 1);
        }
        $('#dynamic-title').text("Hi, I'm Ihsan Ullah, " + currentTitle);

        var typeSpeed = speed;
        if (isDeleting) {
            typeSpeed /= 2; // Faster delete speed
        }

        if (!isDeleting && currentTitle === title) {
            isDeleting = true;
            typeSpeed = 500; // Pause before starting to delete
        } else if (isDeleting && currentTitle === '') {
            isDeleting = false;
            index++;
        }

        setTimeout(function() {
            type();
        }, typeSpeed);
    }

    type();
});

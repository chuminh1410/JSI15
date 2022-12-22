// Task 3



$("#signupForm").submit(function (event) {
    event.preventDefault();
    $("#signupForm2").show("slow");
    $("#signupForm").hide("fast");
    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();

    const person = new Person(firstname, lastname)
    person.greet()

});

class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname
    }

    greet() {
        console.log(`He, I'm ${this.firstname} ${this.lastname}`)
    }
}
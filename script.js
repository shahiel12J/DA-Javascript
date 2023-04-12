function submit() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let occu = document.getElementById("occupation").value;
    let country = document.getElementById("country").value;
    console.log("First Name" + ": " + fname,
                '\n',"Last Name" + ": " + lname,
                '\n',"Email" + ": " + email,
                '\n',"Occupation" + ": " + occu,
                '\n',"Country" + ": " + country)
}


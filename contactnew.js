function sendmail(){

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    console.log(params);
    emailjs.send("service_nkvpb7t","template_adhlllo",params).then(alert('Your form has been submitted. Thank you for contacting us.'));
    


}
function Valid(event){
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let mess = document.getElementById("message").value;

    if (name == "" || email == "" || phone == "" || mess == ""){
        alert("Please fill all the fields");
        return false;
    }
    else if(name.length < 3){
        alert("Name must be at least 3 characters long");
        return false;
    }

    else if(!email.includes(".com")){
        alert("Please enter a valid email address");
        return false;
    }
    else if(phone.length < 10){
        alert("Phone number must be at least 10 digits long");
        return false;
    }
    else if(mess.length < 10){
        alert("Message must be at least 10 characters long");
        return false;
    }
    
    alert("Message sent successfully,Thank you for contacting us!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    return true;
}

let btn = document.getElementById("Join")

btn.addEventListener("click",()=>{
    window.location.href = "mailto:michoo.m.louis@example.com"
})



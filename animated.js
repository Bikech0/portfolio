
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Computer Scientist";
    }, 0);
    setTimeout(() => {
        text.textContent = "Software Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Engineering Student";
    }, 8000);
    setTimeout(() => {
        text.textContent = "AI Enthusiast"
    }, 12000);
}

textLoad();
setInterval(textLoad, 16000);


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


var side_menu = document.getElementById("side-menu");

function open_menu(){
    side_menu.style.right = "0";
}

function close_menu(){
    side_menu.style.right = "-200px";
}



const form = document.forms['contact-form'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
e.preventDefault()
req = {
    "Name": document.getElementById("name").value,
    "Email": document.getElementById("email").value,
    "Message": document.getElementById("message").value
}
fetch("/contact", { method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(req)})
    .then(response => {
        msg.innerHTML = "Message send successfully";
        setTimeout(()=>{
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
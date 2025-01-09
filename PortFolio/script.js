function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}




// for Typewriter effect

const texts = [
    "SOFTWARE DEVELOPER",
    "DATA SCIENTIST",
    "DEVOPS ENGINEER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;




var tablink = document.getElementsByClassName('tab-link');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(event, tabname) {
    var tablink = document.getElementsByClassName('tab-link');
    var tabcontents = document.getElementsByClassName('tab-contents');

    for (tablinks of tablink) {
        tablinks.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 15,
});




function filterSkills(category) {
    const bars = document.querySelectorAll('.bar');
    const buttons = document.querySelectorAll('.btn-val');

    buttons.forEach((btn) => btn.classList.remove('active'));
    document.querySelector(`.btn-val[onclick="filterSkills('${category}')"]`).classList.add('active');

    bars.forEach((bar) => {
        if (category === 'all' || bar.classList.contains(category)) {
            bar.classList.remove('hidden');
        } else {
            bar.classList.add('hidden');
        }
    });
}



document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav .links a');
    const currentLocation = location.hash || "#header"; // Default to Home if no hash in URL

    links.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



const scriptURL = 'https://script.google.com/macros/s/AKfycby_14sdeDCHkI2m4F1I3RRJ3gjvDBz9oQPkj9fpjGtCqdjLZzZJ5ZyrZfAv_Pun7k-O/exec'
  const form = document.forms['submit-to-google-sheet']
  const status = document.getElementById("status")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        status.innerHTML = "Message Sent Successfully"
        setTimeout(function() {
            status.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
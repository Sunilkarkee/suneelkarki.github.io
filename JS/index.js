
//for animation name and skills 

document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed('#element', {
      strings: ['UI/UX.', 'Web Developer.', 'Python Developer.', 'Java Developer.'],
      typeSpeed: 50,
      loop: true
  });
});


//for openingt tablinks and contents

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu =document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right ="0";
}
function closemenu(){
  sidemenu.style.right="-200px"
}

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

//connectinon to contact form 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx6C-qt17FeaHk7qooUBQrcEKTCmgVYhwIX7PrHJU-Bo_Th-VOo8xkamXHW158YrRtP/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="Submitted Sucessfully"
        setTimeout(function(){
          msg.innerHTML=""
        },3000)
        form.reset();
      })
      .catch(error =>{
      const msgerror = document.getElementById('msg');
      msgerror.textContent = 'Error: Failed to Submit' + error.message;
      setTimeout(function() {
        msgerror.textContent = '';
      }, 3000);
        form.reset()
      });
  });
  

  //for phone dropdown 
  
  const input = document.querySelector("#Phonenumber");
  window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  });

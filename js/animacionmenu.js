let menu = document.getElementById("contenedormenu");

function myFunction(x) {
  menu.classList.toggle("change-contenedormenu");
  x.classList.toggle("change");
}

let noscroll = document.getElementById('contenedormenu');
noscroll.addEventListener('click', ()=>{

   document.body.classList.toggle('noscroll'); 
});
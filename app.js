 bodyTag = document.getElementsById('main');
 bodyTag.addEventListener(onclick, closeSlideMenu);


function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginRight = '250px'; 
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginRight = '0'; 
}


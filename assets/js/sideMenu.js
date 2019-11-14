var sideMenuContainer = document.getElementsByClassName('sideMenuContainer');
var sideMenuOpenBUtton = document.getElementsByClassName('sideMenuOpenBUtton');
var sideMenuBox = document.getElementsByClassName('sideMenuBox');

sideMenuOpenBUtton[0].addEventListener('click',()=>{
  sideMenuBox[0].style.left = '0';
});

sideMenuBox[0].addEventListener('mouseleave',()=>{
  sideMenuBox[0].style.left = '-20vw';
});

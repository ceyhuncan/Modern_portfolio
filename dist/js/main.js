// Select the items from the DOM

//Query Selector. Select the first elelement of a class
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menuBranding=document.querySelector('.menu-branding');
const menuNav=document.querySelector('.menu-nav');
//Query selector All. Selects all the items and put them in a node list (an array)
const navItems = document.querySelectorAll('.nav-item');

//Set the initial State of the Menu (true: Open, false:Close)
let showMenu= false;

//Event listener for the menu button. If button click execute toggleMenu function
menuBtn.addEventListener('click', toggleMenu);

//Check if the menu is open and add show or close classes:
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item =>item.classList.add('show'));
        //seting the menu state after click
        showMenu=true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item =>item.classList.remove('show'));
        //setting menu state again
        showMenu=false;


    }

}


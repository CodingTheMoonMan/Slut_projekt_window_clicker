
const backgroundlayer1 = new Image();
backgroundlayer1.src = 'Background.png';

const main_menu = document.getElementById("main_menu");
var isMainMenuOpen = false;
var isUpgradeMenuOpen = false;

const main_button_color = document.getElementById("main_menu_button").style.backgroundColor;

let x = 0;
let x2 = 5846 - 442;

function randomizeIntRange(min, max){
    return Math.random() * (max - min) + min;
}

// ------------------------------------------------------------------------------- //
const windowCounter = document.getElementById("window_counter");
const window_icon = document.getElementById("window_button");
const upgrades_menu = document.getElementById("upgrades_tab");
var windows_collected = 0;

// Counter for the total windows collected
function add_windows(){
    random_angle = randomizeIntRange(-45,45);
    windows_collected += 1;
    window_icon.style.transform = "rotate(" + random_angle.toString() + "deg" + ")";
    windowCounter.innerHTML = windows_collected;
    setTimeout(() => {
      window_icon.style.transform = "rotate(0deg)";
    }, 500)
};


function open_main_menu(){
    isMainMenuOpen = !isMainMenuOpen;

    if (isMainMenuOpen){
        main_menu.style.display = "block";
        document.getElementById("main_menu_button").style.backgroundColor = "#F4F1E9"
        document.getElementById("menu_text").style.color = "#586ADB"
    }
    else{
        main_menu.style.display = "none";
        document.getElementById("main_menu_button").style.backgroundColor = main_button_color
        document.getElementById("menu_text").style.color = "#16234C"
    }
}

var current_margin = 0;

function open_uppgrade_menu(){

    isUpgradeMenuOpen = !isUpgradeMenuOpen


    if (isUpgradeMenuOpen){
        upgrades_menu.style.transform = "translateX(-90%) translateY(-50%)"
        upgrades_menu.style.height = "90%"
        document.getElementById("uppgrade_scrollable_menu").style.display = "block";       
        document.getElementById("open_uppgrade_button").style.transform = "translateY(-50%) rotate(180deg)"
    }
    else{
        upgrades_menu.style.transform = "translateX(0%) translateY(-50%)"
        upgrades_menu.style.height = "15rem"
        document.getElementById("uppgrade_scrollable_menu").style.display = "none";   
        document.getElementById("open_uppgrade_button").style.transform = "rotate(0deg) translateY(-50%)"
    }
}

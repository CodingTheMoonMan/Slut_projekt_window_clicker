
const backgroundlayer1 = new Image();
backgroundlayer1.src = 'Background.png';

const main_menu = document.getElementById("main_menu");
var isMainMenuOpen = false;
var isUpgradeMenuOpen = false;

const main_button_color = document.getElementById("main_menu_button").style.backgroundColor;

const DELAY = 1000;

let x = 0;
let x2 = 5846 - 442;
let window_add_amount = 1

function randomizeIntRange(min, max){
    return Math.random() * (max - min) + min;
}

// ------------------------------------------------------------------------------- //
const window_icon = document.getElementById("window_button");
const upgrades_menu = document.getElementById("upgrades_tab");
var windows_collected = 0;

const canvas = document.getElementById("particlesCanvas");
canvas.style.zIndex = "5";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function window_counter_update(amount){
    document.getElementById("window_counter").innerHTML = Math.trunc(amount);
}

// Counter for the total windows collected
function add_windows(){
    random_angle = randomizeIntRange(-45,45);
    windows_collected += window_add_amount;
    window_counter_update(windows_collected);
    
};

function open_main_menu(){
    isMainMenuOpen = !isMainMenuOpen;

    if (isMainMenuOpen){
        main_menu.style.display = "block";
        document.getElementById("main_menu_button").style.backgroundColor = "#F4F1E9";
        document.getElementById("background_effect").style.display = "block";
    }
    else{
        main_menu.style.display = "none";
        document.getElementById("main_menu_button").style.backgroundColor = main_button_color;
        document.getElementById("background_effect").style.display = "none";
    }
}

var current_margin = 0;

function open_uppgrade_menu(){

    isUpgradeMenuOpen = !isUpgradeMenuOpen;


    if (isUpgradeMenuOpen){
        upgrades_menu.style.transform = "translateX(-90%) translateY(-50%)";
        upgrades_menu.style.height = "90%";
        document.getElementById("uppgrade_scrollable_menu").style.display = "block";       
        document.getElementById("open_uppgrade_button").style.transform = "translateY(-50%) rotate(180deg)";
    }
    else{
        upgrades_menu.style.transform = "translateX(0%) translateY(-50%)";
        upgrades_menu.style.height = "15rem";
        document.getElementById("uppgrade_scrollable_menu").style.display = "none";   
        document.getElementById("open_uppgrade_button").style.transform = "rotate(0deg) translateY(-50%)";
    }
}

function uppgrade_mouse_click(){
    mouse_price = document.getElementById("mouse_upgrade").innerText.split("|")[1];
    if (windows_collected >= parseInt(mouse_price)){
        window_add_amount = window_add_amount * 1.4
        windows_collected -= parseInt(mouse_price)
        window_counter_update(windows_collected)
        mouse_price = parseInt(mouse_price * 1.5)
        document.getElementById("mouse_upgrade").innerText = ("1.4x Mouse Click | " + String(mouse_price) + " | windows");
    }
}

function hover_on_sound(soundObj){
    var sound = document.getElementById(soundObj);
    sound.play();
}

function auto_click_upgrade(obj, text){

}

function spawnParticle(){
    const canvas = document.getElementById("particlesCanvas");
    const windowButton = document.getElementById("window_button");
    const ctx = canvas.getContext("2d");

    ctx.rect(windowButton.transform, 200, 50,50);
    ctx.fillStyle = "red";
    ctx.fill();
}

// document.addEventListener("mousedown", function(event){
//     if(event.button = 1){
        
//     }
// })



spawnParticle()


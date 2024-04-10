const canvas = document.getElementById("canvasBackground");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1080;
let game_speed = .5;

const backgroundlayer1 = new Image();
backgroundlayer1.src = 'Background.png';

const main_menu = document.getElementById("main_menu");
var isMainMenuOpen = false;
var isUpgradeMenuOpen = false;

const main_button_color = document.getElementById("main_menu_button").style.backgroundColor;
const uppgrade_tab = document.getElementById("uppgrades_tab")

let x = 0;
let x2 = 5846 - 442;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundlayer1, x, 0);
    ctx.drawImage(backgroundlayer1, x2, 0);

    if( x < -5846 - 442) x = 5846 + x2 - game_speed - 442;
    else x -= game_speed;

    if( x2 < -5846 - 442) x2 = 5846 + x - game_speed - 442;
    else x2 -= game_speed;  

    requestAnimationFrame(animate);
};
animate();

// ------------------------------------------------------------------------------- //
const windowCounter = document.getElementById("window_counter");
var windows_collected = 0;   

// Counter for the total windows collected
function add_windows(){
    windows_collected += 1;
    windowCounter.innerHTML = windows_collected;
    setTimeout(() => {
        
    }, 500)
};


function open_main_menu(){
    isMainMenuOpen = !isMainMenuOpen

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
        if (current_margin <= 60){
            
        }
        document.getElementById("uppgrades_tab").style.marginLeft = "60%";
    }
    else{
        document.getElementById("uppgrades_tab").style.marginLeft = "98%";
    }
}




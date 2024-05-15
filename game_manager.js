
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

// ------------------------------------------------------------------------------- //
let window_icon = document.getElementById("window_button");
let window_backgrnd = document.getElementById("window_background");
let upgrades_menu = document.getElementById("upgrades_tab");
var windows_collected = 0;
let select_audio = document.getElementById("select_sound");
let upgrade_bttns = document.getElementsByClassName("uppgrade_button");

select_audio.volume = 0.2;

/* Här ska window knappen centreras in till backgrunden för window*/
function window_bttn_repos(){
    window_icon = document.getElementById("window_button");
    let w_icon_prop = window_icon.getBoundingClientRect();
    let w_backgrnd_prop = window_backgrnd.getBoundingClientRect();
    let offset_x = 0
    let offset_y = 0

    offset_x = (w_backgrnd_prop.left + (w_backgrnd_prop.width/2));
    offset_y = (w_backgrnd_prop.top + (w_backgrnd_prop.height/2));

    w_icon_prop = window_icon.getBoundingClientRect();
    offset_x += (w_icon_prop.left - (w_icon_prop.width/2));
    offset_y += (w_icon_prop.top - (w_icon_prop.height/2));

    window_icon.style.left = offset_x+"px";
    window_icon.style.top = offset_y+"px";
}

function window_counter_update(amount){
    document.getElementById("window_counter").innerHTML = Math.trunc(amount);
}

// Counter for the total windows collected
function add_windows(){
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

    let scorll_menu = document.getElementById("uppgrade_scrollable_menu");

    isUpgradeMenuOpen = !isUpgradeMenuOpen;

    if (window.innerWidth > 900){
        if (isUpgradeMenuOpen){
            upgrades_menu.style.transform = "translateX(-90%) translateY(-50%)";
            upgrades_menu.style.height = "90%";
            scorll_menu.style.display = "block";       
            document.getElementById("open_uppgrade_button").style.transform = "translateY(-50%) rotate(180deg)";
        }
        else{
            upgrades_menu.style.transform = "translateX(0%) translateY(-50%)";
            upgrades_menu.style.height = "15rem";
            document.getElementById("uppgrade_scrollable_menu").style.display = "none";   
            document.getElementById("open_uppgrade_button").style.transform = "rotate(0deg) translateY(-50%)";
        }
    }
    else{
        if(isUpgradeMenuOpen){
            upgrades_menu.style.display = "block";
            scorll_menu.style.display = "block";
            document.getElementById("upgrade_button_phone").style.backgroundColor = "#F4F1E9";
        }
        else{
            upgrades_menu.style.display = "none";
            scorll_menu.style.display  = "none";
            document.getElementById("upgrade_button_phone").style.backgroundColor = "#8941c5";
        }
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

function auto_click_upgrade(obj, text){

}

window.addEventListener("load",function(e){
    window_bttn_repos();
    document.getElementById("upgrades_tab").style.display = "none"
    document.getElementById("uppgrade_scrollable_menu").style.display = "none";
})

if (upgrade_bttns){
    for(let i = 0; i < upgrade_bttns.length;i++){
        upgrade_bttns[i].addEventListener("mouseover", function(e){
            select_audio.play();
        })
        upgrade_bttns[i].addEventListener("mouseleave", function(e){
            select_audio.pause();
            select_audio.currentTime = 0;
        })
    }
}


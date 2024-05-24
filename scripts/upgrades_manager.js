let window_counter = document.getElementById("")
let upgrade_amount_add = 0;

setInterval(function(){
      total_windows += upgrade_amount_add;
      window_counter_update(total_windows);
}, 1000)

function increasse_passive_income(id, amount, increase_amount){
      obj = document.getElementById(id);
      value = obj.innerText.replace("Windows","");
      if (total_windows >= value){
            total_windows -= value;
            upgrade_amount_add += amount;
            value = parseInt(value) + increase_amount;
            obj.innerText = value + " Windows";
      }
}
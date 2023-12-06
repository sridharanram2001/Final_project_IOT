

function updateData() {
let display_tag = document.getElementById("show")

let apple_temp = document.getElementsByClassName("apple")[0];
let milk_temp = document.getElementsByClassName("milk")[0];
let avocado_temp = document.getElementsByClassName("avocado")[0];
let peanut_butter_temp = document.getElementsByClassName("peanut_butter")[0];
let nutella_temp = document.getElementsByClassName("nutella")[0];
let salt_temp = document.getElementsByClassName("salt")[0];

let apple_cost = 1.20;
let avocado_cost = 0.75;
let milk_cost = 3.00;
let nutella_cost = 11.00;
let peanut_butter_cost = 11.08;
let salt_cost = 3.79;

  loadURL("http://localhost:3000/send_data", function (data) {
    
    if(JSON.stringify(data).length != 0 || '{}')
    {
    const msg = JSON.parse(data);  
    const count_arr = [0,0,0,0,0,0];
    const calc_price = [0,0,0,0,0,0];      
    for(let i=0;i<msg.length;i++)
    {
      //console.log(msg[i].class[0])
      switch((msg[i].class[0])) {
        case 0:
          if(display_tag.querySelector('.salt_disp')===null)
          {
            display_tag.innerHTML += apple_temp.innerHTML;
            var data = document.getElementsByClassName('apple_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            calc_price[0] = (parseFloat(tag.innerHTML))*apple_cost;
            count_arr[0] = count_arr[0] + 1;
          }
          else
          {
            var data = document.getElementsByClassName('apple_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            var price = data.getElementsByClassName("apple_price")[0];
            count_arr[0] = count_arr[0] + 1;
            tag.innerHTML = count_arr[0];
            calc_price[0] = (parseFloat(tag.innerHTML))*apple_cost;
            price.innerHTML = "$ " + Math.round(calc_price[0].toFixed(4));
          }    
        case 1:
          if(display_tag.querySelector('.avocado_disp')===null)
          {
            display_tag.innerHTML += avocado_temp.innerHTML;
            var data = document.getElementsByClassName('avocado_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            calc_price[1] = (parseFloat(tag.innerHTML))*avocado_cost;
            count_arr[1] = count_arr[1] + 1;
          }
          else
          {
            var data = document.getElementsByClassName('avocado_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            var price = data.getElementsByClassName("avocado_price")[0];
            count_arr[1] = count_arr[1] + 1;
            tag.innerHTML = count_arr[1];
            calc_price[1] = (parseFloat(tag.innerHTML))*avocado_cost;
            price.innerHTML = "$ " + Math.round(calc_price[1].toFixed(4));
          }
        case 2:
          if(display_tag.querySelector('.milk_disp')===null)
          {
            display_tag.innerHTML += milk_temp.innerHTML;
            var data = document.getElementsByClassName('milk_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            calc_price[2] = (parseFloat(tag.innerHTML))*milk_cost;
            count_arr[2] = count_arr[2] + 1;
          }
          else
          {
            var data = document.getElementsByClassName('milk_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            var price = data.getElementsByClassName("milk_price")[0];
            count_arr[2] = count_arr[2] + 1;
            tag.innerHTML = count_arr[2];
            calc_price[2] = (parseFloat(tag.innerHTML))*milk_cost;
            price.innerHTML = "$ " + Math.round(calc_price[2].toFixed(4));
          }
        case 3:
          if(display_tag.querySelector('.nutella_disp')===null)
          {
            display_tag.innerHTML += nutella_temp.innerHTML;
            var data = document.getElementsByClassName('nutella_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            calc_price[3] = (parseFloat(tag.innerHTML))*nutella_cost;
            count_arr[3] = count_arr[3] + 1;
          }
          else
          {
            var data = document.getElementsByClassName('nutella_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            var price = data.getElementsByClassName("nutella_price")[0];
            count_arr[3] = count_arr[3] + 1;
            tag.innerHTML = count_arr[3];
            calc_price[3] = (parseFloat(tag.innerHTML))*nutella_cost;
            price.innerHTML = "$ " + Math.round(calc_price[3].toFixed(4));
          }
        case 4:
          if(display_tag.querySelector('.peanut_butter_disp')===null)
          {
            display_tag.innerHTML += peanut_butter_temp.innerHTML;
            var data = document.getElementsByClassName('peanut_butter_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            calc_price[4] = (parseFloat(tag.innerHTML))*peanut_butter_cost;
            count_arr[4] = count_arr[4] + 1;
          }
          else
          {
            var data = document.getElementsByClassName('peanut_butter_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            var price = data.getElementsByClassName("peanut_butter_price")[0];
            count_arr[4] = count_arr[4] + 1;
            tag.innerHTML = count_arr[4];
            calc_price[4] = (parseFloat(tag.innerHTML))*peanut_butter_cost;
            price.innerHTML = "$ " + Math.round(calc_price[4].toFixed(4));
          }

        case 5:
          if(display_tag.querySelector('.salt_disp')===null)
          {
            display_tag.innerHTML += salt_temp.innerHTML;
            var data = document.getElementsByClassName('salt_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            calc_price[5] = (parseFloat(tag.innerHTML))*salt_cost;
            count_arr[5] = count_arr[5] + 1;
          }
          else
          {
            var data = document.getElementsByClassName('salt_disp')[0];
            var tag = data.getElementsByClassName("fw-normal")[0];
            var price = data.getElementsByClassName("salt_price")[0];
            count_arr[5] = count_arr[5] + 1;
            tag.innerHTML = count_arr[5];
            calc_price[5] = (parseFloat(tag.innerHTML))*salt_cost;
            price.innerHTML = "$ " + Math.round(calc_price[5].toFixed(4));
          }
          let number_of_stuff= document.getElementsByClassName("nos_items")[0];
          let total_tag = document.getElementsByClassName("total_price")[0];
          let sum = 0;
          let total = 0;

          count_arr.forEach( num => {
            sum += num;
                })

          calc_price.forEach( num => {
            total += num;
                })

          number_of_stuff.innerHTML = "You have " + sum + " items in your cart";
          total_tag.innerHTML = "$ " + Math.round(total); 
          console.log(total)  
      
    }
    
    }
   
}
  })

}


function start() {
        
      
    setInterval("updateData()", 300);
}


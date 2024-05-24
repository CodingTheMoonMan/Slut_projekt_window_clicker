let canvas;
let ctx;
let particle;

let colors = ["#632aa3","#9143c4","#b959d9"];

let windowbttn = document.getElementById("window_button");

window.onload = function(){
      canvas = document.getElementById("particlesCanvas");
      ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
}

window.addEventListener("resize", function(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
})

const mouse = {
      x: 0,
      y: 0,
}

window.addEventListener("mousemove", function(e){
      mouse.x = e.x;
      mouse.y = e.y;
})


class Rectangle{
      #ctx

      constructor (ctx, xPos, yPos, color, size, speedX, speedY){
            this.#ctx = ctx;
            this.color = color;
            this.speedX = speedX;
            this.speedY = speedY;
            this.size = size;
            this.xPos = xPos;
            this.yPos = yPos;

            this.dx = 1 * this.speedX;
            this.dy = 1 * this.speedY;
      }

      draw(){
            this.#ctx.beginPath();
            this.#ctx.fillStyle = this.color;
            this.#ctx.arc(this.xPos - (this.size/2) , this.yPos - (this.size/2), this.size, 0, 2 * Math.PI);
            this.#ctx.fill();
            this.#ctx.closePath();
      }
      
      update(clear){
            this.draw();
            
            if(this.xPos > canvas.width || this.xPos < 0 || this.yPos > canvas.height || this.yPos < 0){
                  this.#ctx.clearRect(this.xPos,this.yPos,this.size,this.size)
            }

            if(clear){
                  this.#ctx.clearRect(this.xPos,this.yPos,this.size,this.size);
            }

            this.xPos += this.dx
            this.yPos += this.dy

            if(this.size > 0.2){ this.size -=0.2}
      }
}


let particles = [];

function explosionEffect(){
      for (let i = 0; i < 20; i++){
            let randomColor = colors[Math.floor(Math.random() * colors.length)] 
            let size = Math.random() * 20 + 5;
            let speedX = Math.random() * 10 - 5;
            let speedY = Math.random() * 10 - 5;
            let rects  = new Rectangle(ctx, mouse.x, mouse.y, randomColor, size, speedX, speedY);
            particles.push(rects);
      }
}

windowbttn.addEventListener("click", function(e){
      explosionEffect();
})

function animation(){
      requestAnimationFrame(animation);
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(let i = 0; i < particles.length; i++){
            particles[i].update(false);
            if (particles[i].size <= 0.3){
                  particles.splice(i,1);
                  i--;
            }
      }
}



animation();

setTimeout(function(){
      for (let i = 0; i<particles.length;i++){
            ctx.clearRect(particles[i].xPos, particles[i].yPos, particles[i].size,particles[i].size);
      }
}, 200)
let canvas;
let ctx;
let particle;
window.onload = function(){
      canvas = document.getElementById("particlesCanvas");
      ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particle = new ParticleExplosion(ctx, canvas.width, canvas.height);
      particle.animate();
}

window.addEventListener("resize", function(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particle = new ParticleExplosion(ctx, canvas.width, canvas.height);
      particle.animate();
})

const mouse = {
      x: 0,
      y: 0,
}

window.addEventListener("mousemove", function(e){
      mouse.x = e.x;
      mouse.y = e.y;
})


class ParticleExplosion{
      #width
      #height
      #ctx

      constructor (ctx, width, height){
            this.#ctx = ctx;
            this.#height = height;
            this.#ctx.fillStyle = "darkgoldenrod";
            this.#width = width;
            console.log("Effect loaded");
      }

      #draw(x,y){
            const size = 40;
            this.#ctx.beginPath();
            this.#ctx.fillRect(mouse.x - (size/2) , mouse.y - (size/2), size, size);
      }
      
      animate(){
            this.#ctx.clearRect(0,0,this.#width,this.#height);
            this.#draw(this.#width /2, this.#height/2);
            requestAnimationFrame(this.animate.bind(this));
      }
}

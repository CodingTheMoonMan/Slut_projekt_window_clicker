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


class ParticleExplosion{
      #width
      #height
      #ctx

      constructor (ctx, width, height){
            this.#ctx = ctx;
            this.#height = height;
            this.#ctx.fillStyle = "darkgoldenrod";
            this.#width = width;
            this.x = 0;
            this.y = 0;
            console.log("Effect loaded");
      }

      #draw(x,y){
            const size = 70;
            this.#ctx.beginPath();
            this.#ctx.moveTo(x,y);
            this.#ctx.fillRect(x - (size/2) , y - (size/2), size, size);
      }
      
      animate(){
            this.#ctx.clearRect(0,0,this.#width,this.#height);
            this.#draw(this.#width /2 + this.x, this.#height/2 + this.y);
            this.x += 4;
            this.y += 2;
            requestAnimationFrame(this.animate.bind(this));
      }
}

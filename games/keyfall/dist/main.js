(()=>{var a=new Image,s=new Image,o=new Image,n=null,e=null;function l(){a.src="images/sun.png",s.src="images/moon.png",o.src="images/earth.png",n=document.getElementById("canvas"),e=n.getContext("2d"),window.requestAnimationFrame(r)}function r(){if(e==null)return;e.globalCompositeOperation="destination-over",e.clearRect(0,0,300,300),e.fillStyle="rgba(0, 0, 0, 0.4)",e.strokeStyle="rgba(0, 153, 255, 0.4)",e.save(),e.translate(150,150);let t=new Date;e.rotate(2*Math.PI/60*t.getSeconds()+2*Math.PI/6e4*t.getMilliseconds()),e.translate(105,0),e.fillRect(0,-12,40,24),e.drawImage(o,-12,-12),e.save(),e.rotate(2*Math.PI/6*t.getSeconds()+2*Math.PI/6e3*t.getMilliseconds()),e.translate(0,28.5),e.drawImage(s,-3.5,-3.5),e.restore(),e.restore(),e.beginPath(),e.arc(150,150,105,0,Math.PI*2,!1),e.stroke(),e.drawImage(a,0,0,300,300),window.requestAnimationFrame(r)}l();})();
//# sourceMappingURL=main.js.map

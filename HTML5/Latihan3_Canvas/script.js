const mycanvas = document.getElementById('mycanvas');

mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

const c = mycanvas.getContext('2d');

// membuat persegi panjang
// c.fillStyle = 'pink'; //warna isinya
// c.strokeStyle = '#333'; //warna garis
// c.lineWidth = 5; //ketebalan garis

// c.rect(50, 50, 300, 400); //(sumbuX, sumbuY, width, height)
// c.fill();
// c.stroke();


// membuat lingkaran
// c.fillStyle = 'red'; //warna isinya
// c.strokeStyle = '#000'; //warna garis
// c.lineWidth = 2; //ketebalan garis

// c.arc(300, 300, 150, 0, 2 * Math.PI); //(sumbuX, sumbuY, radius, sudutAwal, sudutAkhir). titik awalnya (x,y) ada di tengah lingkaran
// c.fill();
// c.stroke();

// membuat path
// c.fillStyle = 'lightgreen'; //warna isinya
// c.strokeStyle = '#000'; //warna garis
// c.lineWidth = 2; //ketebalan garis

// c.beginPath(); // mulai path
// c.moveTo(300, 50); //titik awal
// c.lineTo(450, 350); // membuat garis dari titik awal
// c.lineTo(150, 350); // membuat garis dari titik sebelumnya ke titik tujuan
// c.lineTo(300, 50); // membuat garis dari titik sebelumnya ke titik tujuan
// bisa menggunakan c.closePath()
// c.fill();
// c.stroke();



// Animasi Canvas

// membuat lingkaran
// Canvas API animation : requestAnimationFrame(), clearReact()

// membuat lingkaran di atas berjalan ke kanan

let x = 300;
let y = 200;
let speedX = 5;
let speedY = 5;
let radius = 50; //jari-jari lingkaran

function draw(){
    window.requestAnimationFrame(draw);

    c.clearRect(0, 0, innerWidth, innerHeight); // menghilangkan semua yang ada di dalam canvasnya
    
    c.fillStyle = 'red'; //warna isinya
    c.strokeStyle = '#000'; //warna garis
    c.lineWidth = 2; //ketebalan garis

    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.fill();
    c.stroke();

    if(x + radius > innerWidth || x - radius < 0){
        speedX = -speedX;
    }

    if(y + radius > innerHeight || y - radius < 0){
        speedY = -speedY;
    }
    
    x+=speedX; // lingkarannya menggeser sebanyak 5px ke kanan
    y+=speedY;
}

draw()











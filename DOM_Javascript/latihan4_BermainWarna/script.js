const tombol = document.getElementById('btnWarna');

// tombol.addEventListener('click', function(){
//     document.body.style.backgroundColor= 'palevioletred';
//     document.body.setAttribute('class', 'wrn-palevioletred');
// });

tombol.onclick = function() {
    // document.body.setAttribute('class', 'wrn-palevioletred');
    document.body.classList.toggle('wrn-palevioletred');
}

// Membuat tombol dengan js. membuat tombol yang setiap di klik warnanya berubah terus.
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tombol.after(tAcakWarna);

tAcakWarna.addEventListener('click',function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


// membuat slider untuk bisa mengubah warna background
// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');

// sMerah.addEventListener('input',function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });

// sHijau.addEventListener('input',function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });

// sBiru.addEventListener('input',function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });

// cara yang lebih efisien
const range = document.querySelectorAll('input');

for(let i = 0; i < range.length; i++){
    range[i].addEventListener('input', function(){
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
}

document.body.addEventListener('mousemove', function(event){
    // posisi mouse (event.clientX dan event.clientY)
    // ukuran browser (window.innerWidth)
    // x untuk red
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    // y untuk green
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    // untuk blue di set ke angka 100 aja

    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';

});


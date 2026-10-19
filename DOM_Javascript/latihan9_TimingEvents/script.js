// setTimeout() => digunakan ketika ingin menjalan kode setelah menunggu sejumlah waktu tertentu
// setTimeout(function, lama waktu dalam milisdetik)
// setTimeout bisa diberhentikan di tengah-tengah

// setTimeout(tampilkanPesan, 3000); // menunggu fungsi tampilkanpesan selama 3 detik

// const tes = setTimeout(function(){
//     console.log('My name is Mutiya');
// }, 5000);

// // setTimeout bisa diberhentikan di tengah-tengah

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function(){
//     clearTimeout(tes);
//     console.log('sudah dihentikan');
// });

// function tampilkanPesan(){
//     console.log('Heloo semua')
// }


//  setInterval() => ketika ingin menjalan blok program secara berulang-ulang
// const tombol = document.getElementById('tombol');
// const tes = setInterval(function(){
//     console.log('ok');
// }, 2000); //setiap dua detik akan menjalan rangkaian code ini

// tombol.addEventListener('click', function(){
//     clearInterval(tes);
//     console.log('sudah dihentikan');
// });











// program hitung mundur
const tanggalTujuan = new Date('October 19, 2026 14:45:00').getTime();

const hitungMundur = setInterval(function(){
    const sekarang = new Date().getTime(); //getTime diubah ke dalam milidetik
    const selisih = tanggalTujuan-sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);

    const teks = document.getElementById('teks');
    teks.innerHTML = 'Waktu kamu tinggal ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi';

    if(selisih <= 0) {
        clearInterval(hitungMundur);
        teks.innerHTML ='Waktu anda habis';
    }

}, 1000);





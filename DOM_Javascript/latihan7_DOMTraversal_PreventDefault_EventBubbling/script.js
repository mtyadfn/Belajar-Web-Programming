// // menutup dengan klik close (x)
// const Xclose = document.querySelector('.close');

// Xclose.addEventListener('click',function(){
//     document.querySelector('.card').style.display ='none';
// });

// Dom Traversal

const close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click',function(e){
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

// Prevent Default -> kaya menggunakan a. -> cegah aksi default


// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok');
//     });
// });


// event bubbling -> jika di sini pada .close kita sudah menaruh event, lalu kita menambah event di card, yang mana .card adalah parent dari .close, maka jika .close diklik, event yang dijalankan pertama adalah event .cardnya lalu baru event yang ada di .close.
// untuk menghentikan atau memecah bubbling itu gunakan stopPropagation()

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
    }
});
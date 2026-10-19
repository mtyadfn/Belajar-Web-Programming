
// const thumb = document.querySelectorAll('.thumb');
// const jumbo = document.querySelector('.jumbo');

// for(let i = 0; i < thumb.length; i++){
//     thumb[i].addEventListener('click', function(){
//         let angka = i+1;
//         jumbo.src = "img/pic" + angka +".png"
//     });
// }

const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    if(e.target.className = 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 100);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';
        });

        e.target.classList.add('active')
    }
});
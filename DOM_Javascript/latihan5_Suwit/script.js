// pemain memilih suit
// komputer keluarin suit
// hasil keluar

const thumb = document.querySelector('#idplayer .thumb');
const point = document.querySelector('#idplayer .point');
const pinky = document.querySelector('#idplayer .pinky');
const comp = document.querySelector('#idcomp img')
const hasil = document.querySelector('#idhasil h2')


thumb.addEventListener('click', function(){
    thumb.style.backgroundColor = 'lightblue';
    point.style.backgroundColor = 'crimson';
    pinky.style.backgroundColor = 'crimson';
    const hPlayer = 'thumb';
    let hComp = '';

    let suitComp = Math.round(Math.random() * 10 * 3);

    if(suitComp <= 10){
        comp.src = 'pinky_finger.png';
        comp.style.backgroundColor = 'seagreen';
        hComp = 'pinky';
    }
    else if(suitComp > 10 && suitComp <= 20){
        comp.src = 'point_finger.png';
        comp.style.backgroundColor = 'seagreen';
        hComp = 'point';
    }
    else{
        comp.src = 'thumb_finger.png';
        comp.style.backgroundColor = 'seagreen';
        hComp = 'thumb';
    }

    if(hComp == hPlayer){
        hasil.innerHTML = 'Kalian Seri';
    }
    else if(hComp == 'pinky'){
        hasil.innerHTML = 'Player Kalah';
    }
    else{
        hasil.innerHTML = 'Player Menang';
    }
});


point.addEventListener('click', function(){
    thumb.style.backgroundColor = 'crimson';
    pinky.style.backgroundColor = 'crimson';
    point.style.backgroundColor = 'lightblue';
    const hPlayer = 'point';
    let hComp = '';

    let suitComp = Math.round(Math.random() * 10 * 3);

    if(suitComp <= 10){
        comp.src = 'pinky_finger.png';
        comp.style.backgroundColor = 'seagreen';
        hComp = 'pinky';
    }
    else if(suitComp > 10 && suitComp <= 20){
        comp.src = 'point_finger.png';
        comp.style.backgroundColor = 'seagreen';
        hComp = 'point';
    }
    else{
        comp.src = 'thumb_finger.png';
        comp.style.backgroundColor = 'seagreen';
        hComp = 'thumb';
    }

    if(hComp == hPlayer){
        hasil.innerHTML = 'Kalian Seri';
    }
    else if(hComp == 'pinky'){
        hasil.innerHTML = 'Player Menang';
    }
    else{
        hasil.innerHTML = 'Player Kalah';
    }
});


pinky.addEventListener('click', function(){
    thumb.style.backgroundColor = 'crimson';
    point.style.backgroundColor = 'crimson';
    pinky.style.backgroundColor = 'lightblue';
    const hPlayer = 'pinky';
    let hComp = '';

    let suitComp = Math.round(Math.random() * 10 * 3);

    if(suitComp <= 10){
        comp.src = 'pinky_finger.png';
        comp.style.backgroundColor = 'seagreen';
        hComp = 'pinky';
    }
    else if(suitComp > 10 && suitComp <= 20){
        comp.src = 'point_finger.png';
        comp.style.backgroundColor = 'seagreen';
        hComp = 'point';
    }
    else{
        comp.src = 'thumb_finger.png';
        comp.style.backgroundColor = 'seagreen';
        hComp = 'thumb';
    }

    if(hComp == hPlayer){
        hasil.innerHTML = 'Kalian Seri';
    }
    else if(hComp == 'thumb'){
        hasil.innerHTML = 'Player Menang';
    }
    else{
        hasil.innerHTML = 'Player Kalah';
    }
});
function getCompRandom(){
    let suitComp = Math.round(Math.random() * 10 * 3);

    if(suitComp <= 10) return 'pinky';
    if(suitComp > 10 && suitComp <= 20) return 'point';
    return 'thumb';
}

function getHasil(sComp, sPlayer){
    if(sPlayer == sComp) return 'Seri';
    if(sPlayer == 'thumb') return (sComp == 'point') ? 'Menang' : 'Kalah';
    if(sPlayer == 'point') return (sComp == 'pinky') ? 'Menang' : 'Kalah';
    if(sPlayer == 'pinky') return (sComp == 'thumb') ? 'Menang' : 'Kalah';
}

const thumb = document.querySelector('#idplayer .thumb');
const point = document.querySelector('#idplayer .point');
const pinky = document.querySelector('#idplayer .pinky');
const comp = document.querySelector('#idcomp img')
const hasil = document.querySelector('#idhasil h2')

thumb.addEventListener('click', function(){
    thumb.style.backgroundColor = 'lightblue';
    point.style.backgroundColor = 'crimson';
    pinky.style.backgroundColor = 'crimson';
    comp.style.backgroundColor = 'seagreen';

    let sComp = getCompRandom();
    comp.src = sComp + '_finger.png';
    let sPlayer = 'thumb'
    let hasilAkhir = getHasil(sComp, sPlayer);

    hasil.innerHTML = 'Player ' + hasilAkhir;
});

point.addEventListener('click', function(){
    point.style.backgroundColor = 'lightblue';
    thumb.style.backgroundColor = 'crimson';
    pinky.style.backgroundColor = 'crimson';
    comp.style.backgroundColor = 'seagreen';

    let sComp = getCompRandom();
    comp.src = sComp + '_finger.png';
    let sPlayer = 'point'
    let hasilAkhir = getHasil(sComp, sPlayer);

    hasil.innerHTML = 'Player ' + hasilAkhir;
});

pinky.addEventListener('click', function(){
    pinky.style.backgroundColor = 'lightblue';
    point.style.backgroundColor = 'crimson';
    thumb.style.backgroundColor = 'crimson';
    comp.style.backgroundColor = 'seagreen';

    let sComp = getCompRandom();
    comp.src = sComp + '_finger.png';
    let sPlayer = 'pinky'
    let hasilAkhir = getHasil(sComp, sPlayer);

    hasil.innerHTML = 'Player ' + hasilAkhir;
});
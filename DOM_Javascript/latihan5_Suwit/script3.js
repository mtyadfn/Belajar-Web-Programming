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

function putar(){
    const imgComp = document.querySelector('#idcomp img')
    const gambar = ['thumb', 'point', 'pinky'];
    let i = 0
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }

        imgComp.src = gambar[i++] + '_finger.png';
        if(i == gambar.length) i = 0;
    }, 100)
}

const comp = document.querySelector('#idcomp img')
const pilPlayer = document.querySelectorAll('#idplayer img');

pilPlayer.forEach(function(pil){
    pil.addEventListener('click', function(){

        let sComp = getCompRandom();
        let sPlayer = pil.className;
        let hasilAkhir = getHasil(sComp, sPlayer);


        putar();

        setTimeout(function(){
            comp.src = sComp + '_finger.png';
            const hasil = document.querySelector('#idhasil h2')
            hasil.innerHTML = 'Player ' + hasilAkhir;
            
        },1000)

        
    });
});
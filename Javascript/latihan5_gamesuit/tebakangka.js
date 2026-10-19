let tanya = true;
while(tanya){    
    alert('Tebak angka dari 0-9');


    let comp = Math.random();
    if(comp < 0.1){
        comp = 0;
    }
    else if(comp >= 0.1 && comp < 0.2){
        comp = 1;
    }
    else if(comp >= 0.2 && comp < 0.3){
        comp = 2;
    }
    else if(comp >= 0.3 && comp < 0.4){
        comp = 3;
    }
    else if(comp >= 0.4 && comp < 0.5){
        comp = 4;
    }
    else if(comp >= 0.5 && comp < 0.6){
        comp = 5;
    }
    else if(comp >= 0.6 && comp < 0.7){
        comp = 6;
    }
    else if(comp >= 0.7 && comp < 0.8){
        comp = 7;
    }
    else if(comp >= 0.8 && comp < 0.9){
        comp = 8;
    }
    else {
        comp = 9;
    }



    let hasil = '';
    let k = 0;
    while(k < 3){

        let p = prompt('masukan angka tebakanmu')
        k++

        if(p == comp) {
            hasil = 'benar';
            k = k - k + 3;
        }
        else{
            hasil = 'salah';
            console.log('kesemptan ke ' + k);
        }
    }
    alert('Tebakanmu ' + hasil + '. Angka tebakanmu ' + p + ' dan angka komputer adalah ' + comp);
    
    tanya = confirm('Mau coba lagi?');
    
}
let tanya = true;
while(tanya){    
    alert('Tebak angka dari 0-9');


    let comp = Math.floor(Math.random() * 10);


    let hasil = '';
    let k = 0;
    while(k < 3){
        k++;
        let p = prompt('Ini kesempatan ke-' + k + '. Masukan angka tebakanmu');
        // mengubah masukan string jadi int
        p = parseInt(p);
        

        if(p === comp) {
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
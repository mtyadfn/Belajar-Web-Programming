let tanya = true;
while(tanya){
    // player (p) menentukan pilihan suitnya
    // menangkap pilihan p
    let p = prompt('Pilih salah satu dari : gajah, orang, semut');

    // computer (comp) memilih suitnya
    // menangkap pilihan random comp
    let comp = Math.random();

    if(comp <= 0.34){
        comp = 'semut';
    }else if(comp > 0.34 && comp <= 0.68){
        comp = 'orang';
    }else{
        comp = 'gajah';
    }

    //p dan comp sudah sama-sama memasukan pilihan
    // menyimpan hasil
    let hasil = '';

    if(p == comp){
        hasil = 'SERI';
    }
    else if(p == 'gajah'){
        // if(comp = 'semut'){
        //     hasil = 'MENANG';
        // }else{
        //     hasil = 'KALAH';
        // }

        // baris di atas bisa disingkat menggunakan ternary if
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    }
    else if(p == 'orang'){
        hasil = (comp == 'semut') ? 'MENANG' : 'KALAH';
    }
    else if(p == 'semut'){
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
    }
    else{
        hasil = 'PILIHAN TIDAK BENAR';
    }

    // menapilkan hasil 

    alert('Kamu memilih ' + p + ' dan Computer memilih ' + comp + '.\nMaka kamu ' + hasil);

    tanya = confirm('Mau main lagi?')

}
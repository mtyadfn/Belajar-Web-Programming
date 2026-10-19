// Membuat array kosong untuk penumpang.
const penumpang = [];

// Membuat function expression  untuk pemumpang yang naik
const tambahPenumpang = function(namaPenumpang, penumpang){
    // mengecek, apakah angkot kosong atau tidak
    // jika angkot kosong, penumpang akan duduk di awal array
    if(penumpang.length == 0){
        penumpang.unshift(namaPenumpang);
        return penumpang;
    }
    else{
        for(let i = 0; i < penumpang.length; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang;
                return penumpang;
            }

            else if(penumpang[i] == namaPenumpang){
                console.log('Penumang dengan nama ' + namaPenumpang + ' sudah ada');
                return penumpang;
            }

            else if( i == penumpang.length - 1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};





const hapusPenumpang = function(namaPenumpang, penumpang){
    // angkot kosong tidak ada penumpang yang turun
    if(penumpang.length == 0){
        console.log('Angkot kosong. Tidak ada penumpang yang turun');
        return penumpang;
    }
    else{
        for(let i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }
            else if(i == penumpang.length - 1){
                console.log('Tidak ada nama penumpang dengan nama ' + namaPenumpang);
                return penumpang;
            }
        }
    }
};


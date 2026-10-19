// membuat object angkot
// constructor
function Angkot(supir, trayek, penumpang, kas){
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang; 
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.lengt === 0){
            alert('Angkot masih kosong');
            return false;
        }

        for(let i = 0; i < this.penumpang.lengt; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
            else if (i == this.penumpang.lengt-1){
                alert('Tidak ada penumpang dengan nama ' + namaPenumpang);
                return this.penumpang;
            }
        }
    }
}

const angkot1 = new Angkot('Bambang', ['Kalisari','Pasa Rebo'], [], 0);
const angkot2 = new Angkot('Asep', ['Pasar Minggu','Pancoran'], [], 0);
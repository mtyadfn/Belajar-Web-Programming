// pembuatan object dengan object literal tidak efektif untuk object yang banyak
// pembuatan object dengan function declaration lebih efektif jika membuat object yang banyak, namun bila di dalam object tersebut ada method akn memakan banyak memori. Karena setiap menginisiasi object, akan menyimpan di memori baru padahal isi method pada object yang di buat sama. ada cara supaya menghemat memori. jadi method tersebut dipindahkan ke dalam variabel object baru (di luar dari object sebelumnya. Method tersebut disimpan dalam bentuk properti). Namun cara ini akan menyusahkan jika selalu menabambahkan method baru di object pertam. karena harus di masukan ke dalam object kedua yang isinya method-method.
// contoh
// object pertama yang di dalamnya ada method
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi += jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }

//     return mahasiswa
// };

// method makan dan main pindah ke object baru. object ini hanya disimpan satu kali dalam memori
// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     },
//     main: function(jam){
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }
// };

// object pertama setelah method-method dikeluarkan. methodnya cukup di jalankan sekali di dalam object method di atas. jadi setiap inisiasi mahasiswa baru, tidak ada method yang akan disimpandalam memory baru.
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;

//     return mahasiswa;
// };

// setiap ada method baru, sebelum masuk ke object utama, harus didaftarin ke object method dulu. akan sulit jika akan menambahkan banyak method atau menghapus method.

// Ada cara otomatis untuk menambahkan method baru, tanpa mendaftarkan ke object method. dan method tadi bisa dihapus. Untuk menggantinya menggunakan Object.create(). Nantinya tidap perlu mendefinisikan method ke dalam object utama.

// Object.create()
// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;



//     return mahasiswa
// };


// Menggunakan prototype menjadi lebih efektif
// constructor function
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
// };

// // menggunakan prototype tidak perlu membuat object baru untuk menyimpan method

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat main!`;
    
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam;
//     return `halo ${this.nama}, selamat tidur!`;
    
// }


// mirip seperti membuat class

class Mahasiswa {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    // method-methodnya
    makan(porsi){
        this.energi += porsi;
        return `halo ${this.nama}, selamat makan!`;
    }

    main(jam){
        this.energi -= jam;
        return `halo ${this.nama}, selamat main!`;
        
    }

    tidur(jam){
        this.energi += jam;
        return `halo ${this.nama}, selamat tidur!`;
        
    }

}

let difa = new Mahasiswa('Difa', 30);
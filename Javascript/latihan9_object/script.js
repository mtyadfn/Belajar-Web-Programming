// membuat object dengan object literal
// const mhs = {
//     nama : 'Mutiya Adifa Nurilmi',
//     nim : '0110218034',
//     prodi : 'Teknik Informatika',
//     angkatan : 2018
// };

// variabel yang ada di dalam sebuah object => property
// function yang ada di dalam sebuah object => method

// membuat object dengan function declaration
// function buatObjectMhs(nama, nim, prodi, angkatan){
//     const mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.nim = nim;
//     mahasiswa.prodi = prodi;
//     mahasiswa.angkatan = angkatan;
//     return mahasiswa;
// }

// pemanggilan object yang dibuat dengan function declration
// const mhs2 = buatObjectMhs('Mutiya', '0110218034', 'Teknik Informatika', 2018); 


// membuat object dengan constructor. constructor adalah function khusu pembuatan object
// nama fucntion diawali dengan huruf kapital
function Mahasiswa(nama, nim, prodi, angkatan){
    // const this = {};
    this.nama = nama;
    this.nim = nim;
    this.prodi = prodi;
    this.angkatan = angkatan;
    // return this;
}

// cara memanggil object yang dibuat dengan constructor
// ada 'new' nya
const mhs3 = new Mahasiswa('Mutiya', '0110218034', 'Teknik Informatika', 2018);
// this -> tergantung dari cara membuat dan pemanggilan object
// this secara umum adalah object window atau object global. 

// var a = 10;
// console.log(10)
// => a adalah variable di dalam object window (this), bisa juga disebut property dari this.

// 1. function declaration
// function halo(){
//     console.log('halo')
// }

// halo();
//this.halo() => fungsi deklarasi ini adalah method dari window atau this. jadi mengembalikan object global

// 2. literal
// const obj = {};
// obj.halo = function(){
//     console.log(this)
//     console.log('halo');
// }
// this mengembalikan objek yang bersangkutan.
// jadi jika this dipanggil yang keluar adalah property beserta isinya dan method dari objeknya.


// constructor
// function Halo(){
//     console.log('halo');
// }
// new Halo();
// this mengembalikan object yang baru dibuat
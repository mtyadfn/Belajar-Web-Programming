// DOM Selection
// document.getElementById() -> 'javascript tolong carikan element yang memiliki id '' -> mengembalikan element
// const judul = document.getElementById('judul'); //simpan element yang memiliki id 'judul' yang ada pada document pada variabel judul

// memanipulasi element dengan id judul
// mengubah warna text
// judul.style.color = 'red'; // mengubah warna tulisan menjadi merah
// memberikan warna backgroun
// judul.style.backgroundColor = '#ccc';
// mengubah text
// judul.innerHTML = 'Mutiya';

// document.getElementsByTagName() -> mengembalikan HTMLcollection
// const par = document.getElementsByTagName('p'); // isinya banyak element yang bertag p. bentuknya array.
// for(let i = 0; i < par.length; i++){
//     par[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0]; //kita bisa langsung menaruh indeks seperti ini. apalagi kalau tagname nya cuma 1
// h1.style.fontSize = '50px';

// document.getElementsByClassName() -> mengembalikan HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah melalui javascript';



// document.querySelector() -> mengembalikan element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';


// document.querySelectorAll() -> mengembalikan nodelist
// const p = document.querySelectorAll('p'); // -> mirip getElementsByTagName
// p[2].style.backgroundColor = 'lightblue';

// mengubah node root
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';









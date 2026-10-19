// Manipulation pada DOM

// Manipulasi element
// element.innerHTML -> mengubah isi/value dari element
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Mutiya Adifa Nurilmi</em>'

// element.style.<properticss>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';

// element.setAttribute() -> menambah attribute baru pada element html 
// element.getAttribute() -> mengetahui isi dari attribute
// element.removeAttribute() -> menghilangkan atrtribute
// Attribute sesuatu yang menempel pada element HTML

// element.classList.add() -> menambahkan class pada attribute
// element.classList.remove() -> menghapus class yang ada di attribute
// element.classList.toggle() -> menghapus class jika class yang di cari ada. dan memberikan class jika class yang di cari tidak ada
// element.classList.item() -> mencari tahu isiclass dalam urutan tertentu. () ditaro di dalam kurung
// element.classList.contains() -> menanyakan apkah ada class dengan nama tertentu
// element.classList.replace() -> mengganti nilai yang ada di dalam class yang diminta



// Manipulasi node
// membuat elemen baru
// document.createElement()
// const pBaru = document.createElement('p');
// memasukan text ke dalam element yang baru dibuat
// document.createTextNode()
// const textPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan (text) yang tadi ke dalam paragraf
// node.appendChild()
// pBaru.appendChild(textPBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// node.insertBefore()
// const liBaru = document.createElement('li');
// const textLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(textLiBaru);

// const ul = document.querySelector('section#b ul'); // ini parent yang mau ditambahkan element (child) baru
// const li2 = ul.querySelector('li:nth-child(2)'); // -> ini adalah elemen yang nanti posisiya setelah element baru yang mau ditambah. di sini bisa tidka pakai 'document', bisa langsung pakai 'ul'. 'ul' di sini di ambil dari variabel yang menyimpan ul

// ul.insertBefore(liBaru, li2); //-> (element baru, element setelahnya)

// parentNode.removeChild()
// pakai sectionA yang udah di tulis di atas
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// parentNode.replaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);
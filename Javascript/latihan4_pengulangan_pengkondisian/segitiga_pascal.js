let jumlahBaris = 5;
let segitiga = [];

// Loop luar untuk baris
for (let i = 0; i < jumlahBaris; i++) {
    let baris = [];
    
    // Loop dalam untuk kolom
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            baris.push(1);
        } else {
            baris.push(segitiga[i - 1][j - 1] + segitiga[i - 1][j]);
        }
    }
    segitiga.push(baris);
}

// Loop untuk mencetak hasil ke konsol
for (let i = 0; i < segitiga.length; i++) {
    let spasi = ' '.repeat(jumlahBaris - i - 1);
    console.log(spasi + segitiga[i].join(' '));
}
var jumlahAngkot = 10;
var noAngkot = 1;
var angkotGood = 5;

while(noAngkot <= angkotGood){
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++
}

for(noAngkot = angkotGood + 1; noAngkot <= jumlahAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
}


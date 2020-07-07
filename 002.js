var nilai = prompt("Masukan angka : ");
var hasil = "";

nilai % 2==0  ? hasil = "GENAP" : hasil = "GANJIL";

document.write(`<p> ${nilai} adalah bilangan ${hasil}</p>`);


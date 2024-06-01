//take user input
let i = prompt();
//untuk mendifinisi apakah ini nomor atau bukan
if(Number(i) && typeof(i)!=NaN){
  if (-100<=i && i<=0){
    console.log("beku");
}
else if (1<=i && i<=100){
    console.log("cair");
}
else if (100<i && i<=500){
    console.log("uap");
}
else console.log("tidak terdefinisi")
}
else { console.log("Bukan nomor, silahkan ulang lagi")
}
let tipeKendaraan = prompt("tipe kendaraan? ");
let warnaPlat = prompt("Warna Plat? ");
let jumlahCC = prompt("Jumlah CC? ");
if(!isNaN(warnaPlat))
{
    console.log("input warna kendaraan tidak boleh dalam bentuk nilai angka")
}
else{
    // hanya menerima mobil atau motor
    if(warnaPlat.toLowerCase() === "kuning" || tipeKendaraan.toLowerCase() === "motor")
    {
        console.log("BBM Subsidi");
    }
    else if(tipeKendaraan.toLowerCase() === "mobil")
    {
        if(!isNaN(jumlahCC))
        {
            if(jumlahCC >= 1500)
            {
                console.log("Pertamax Turbo");
            }
            else{
                console.log("Pertamax");
            }
        }
        else{
            console.log("jumlah CC harus dalam bentuk angka");
        }
    }
    else{
        console.log("tipe kendaraan yang hanya diterima hanya mobil atau motor");
    }
}
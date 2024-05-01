const pilih = ['gunting', 'batu', 'kertas'];
const tampilanPemain = document.getElementById("tampilanPemain");
const tampilanKomputer = document.getElementById("tampilanKomputer");
const tampilanHasil = document.getElementById("tampilanHasil");
const tampilanSkorPemain = document.getElementById("tampilanSkorPemain");
const tampilanSkorKomputer = document.getElementById("tampilanSkorKomputer");
const tampilanSkorSeri = document.getElementById("tampilanSkorSeri");
let skorPemain = 0;
let skorKomputer = 0;
let skorSeri = 0; // tambahan variabel untuk menyimpan jumlah seri

function playGame(pemainPilih) {

    const komputerPilih = pilih[Math.floor(Math.random() * 3)];

    let result = "";

    if (pemainPilih === komputerPilih) {
        result = "Seri";
        skorSeri++; // Tambahkan jumlah seri jika permainan seri
    } else {
        switch (pemainPilih) {
            case "batu":
                result = (komputerPilih === "gunting") ? "LU MENANG" : "LU KALAH";
                break;
                case "kertas":
                    result = (komputerPilih === "batu") ? "LU MENANG" : "LU KALAH";
                    break;
            case "gunting":
                result = (komputerPilih === "kertas") ? "LU MENANG" : "LU KALAH";
                break;

        }
    }

    tampilanPemain.textContent = `PEMAIN : ${pemainPilih}`;
    tampilanKomputer.textContent = `KOMPUTER : ${komputerPilih}`;
    tampilanHasil.textContent = result;

    tampilanHasil.classList.remove("textHijau", "textMerah")

    switch (result) {
        case "LU MENANG":
            tampilanHasil.classList.add("textHijau");
            skorPemain++;
            break;
            case "LU KALAH":
                tampilanHasil.classList.add("textMerah");
                skorKomputer++;
                break;
        case "Seri" :
            tampilanHasil.classList.add("textKuning");
            break;    
        }

    tampilanSkorPemain.textContent = skorPemain;
    tampilanSkorKomputer.textContent = skorKomputer;
    // Tampilkan jumlah seri dan ubah warna seri menjadi kuning
    tampilanSkorSeri.textContent = skorSeri;
}
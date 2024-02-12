
function jam(){
  const waktu = document.getElementById("date");
  const tgl = document.getElementById("tanggal");

  arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const  date = new Date()
  detik = date.getSeconds();
  menit = date.getMinutes();
  jam = date.getHours();
  hari = date.getDay();
  tanggal = date.getDate();
  bulan = date.getMonth();
  tahun = date.getFullYear();
  tgl.textContent = `${tanggal}-${arrbulan[bulan]}-${tahun}`;
  waktu.textContent = `${jam}:${menit}:${detik} WIB`;
}

setInterval(jam, 1000);


const word = document.getElementById("word");

word.addEventListener("input", jumlahKata);
word.addEventListener("focusin", latarIn);
word.addEventListener("focusout", latarOut);

function jumlahKata(){
  const jumlah = document.getElementById("jumlah");
  let banyakKata = word.value;

  if(word.value == ""){
    jumlah.textContent = "Jumlah Kata Akan Muncul Disini";
    jumlah.style.color= "";
  }else{
    banyakKata = banyakKata.split(/[ \n,]+/).filter(Boolean);

    jumlah.textContent =  `\" ${banyakKata.length} Kata \"`;
  }
  
}

function latarIn(){
  word.style.backgroundColor = "#7a7575";
  word.style.color = "white";
}
function latarOut(){
  word.style.backgroundColor = "";
  word.style.color = "black"
}
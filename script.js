
// // jika nama pengunjung ingin disimpan di local gunakan kode ini


//     document.addEventListener("DOMContentLoaded", function() {
//       // Periksa apakah ada nama pengunjung yang disimpan di local storage
//       var visitorName = localStorage.getItem('visitorName');
//       var visitorNameElement = document.getElementById('visitorName');

//       // Jika ada, sambut pengunjung dengan nama mereka
//       if (visitorName) {
//         visitorNameElement.textContent = visitorName;
//       } else {
//         // Jika tidak ada, minta pengunjung untuk memasukkan nama mereka
//         var name = prompt("Hello! Siapa nama kamu?");
//         if (name != null && name != "") {
//           // Simpan nama pengunjung di local storage
//           // localStorage.setItem('visitorName', name);
//           // visitorNameElement.textContent = name;
//         }
//       }
//     });

// jika nama pengunjung tidak ingin disimpan di local gunakan kode ini

document.addEventListener("DOMContentLoaded", function() {
  // Minta pengunjung untuk memasukkan nama mereka
  var name = prompt("Hello there! What's your name?");
  var greetingElement = document.getElementById('visitorName');

  // Tampilkan nama pengunjung langsung di halaman
  if (name != null && name != "") {
    greetingElement.textContent = name;
  } else {
    greetingElement.textContent = "Hello! Welcome to our website.";
  }
});
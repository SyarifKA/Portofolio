
    document.addEventListener("DOMContentLoaded", function() {
      // Periksa apakah ada nama pengunjung yang disimpan di local storage
      var visitorName = localStorage.getItem('visitorName');
      var visitorNameElement = document.getElementById('visitorName');

      // Jika ada, sambut pengunjung dengan nama mereka
      if (visitorName) {
        visitorNameElement.textContent = visitorName;
      } else {
        // Jika tidak ada, minta pengunjung untuk memasukkan nama mereka
        var name = prompt("Hello! Siapa nama kamu?");
        if (name != null && name != "") {
          // Simpan nama pengunjung di local storage
          localStorage.setItem('visitorName', name);
          visitorNameElement.textContent = name;
        }
      }
    });
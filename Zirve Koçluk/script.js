// Telefon numarasına odaklanıldığında otomatik olarak (5 yazılır ve parantez kapanır)
document.getElementById("phone").addEventListener("focus", function () {
    let phoneInput = document.getElementById("phone");
    // Eğer kullanıcı telefon numarasını boş bırakırsa, başlangıç olarak "0 (5" yazacağız
    if (phoneInput.value === "") {
      phoneInput.value = "0 (5";
    }
  });
  

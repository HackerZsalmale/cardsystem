const form = document.getElementById("form");
if (localStorage.getItem("barid") === null) {
  document.getElementsByClassName("inputs")[0].style.display = "block";
  document.getElementById("submit").style.display = "visible";
  document.getElementById("title").innerText = "Ticket System"
} else {
    document.getElementsByClassName("inputs")[0].style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("title").innerText = "Regisztráció Sikeres!"
    document.getElementById("card").style.display = "block";
    document.getElementById("cardvalue-name").innerText = "Név: " + localStorage.getItem("name");
    document.getElementById("cardvalue-ceg").innerText = "Cég: " + localStorage.getItem("ceg");
    document.getElementById("cardvalue-email").innerText = "Email: " + localStorage.getItem("email");
    document.getElementById("barid").innerText = "Id: " + localStorage.getItem("barid");
}

form.addEventListener("submit", (event) => {
  submit(event);
});

function submit(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let ceg = document.getElementById("ceg").value;
  let email = document.getElementById("email").value;

  if (
    document.getElementById("name").value === "" ||
    document.getElementById("ceg").value === "" ||
    document.getElementById("email").value === ""
    
  ) {
    alert("Kérem töltse ki az összes mezőt!");
  } else {
    let barid = Math.floor(100000 + Math.random() * 900000)
    
    document.getElementsByClassName("inputs")[0].style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("title").innerText = "Regisztráció Sikeres!"

    document.getElementById("card").style.display = "block";
    document.getElementById("cardvalue-name").innerText = "Név: " + name;
    document.getElementById("cardvalue-ceg").innerText = "Cég: " + ceg;
    document.getElementById("cardvalue-email").innerText = "Email: " + email;
    document.getElementById("barid").innerText = "Id: " + barid;
    localStorage.setItem("barid", barid);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("ceg", ceg);
    
  }
}

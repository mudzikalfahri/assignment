const namatext = document.getElementById("namatext");
const roletext = document.getElementById("roletext");
const availabilitytext = document.getElementById("availabilitytext");
const agetext = document.getElementById("agetext");
const lokasitext = document.getElementById("lokasitext");
const experiencetext = document.getElementById("experiencetext");
const emailtext = document.getElementById("emailtext");
console.log(namatext);
const submitData = () => {
  const nama = document.getElementById("nama").value;
  const role = document.getElementById("role").value;
  const availability = document.getElementById("availability").value;
  const age = document.getElementById("age").value;
  const lokasi = document.getElementById("lokasi").value;
  const experience = document.getElementById("experience").value;
  const email = document.getElementById("email").value;

  namatext.innerHTML = nama;
  roletext.innerHTML = role;
  availabilitytext.innerHTML = availability;
  agetext.innerHTML = age;
  lokasitext.innerHTML = lokasi;
  experiencetext.innerHTML = experience;
  emailtext.innerHTML = email;
};

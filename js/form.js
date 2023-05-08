

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', closeForm);


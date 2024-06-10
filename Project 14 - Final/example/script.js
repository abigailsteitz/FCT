const shirtSelect = document.getElementById('shirtSelect');
const pantsSelect = document.getElementById('pantsSelect');
const shirtImage = document.getElementById('shirt');
const pantsImage = document.getElementById('pants');

shirtSelect.addEventListener('change', function() {
  shirtImage.src = this.value;
});

pantsSelect.addEventListener('change', function() {
  pantsImage.src = this.value;
});

const myModal = boostrap.Modal.getOrCreateInstance('#sampul-modal');

window.addEventListener('DOMContentLoaded', () => {
  myModal.show();
});

var myModalEl = document.getElementById('myModal')
var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance
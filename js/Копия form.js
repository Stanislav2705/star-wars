const MODAL_ACTIVE_CLASS = 'modal-active';

const callFormBtn = document.querySelector('#call-form-btn');

const modalForm = document.querySelector('#modal-form');
const modalSuccess = document.querySelector('#modal-success');

const form = document.querySelector('#modal-form form');

function closeModals(e) {
    e.preventDefault();

    modalForm.classList.remove(MODAL_ACTIVE_CLASS);
    modalSuccess.classList.remove(MODAL_ACTIVE_CLASS);
}

function openSuccessModal() {
    modalForm.classList.remove(MODAL_ACTIVE_CLASS);
    modalSuccess.classList.add(MODAL_ACTIVE_CLASS);

    const modalFormClose = document.querySelector('#modal-success-close');
    modalFormClose.addEventListener('click', closeModals);
};


function sendUserInfo(e) {
  e.preventDefault()
  const formData = new FormData(form);

  openSuccessModal();

  // fetch('/', {
  //   method: 'POST',
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: new URLSearchParams(formData).toString()
  // }).then(openSuccessModal);
}


callFormBtn.addEventListener('click', function () {
    modalForm.classList.add(MODAL_ACTIVE_CLASS);

    const modalFormClose = document.querySelector('#modal-form-close');
    modalFormClose.addEventListener('click', closeModals);

    form.addEventListener('submit', sendUserInfo);
});

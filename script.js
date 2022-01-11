const Modal = document.querySelector('.ModalWindow');
const ShowModal = document.querySelectorAll('.showModal');
const Overlay = document.querySelector('.Overlay');
const CloseButton = document.querySelector('.closebutton');
// premade functions
const OpenModal = function(){
    Modal.classList.remove('hidden');
    Overlay.classList.remove('hidden');
}
const closeModal = function(){
    Modal.classList.add('hidden');
    Overlay.classList.add('hidden');
}

// loop for 3 buttons 

for(let i = 0;i < ShowModal.length; i++){
    ShowModal[i].addEventListener('click',OpenModal);
}

CloseButton.addEventListener('click',closeModal);
Overlay.addEventListener('click',closeModal);


document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !Modal.classList.contains('hidden')){
        closeModal();
    }
});


document.addEventListener('keydown',function(any){
    if(any.key === 'k' && !Modal.classList.contains('hidden')){
       closeModal();
    }
})

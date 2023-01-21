let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme");
    }
    else {
        document.body.classList.remove("dark-theme");
    }
    
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible");

    emailjs.sendForm(
        'service_ksa4da8',
        'template_jo6kgth',
        event.target,
        'feXUToQm4IFaMM4m-'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on drclarke99@gmail.com"
        );
    });
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList.add("modal--open");
}
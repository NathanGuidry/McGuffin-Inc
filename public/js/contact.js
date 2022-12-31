const form = document.querySelector('#contactForm')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const subjectInput = document.querySelector('#subject')
const messageInput = document.querySelector('#message')
let successAlert = document.querySelector('.alert-success')
const warningAlert = document.querySelector('.alert-warning')
const dangerAlert = document.querySelector('.alert-danger')

function sendEmail(name, email, subject, message) {
    var data = {
        service_id: 'service_2qylbpk',
        template_id: 'template_ecza646',
        user_id: '59cJpfxRubJF_77Qq',
        template_params: {
            'name': name,
            'email': email,
            'subject': subject,
            'message': message
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        successAlert.classList.add('d-flex')
        successAlert.classList.add('justify-content-center')
        successAlert.classList.toggle('d-none')
    }).fail(function (error) {
        dangerAlert.classList.add('d-flex')
        dangerAlert.classList.add('justify-content-center')
        dangerAlert.classList.toggle('d-none')
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (successAlert === undefined) {
        warningAlert.classList.add('d-flex')
        warningAlert.classList.add('justify-content-center')
        warningAlert.classList.toggle('d-none')
    }
    else {
        sendEmail(nameInput.value, emailInput.value, subjectInput.value, messageInput.value)
    }

    nameInput.value = ''
    emailInput.value = ''
    subjectInput.value = ''
    messageInput.value = ''
})

successAlert.addEventListener('closed.bs.alert', () => {
    successAlert = undefined
})

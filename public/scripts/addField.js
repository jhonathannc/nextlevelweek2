document.querySelector('#add-time')
    .addEventListener('click', cloneField)

function cloneField() {
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
    const inputs = newFieldsContainer.querySelectorAll('input')
    inputs.forEach(function(input) {
        input.value = ''
    })
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
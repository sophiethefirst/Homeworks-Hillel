const registrationForm = document.getElementById('form');
const infoContainer = document.getElementById('info-container');
const fullName = document.getElementById('full-name').value;
const birthDate = document.getElementById('birth-date').value;
const gender = document.querySelector("input[name='gender']:checked").value;
const city = document.getElementById('city').value;
const address = document.getElementById('address').value;
const languages = document.querySelectorAll('.languages:checked');
const selectedLanguages = [];

languages.forEach(item => {
    selectedLanguages.push(item.value);
});

const showUserInfo = () => {
    const displayedInfo = document.createElement('div');
    displayedInfo.innerHTML = `
        <p>Name: ${fullName}</p>
        <p>Birth date: ${birthDate}</p>
        <p>Gender: ${gender}</p>
        <p>City: ${city}</p>
        <p>Address: ${address}</p>
        <p>Languages: ${selectedLanguages}</p>
    `
    infoContainer.append(displayedInfo);
    return displayedInfo;
};

const hideForm = () => {
    registrationForm.style.display = 'none';
}

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    hideForm();
    showUserInfo();
})
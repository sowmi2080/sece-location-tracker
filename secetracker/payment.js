const form = document.querySelector('#paymentForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const rollnoInput = document.getElementById('rollNo');
    const feesInput = document.getElementById('fees');
    const ondateInput = document.getElementById('onDate');
    const districtSelect = document.getElementById('place');

    if (!rollnoInput.value || !feesInput.value || !ondateInput.value || !districtSelect.value) {
        alert('Please fill in all required fields.');
        return;
    }

    // Additional form validation logic can be added here

    // If all validations pass, you can proceed to checkout or submit the form
    alert('Form submitted successfully. Proceeding to checkout...');
    // Add your checkout logic here
});

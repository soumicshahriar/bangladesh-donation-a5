// toggle button
function toggleButton(id) {
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


// add donation
function addDonation(id) {
    const currentDonation = document.getElementById(id).value;
    const currentDonationNumber = parseFloat(currentDonation);
    return currentDonationNumber;
}

function updateDonation(id) {
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateStorage(id) {
   const donationStorage = document.getElementById('donation-storage');
   const donationStorageNumber = parseFloat(donationStorage.innerText);
   return donationStorageNumber;
}
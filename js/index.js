document.getElementById('noakhali-donation-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const currentDonation = addDonation('input-noakhali-donation');
    const currentDonationNumber = updateDonation('noakhali-donation');
    const donationStorageNumber = updateStorage('donation-storage');
    const currentDonationReason = document.getElementById('noakhali-donation-reason').innerText;
    const currenTime = new Date();

    if (currentDonation > donationStorageNumber || currentDonation <= 0) {
        alert('You have no enough balance');
        return;
    }

    // ✅ Open the modal by checking the checkbox
    document.getElementById('my_modal_6').checked = true;

    const okBtn = document.getElementById('okBtn');

    // Remove previous listeners to avoid duplicate entries
    const newOkBtn = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);

    newOkBtn.addEventListener('click', function () {
        // ✅ Perform donation updates AFTER clicking OK
        const totalDonation = currentDonationNumber + currentDonation;
        const totalDonationStorage = donationStorageNumber - currentDonation;

        document.getElementById('noakhali-donation').innerText = totalDonation;
        document.getElementById('donation-storage').innerText = totalDonationStorage;

        const div = document.createElement('div');
        div.classList.add('card', 'bg-base-100', 'shadow-sm', 'p-2', 'my-4');
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${currentDonation} TK is ${currentDonationReason}</h2>
                <p>Date: ${currenTime.toLocaleString()}</p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);
    });
});



document.getElementById('feni-donation-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const currentDonation = addDonation('input-feni-donation');
    const currentDonationNumber = updateDonation('feni-donation');
    const donationStorageNumber = updateStorage('donation-storage');
    const currentDonationReason = document.getElementById('feni-donation-reason').innerText;
    const currenTime = new Date();
    // const currentTimeString = currenTime.toLocaleString();
    if (currentDonation > donationStorageNumber || currentDonation <= 0) {
        alert('You have no enough balance');
        return;
    }

    // ✅ Open the modal by checking the checkbox
    document.getElementById('my_modal_6').checked = true;

    const okBtn = document.getElementById('okBtn');

    // Remove previous listeners to avoid duplicate entries
    const newOkBtn = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);

    newOkBtn.addEventListener('click', function () {
        // ✅ Perform donation updates AFTER clicking OK
        const totalDonation = currentDonationNumber + currentDonation;
        const totalDonationStorage = donationStorageNumber - currentDonation;

        document.getElementById('feni-donation').innerText = totalDonation;
        document.getElementById('donation-storage').innerText = totalDonationStorage;

        const div = document.createElement('div');
        div.classList.add('card', 'bg-base-100', 'shadow-sm', 'p-2', 'my-4');
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${currentDonation} TK is ${currentDonationReason}</h2>
                <p>Date: ${currenTime.toLocaleString()}</p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);
    });
});



document.getElementById('quota-donation-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const currentDonation = addDonation('input-quota-donation');
    const currentDonationNumber = updateDonation('quota-donation');
    const donationStorageNumber = updateStorage('donation-storage');
    const currentDonationReason = document.getElementById('quota-donation-reason').innerText;
    const currenTime = new Date();
    // const currentTimeString = currenTime.toLocaleString();
    if (currentDonation > donationStorageNumber || currentDonation <= 0) {
        alert('You have no enough balance');
        return;
    }

    document.getElementById('my_modal_6').checked = true;
    const okBtn = document.getElementById('okBtn');
    const newOkBtn = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);

    newOkBtn.addEventListener('click', function () {
        const totalDonation = currentDonationNumber + currentDonation;
        const totalDonationStorage = donationStorageNumber - currentDonation;

        document.getElementById('quota-donation').innerText = totalDonation;
        document.getElementById('donation-storage').innerText = totalDonationStorage;

        const div = document.createElement('div');
        div.classList.add('card', 'bg-base-100', 'shadow-sm', 'p-2', 'my-4');
        div.innerHTML = `
        <div class="card-body">
            <h2 class="card-title"> ${currentDonation} TK is ${currentDonationReason} </h2>
            <p>Date: ${currenTime}</p>
        </div>
    `;
        document.getElementById('history-container').appendChild(div);
    })

})

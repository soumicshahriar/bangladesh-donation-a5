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

//blog section
// Load the navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Now that the navbar is in the DOM, you can safely query it
        const currentPage = window.location.href.split("/").pop();
        console.log("Current Page:", currentPage);

        const navLink = document.getElementById('blog-btn');
        console.log("navLink:", navLink);

        if (navLink) {
            if (currentPage === "blog.html") {
                navLink.textContent = "Index";
                navLink.href = "index.html";
            } else {
                navLink.textContent = "Blog";
                navLink.href = "blog.html";
            }
        }
    });









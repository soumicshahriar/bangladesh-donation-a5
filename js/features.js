document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('donation-btn').classList.add('selected');
    document.getElementById('history-btn').classList.remove('selected');
    toggleButton('donation-container');
});

document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-btn').classList.add('selected');
    document.getElementById('donation-btn').classList.remove('selected');
    toggleButton('history-container');
})





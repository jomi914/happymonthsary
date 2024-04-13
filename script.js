let fontSize = 1.5;

document.getElementById('noBtn').addEventListener('click', function() {
    fontSize += 0.1;
    document.getElementById('yesBtn').style.fontSize = `${fontSize}em`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('heartGif').classList.add('hidden');
    document.getElementById('question').classList.add('hidden');
    document.getElementById('noBtn').classList.add('hidden');
    document.getElementById('yesBtn').classList.add('hidden');
    document.getElementById('message').classList.remove('hidden');
});

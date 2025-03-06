//create a array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong','game over'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    //add a listener to a button
    btn.addEventListener('click', () => {
       stopSounds();
        document.getElementById(sound).play();
    });
    document.getElementById('buttons').appendChild(btn);
});

//Helper Sounds stop sounds from overlapping
function stopSounds() {
    sounds.forEach((sound) => {
        const snd = document.getElementById(sound);

        snd.pause();
        snd.currentTime = 0;
    });
}

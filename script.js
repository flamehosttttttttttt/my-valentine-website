document.addEventListener("DOMContentLoaded", () => {
    const config = window.VALENTINE_CONFIG;

    // Set page title
    document.getElementById("pageTitle").innerText = config.pageTitle;

    // Elements
    const questionEl = document.getElementById("question");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const secretMessageEl = document.getElementById("secretMessage");
    const nextBtn = document.getElementById("nextBtn");
    const loveMeter = document.getElementById("loveMeter");
    const loveMessage = document.getElementById("loveMessage");
    const celebrationEl = document.getElementById("celebration");
    const bgMusic = document.getElementById("bgMusic");

    // Load music
    if (config.music.enabled) {
        bgMusic.src = config.music.musicUrl;
        bgMusic.volume = config.music.volume;
        if (config.music.autoplay) {
            bgMusic.play().catch(() => {});
        }
    }

    // Show first question
    let step = 1;
    function showStep() {
        if(step === 1) {
            questionEl.innerText = config.first.text;
            yesBtn.innerText = config.first.yesBtn;
            noBtn.innerText = config.first.noBtn;
            yesBtn.onclick = () => nextStep();
            noBtn.onclick = () => secretMessageEl.innerText = config.first.secretAnswer;
            nextBtn.style.display = "none";
        } else if(step === 2) {
            questionEl.innerText = config.second.text;
            yesBtn.innerText = config.second.startText;
            yesBtn.onclick = () => nextStep();
            noBtn.style.display = "none";
            nextBtn.innerText = config.second.nextBtn;
            nextBtn.style.display = "inline-block";
            nextBtn.onclick = () => nextStep();
        } else if(step === 3) {
            questionEl.innerText = config.third.text;
            yesBtn.innerText = config.third.yesBtn;
            noBtn.innerText = config.third.noBtn;
            yesBtn.onclick = () => showCelebration();
            noBtn.onclick = () => alert("Oh no 😢");
            nextBtn.style.display = "none";
        }
    }

    function nextStep() {
        step++;
        showStep();
    }

    function showCelebration() {
        questionEl.style.display = "none";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        nextBtn.style.display = "none";
        celebrationEl.innerText = "🎉 YAY! You made me so happy! 💖";
    }

    showStep();
});

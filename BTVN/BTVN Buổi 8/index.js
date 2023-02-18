function Clock(element) {
    this.element = element;
    this.intervalId = null;
    this.time = 0;
}

Clock.prototype.updateLabel = function () {
    const minutes = Math.floor(this.time / 6000);
    const seconds = Math.floor(this.time / 100) % 60;
    const hundredths = this.time % 100;
    this.element.querySelector("label").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(hundredths).padStart(2, '0')}`;
};

Clock.prototype.start = function () {
    this.intervalId = setInterval(() => {
        this.time += 1;
        this.updateLabel();
    }, 10);
};

Clock.prototype.pause = function () {
    clearInterval(this.intervalId);
    this.intervalId = null;
};

Clock.prototype.stop = function () {
    this.pause();
    this.time = 0;
    this.updateLabel();
};

const clock1 = new Clock(document.querySelector(".clock:nth-of-type(1)"));
const clock2 = new Clock(document.querySelector(".clock:nth-of-type(2)"));
const clock3 = new Clock(document.querySelector(".clock:nth-of-type(3)"));

function startAllClocks() {
    clock1.start();
    clock2.start();
    clock3.start();
}

function pauseAllClocks() {
    clock1.pause();
    clock2.pause();
    clock3.pause();
}

function stopAllClocks() {
    clock1.stop();
    clock2.stop();
    clock3.stop();
}

document.querySelector("#start1").addEventListener("click", () => {
    clock1.start();
});
document.querySelector("#pause1").addEventListener("click", () => {
    clock1.pause();
});
document.querySelector("#stop1").addEventListener("click", () => {
    clock1.stop();
});

document.querySelector("#start2").addEventListener("click", () => {
    clock2.start();
});
document.querySelector("#pause2").addEventListener("click", () => {
    clock2.pause();
});
document.querySelector("#stop2").addEventListener("click", () => {
    clock2.stop();
});

document.querySelector("#start3").addEventListener("click", () => {
    clock3.start();
});
document.querySelector("#pause3").addEventListener("click", () => {
    clock3.pause();
});
document.querySelector("#stop3").addEventListener("click", () => {
    clock3.stop();
});

document.querySelector("#start-all").addEventListener("click", startAllClocks);
document.querySelector("#pause-all").addEventListener("click", pauseAllClocks);
document.querySelector("#stop-all").addEventListener("click", stopAllClocks);
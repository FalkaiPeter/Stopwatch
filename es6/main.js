class Stopwatch {
  constructor() {
    this.timer = null;
    this.display = { h: 0, m: 0, s: 0, ms: 0 };
    this.isRunning = false;
    this.splits = 0;
  }

  startStop = () => (this.isRunning = this.isRunning ? this.stop() : this.start());

  format = () => {
    const pad = n => `${this.display[n] + 100}`.substring(1);
    return `${pad("h")}:${pad("m")}:${pad("s")}:${pad("ms")}`;
  };

  start = () => {
    this.timer = setInterval(this.update, 10);
    document.getElementById("startPause").innerHTML = "Stop";
    return true;
  };

  stop = () => {
    this.isRunning = false;
    clearInterval(this.timer);
    document.getElementById("startPause").innerHTML = "Start";
  };

  reset = () => {
    this.display = { h: 0, m: 0, s: 0, ms: -1 };
    this.splits = 0;
    this.stop();
    this.update();
    document.getElementById("splits").innerHTML = "";
  };

  splitTime = () => {
    this.splits++;
    document.getElementById("splits").innerHTML += `<br>${this.splits}. ${this.format()}`;
  };

  update = () => {
    const tick = (lo, up, br) => {
      if (this.display[lo] / br == 1) {
        this.display[up]++;
        this.display[lo] = 0;
      }
    };

    this.display.ms++;
    tick("ms", "s", 100);
    tick("s", "m", 60);
    tick("m", "h", 60);

    document.getElementById("display").innerHTML = this.format();
    document.getElementById("s").style.transform = `rotateZ(${this.display.s * 6}deg)`;
  };
}

const stopWatch = new Stopwatch();

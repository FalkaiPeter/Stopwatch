var ms = (s = m = h = 0);
var timer;
var running = false;
var splits = 0;

function startPause() {
  if (!running) {
    timer = window.setInterval(update, 10);
    document.getElementById("startPause").innerHTML = "Stop";
    running = true;
  } else pause();
}

function pause() {
  running = false;
  clearInterval(timer);
  document.getElementById("startPause").innerHTML = "Start";
}

function reset() {
  ms = s = m = h = splits = 0;
  ms--;
  pause();
  update();
  document.getElementById("splits").innerHTML = "";
}

function splitTime() {
  splits++;
  document.getElementById("splits").innerHTML += `<br>${splits}. ${pad(h)}:${pad(m)}:${pad(s)}:${pad(ms)}`;
}

function pad(n) {
  return `${n + 100}`.substring(1);
}

function update() {
  ms++;
  if (ms / 100 == 1) {
    s++;
    ms = 0;
  }
  if (s / 60 == 1) {
    m++;
    s = 0;
  }
  if (m / 60 == 1) {
    h++;
    m = 0;
  }

  document.getElementById("display").innerHTML = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(ms)}`;
  document.getElementById("s").style.transform = `rotateZ(${s * 6}deg)`;
}

/* var StopWatch = function () {
  this.ms = 0;
  this.s = 0;
  this.m = 0;
  this.h = 0;
  this.splits = 0;
  this.timer = null;
  this.isRunning = false;
};

StopWatch.prototype.startStop = function () {
  return (this.isRunning = this.isRunning ? this.stop() : this.start());
};

StopWatch.prototype.start = function () {
  this.timer = setInterval(this.update, 10);
  document.getElementById("startPause").innerHTML = "Stop";
  console.log(this);
  return true;
};

StopWatch.prototype.stop = function () {
  clearInterval(this.timer);
  document.getElementById("startPause").innerHTML = "Start";
  console.log(this);
  return false;
};

StopWatch.prototype.reset = function () {
  this.ms = -1;
  this.s = 0;
  this.m = 0;
  this.h = 0;
  this.splits = 0;
  this.pause();
  this.update();
  document.getElementById("splits").innerHTML = "";
};

StopWatch.prototype.splitTime = function () {
  this.splits++;
  document.getElementById("splits").innerHTML += "<br>" + this.splits + ". " + this.format();
};

StopWatch.prototype.format = function () {
  function pad(n) {
    return (this[n] + 100).substring(1);
  }

  return pad("h") + pad("m") + pad("s") + pad("ms");
};

StopWatch.prototype.update = function () {
  function tick(parent, lo, up, br) {
    if (parent[lo] / br == 1) {
      parent[up]++;
      parent[lo] = 0;
    }
  }
  this.ms++;
  tick(this, "ms", "s", 100);
  tick(this, "s", "m", 60);
  tick(this, "m", "h", 60);
  

  //document.getElementById("display").innerHTML = this.format();
  //document.getElementById("s").style.transform = "rotateZ(" + s * 6 + "deg)";
};

var stopWatch = new StopWatch();
console.log(stopWatch); */

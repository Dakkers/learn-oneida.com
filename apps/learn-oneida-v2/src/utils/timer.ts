export class Timer {
  time = 0;
  remainingTime = 0;
  callback: () => void;
  timeoutObj: ReturnType<typeof setTimeout> | null = null;

  now: number = new Date().getTime();

  constructor(time: number, callback: () => void, autoRun = true) {
    this.time = time;
    this.remainingTime = time;
    this.callback = callback;

    if (autoRun) {
      this.run();
    }
  }

  reset(autoRun = true) {
    this.remainingTime = this.time;
    if (autoRun) {
      this.run();
    }
  }

  run() {
    if (this.remainingTime <= 0) {
      return;
    }

    this.now = new Date().getTime();

    this.timeoutObj = setTimeout(() => {
      this.callback();
      this.remainingTime = 0;
      this.timeoutObj = null;
    }, this.remainingTime);
  }

  pause() {
    const duration = new Date().getTime() - this.now;
    this.remainingTime = this.remainingTime - duration;
    this.cleanup();
  }

  cleanup() {
    if (this.timeoutObj) {
      clearTimeout(this.timeoutObj);
    }
  }
}

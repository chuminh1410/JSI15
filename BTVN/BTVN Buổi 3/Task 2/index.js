// Task 2

class ExtendedClock {
    constructor({ template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let milsecs = date.getMilliseconds();
        if (milsecs < 10) milsecs = '0' + milsecs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
            .replace('ms', milsecs)

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000)
    }
}

var clock = new ExtendedClock({template :'h:m:s:ms'});
clock.start();  
//time declaration
const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const day = time.getDay();
const month = time.getMonth();

/* 
console.log (time,'time')
console.log(hours, 'hours');
console.log(minutes, 'minutes');
console.log(seconds, 'seconds');
console.log(month,'month')
console.log(day,'day'); */

//module.exports = 'Hello World!';

const object = {
    time:time,
    hours:hours,
    minutes:minutes,
    seconds:seconds,
    month:month,
    day:day
}

module.exports = object;
//module.exports = time;
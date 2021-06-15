const schedule = require('node-schedule');

const date = new Date(Date.now());

const job = schedule.scheduleJob(date + 10, () => {
    console.log('hello?');
});

const rule = new schedule.RecurrenceRule();
rule.second = 5;

const job2 = schedule.scheduleJob(rule, () => {
    console.log('job2');
});

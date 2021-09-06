const {Heap} = require('heap-js');

class Job {
    constructor(name, deadline, profit) {
        this.id =  '_'+Math.random().toString(36).substr(2, 9);
        this.name = name;
        this.deadline =  parseInt(deadline, 10);;
        this.profit = parseInt(profit, 10);
    }
}

const scheduleJobs = (jobs) => {
    const sortedJobs = jobs.slice().sort((a, b) => a.deadline - b.deadline);
    const maxHeap = new Heap((a, b) => b.deadline - a.deadline);
    const result = [];

    for (let i = jobs.length - 1; i >= 0; i--) {
        let slots = 0;
        if (i === 0) {
            slots = sortedJobs[i].deadline;
        }
        else {
            slots = sortedJobs[i].deadline - sortedJobs[i - 1].deadline;
        }
        maxHeap.push({
            profit: -sortedJobs[i].profit,
            ...sortedJobs[i]
        });
        while (slots && maxHeap.size()) {
            const job = maxHeap.pop();
            slots--;
            result.push(job);
        }
    }
    result.sort((a, b) => a.deadline - b.deadline);
    return {
        scheduledJobs: result,
        profit: result.reduce((acc, job) => acc + job.profit, 0)
    };
}

module.exports = {
    Job,
    scheduleJobs
}
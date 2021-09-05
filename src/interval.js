class Job {
    constructor(name, deadline, profit) {
        this.id =  '_'+Math.random().toString(36).substr(2, 9);
        this.name = name;
        this.deadline =  parseInt(deadline, 10);;
        this.profit = parseInt(profit, 10);
    }
}

const scheduleJobs = (jobs, T) => {
    let profit = 0;
    let slot = new Array(T).fill(-1);
    jobs.sort((a, b) => b.profit - a.profit);
    for (let job of jobs) {
        for (let j = job.deadline - 1; j >= 0; j--) {
            if (j < T && slot[j] == -1) {
                slot[j] = job.id;
                profit += job.profit;
                break;
            }
        }
    }
    const jobsIds = slot.filter(val => val != -1).map(val => val);
    const scheduledJobs = jobsIds.map(id => jobs.find(job => job.id == id));

    return {
        scheduledJobs,
        profit
    }
}

module.exports = {
    Job,
    scheduleJobs
}
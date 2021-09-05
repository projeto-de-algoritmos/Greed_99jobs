class Job {
    constructor(name, deadline, profit) {
        this.id =  '_'+Math.random().toString(36).substr(2, 9);
        this.name = name;
        this.deadline =  parseInt(deadline, 10);;
        this.profit = parseInt(profit, 10);
    }
}

module.exports = {
    Job,
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Busymanager {
    constructor() {
        this.message = '';
        this.lastId = 0;
        this.tasks = [];
    }
    AddBusyTask(taskdescription) {
        const newTask = new Busytask(this.lastId++, taskdescription);
        this.tasks.push(newTask);
        if (this.tasks.length === 1) {
            this.busy = new Promise((resolve, reject) => {
                this._displayBusyResolve = resolve;
            });
        }
        this.message = this.tasks.reduce((prev, curr) => {
            prev += curr.Message() + '; ';
            return prev;
        }, '');
        return newTask.id;
    }
    ;
    RemoveBusyTask(taskid) {
        const taskIndex = this.tasks.findIndex((a) => a.id === taskid);
        if (taskIndex < 0) {
            throw new Error(`Busymanager.RemoveBusyTask: task with id ${taskid} not found`);
        }
        this.tasks.splice(taskIndex, 1);
        if (this.tasks.length === 0) {
            if (this._displayBusyResolve === null) {
                console.log(`Busymanager.RemoveBusyTask: _displayBusyResolve === null ERROR this should never happen`);
                throw new Error('RemoveBusyTask failed');
            }
            this._displayBusyResolve();
            this._displayBusyResolve = null;
        }
    }
    ;
}
exports.Busymanager = Busymanager;
class Busytask {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
    Message() {
        return `${this.id}: ${this.description}`;
    }
}

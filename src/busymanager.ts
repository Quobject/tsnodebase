
export class Busymanager {
  public busy: Promise<any>;
  public message: string = '';
  private lastId = 0;
  private tasks: Busytask[] = [];
  //private busyPromise: Promise<void>;
  private _displayBusyResolve: any;

  public AddBusyTask(taskdescription: string): number {
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
  };

  public RemoveBusyTask(taskid: number): void {
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
      this._displayBusyResolve = null
    }
  };

}

class Busytask {
  constructor(public id: number, public description: string) { }

  public Message(): string {
      return `${this.id}: ${this.description}`
  }

}

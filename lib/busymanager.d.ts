export declare class Busymanager {
    busy: Promise<any>;
    message: string;
    private lastId;
    private tasks;
    private _displayBusyResolve;
    AddBusyTask(taskdescription: string): number;
    RemoveBusyTask(taskid: number): void;
}

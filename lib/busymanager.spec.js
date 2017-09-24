"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const busymanager_1 = require("./busymanager");
describe('Busymanager', () => {
    beforeEach(() => {
        //TestBed.configureTestingModule({
        //  providers: [ConfigService]
        //});
    });
    it('should create instance', () => {
        const busyManager = new busymanager_1.Busymanager();
        expect(busyManager).toBeTruthy();
        expect(busyManager.busy).toBeUndefined();
        expect(busyManager.message).toBe('');
    });
    it('should add task', () => {
        const busyManager = new busymanager_1.Busymanager();
        const taskDescription = 'loading pages';
        busyManager.AddBusyTask(taskDescription);
        expect(busyManager.busy).toBeTruthy();
        expect(busyManager.message).toBe('0: loading pages; ');
    });
    it('should not', () => {
        //expect(false).toBeTruthy();
    });
});

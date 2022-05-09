const Manager = require('../lib/Manager');

describe('Manger', () => {
    describe('Initialization', () => {
        it('should set office number via constructor arguments', () => {
            const officeNumber = 999;
            const manager = new Manager('John', 123, 'john@gmail.com', officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });
    describe('Get methods', () => {
        it('shoud get office number via getOfficeNumber()', () => {
            const officeNumber = 999;
            const manager = new Manager('John', 123, 'john@gmail.com', officeNumber);
            const managerOfficeNumber = manager.getOfficeNumber();
            expect(managerOfficeNumber).toBe(officeNumber);
        });
        it('should get role via getRole()', () => {
            const role = 'Manager';
            const manager = new Manager('John', 123, 'john@gmail.com', 999);
            const managerRole = manager.getRole();
            expect(managerRole).toBe(role);
        });
    });
});
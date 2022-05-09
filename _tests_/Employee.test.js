const { hasUncaughtExceptionCaptureCallback, getMaxListeners } = require("process");
const { isTypedArray } = require("util/types");
const Employee = require("../lib/Employee");
const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe('Initialization', () => {
        it('can instantiate Employee instance', () => {
            const employee = new Employee();
            expect(typeof(employee)).toBe('object');
        });
        it('should set name via constructor arguments', () => {
            const name = 'John';
            const Employee = new Employee(name);
            expect(employee.name).toBe(name);
        });
        it('should set id via constructor arguments', () => {
            const id = 123;
            const employee = new Employee('John', id);
            expect(employee.id).toBe(id);
        });
        it('should set email via constructor arguments', () => {
            const email = 'john@gmail.com';
            const employee = new Employee('John', 123, email);
            expect(employee.email).toBe(email);
        });
    });
    describe('Get methods', () => {
        it('should get name via getName()', () => {
            const name = 'John';
            const employee = new Employee(name, 123, 'john@gmail.com');
            const employeeName = employee.getName();
            expect(employeeName).toBe(name);
        });
        it('should get id via getId()', () => {
            const id = 123;
            const employee = new Employee('John', id, 'john@gmail.com');
            const employeeId = employee.getId();
            expect(employeeId).toBe(id);
        });
        it('shoud get email via getEmail()', () => {
            const email = 'john@gmail.com';
            const employee = new Employee('John', 123, email);
            const employeeEmail = employee.getEmail();
            expect(employeeEmail).toBe(email);
        });
        it('should get role via getRole()', () => {
            const role = 'Employee';
            const employee = new Employee('John', 123, 'john@gmail.com');
            const employeeRole = employee.getRole();
            expect(employeeRole).toBe(role);
        });
    })
})
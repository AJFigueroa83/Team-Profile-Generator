const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should set school via constructor arguments', () => {
            const school = 'georgiatech';
            const intern = new Intern('John', 123, 'john@gmail.com', school);
            expect(intern.school).toBe(school);
        });
    });
    describe('Get methods', () => {
        it('should get school via getSchool()', () => {
            const school = 'georgiatech';
            const intern = new Intern("John", 123, 'john@gmail.com', school);
            const internSchool = intern.getSchool();
            expect(internSchool).toBe(school);
        });
        it('should get role via GetRole()', () => {
            const role = 'Intern';
            const intern = new Intern('John', 123, 'john@gmail.com', 'georgiatech');
            const internRole = intern.getRole();
            expect(internRole).toBe(role);    
        });
    });
});
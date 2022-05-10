const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should set github via constructor arguments', () => {
            const github = 'AJFigueroa83';
            const engineer = new Engineer('John', 123, 'john@gmail.com', github);
            expect(engineer.github).toBe(github);
        });
    });
    describe('Get methods', () => {
        it('should get github via getGithub()', () => {
            const github = 'AJFigueroa83';
            const engineer = new Engineer('John', 123, 'john@gmail.com', github);
            const engineerGithub = engineer.getGitHub();
            expect(engineerGithub).toBe(github);
        });
        it('should get role via getRole()', () => {
            const role = 'Enginner';
            const engineer = new Engineer('John', 123, 'john@gmail.com', 'AJFigueroa83');
            const engineerRole = engineer.getRole();
            expect(engineerRole).toBe(role);
        });
    });
});
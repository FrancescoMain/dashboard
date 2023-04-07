export const generateRole = (employeeRole: string, roles: Array<string>) => {
    return employeeRole = roles[Math.floor(Math.random()*roles.length)];
}
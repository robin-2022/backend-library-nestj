"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const employees_repository_1 = require("./employees.repository");
let EmployeesService = class EmployeesService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async create(createEmployee) {
        try {
            const response = this.employeeRepository.save(createEmployee);
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAll() {
        const response = this.employeeRepository.findAll();
        return response;
    }
    async findBy(name) {
        const response = this.employeeRepository.findByName(name);
        return response;
    }
    async update(id, employee) {
        try {
            const response = this.employeeRepository.update(id, employee);
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async remove(id) {
        try {
            const response = this.employeeRepository.remove(id);
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [employees_repository_1.EmployeesRepository])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map
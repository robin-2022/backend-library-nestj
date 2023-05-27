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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EmployeesRepository = class EmployeesRepository {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }
    async save(employee) {
        try {
            const newEmployee = this.employeeModel.create(employee);
            return newEmployee;
        }
        catch (error) {
            return error;
        }
    }
    async update(id, employee) {
        try {
            const updatedEmployee = await this.employeeModel.findByIdAndUpdate(id, employee);
            return updatedEmployee;
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            const employees = await this.employeeModel.find();
            return employees;
        }
        catch (error) {
            return error;
        }
    }
    async findById(id) {
        try {
            const employee = await this.employeeModel.findById(id);
            return employee;
        }
        catch (error) {
            return error;
        }
    }
    async findByName(name) {
        try {
            const employee = await this.employeeModel.findOne({ name: name }).exec();
            return employee;
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            await this.employeeModel.findByIdAndDelete(id);
            return {};
        }
        catch (error) {
            return error;
        }
    }
};
EmployeesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Employee')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmployeesRepository);
exports.EmployeesRepository = EmployeesRepository;
//# sourceMappingURL=employees.repository.js.map
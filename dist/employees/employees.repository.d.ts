import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './entities/employee.entity';
export declare class EmployeesRepository {
    private employeeModel;
    constructor(employeeModel: Model<EmployeeDocument>);
    save(employee: Employee): Promise<any>;
    update(id: string, employee: Employee): Promise<any>;
    findAll(): Promise<any>;
    findById(id: string): Promise<any>;
    findByName(name: string): Promise<any>;
    remove(id: string): Promise<any>;
}

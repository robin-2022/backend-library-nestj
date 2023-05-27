import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';
export declare class EmployeesController {
    private employeesService;
    constructor(employeesService: EmployeesService);
    create(employee: Employee): Promise<any>;
    findAll(): Promise<any>;
    findByName(name: string): Promise<any>;
    update(id: string, employee: Employee): Promise<any>;
    remove(id: string): Promise<any>;
}

import { EmployeesRepository } from './employees.repository';
import { Employee } from './entities/employee.entity';
export declare class EmployeesService {
    private employeeRepository;
    constructor(employeeRepository: EmployeesRepository);
    create(createEmployee: Employee): Promise<any>;
    findAll(): Promise<any>;
    findBy(name: string): Promise<any>;
    update(id: string, employee: Employee): Promise<any>;
    remove(id: string): Promise<any>;
}

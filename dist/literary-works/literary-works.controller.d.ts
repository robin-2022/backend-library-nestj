import { LiteraryWorksService } from './literary-works.service';
import { CreateLiteraryWorkDto } from './dto/create-literary-work.dto';
export declare class LiteraryWorksController {
    private readonly literaryWorksService;
    constructor(literaryWorksService: LiteraryWorksService);
    create(createLiteraryWorkDto: CreateLiteraryWorkDto): Promise<import("./entities/literary-work.entity").LiteraryWork>;
    findAll(): Promise<import("./entities/literary-work.entity").LiteraryWork[]>;
    findOne(id: string): Promise<import("./entities/literary-work.entity").LiteraryWork>;
    update(id: string, updateLiteraryWork: CreateLiteraryWorkDto): Promise<CreateLiteraryWorkDto>;
    remove(id: string): Promise<any>;
}

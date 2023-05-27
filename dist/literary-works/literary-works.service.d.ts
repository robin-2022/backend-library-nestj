import { CreateLiteraryWorkDto } from './dto/create-literary-work.dto';
import { LiteraryWork } from './entities/literary-work.entity';
import { LiteraryWorksRepository } from './literary-works.repository';
import { LiteraryCategoryService } from '../literary-category/literary-category.service';
export declare class LiteraryWorksService {
    private readonly literaryWorksRepository;
    private readonly literaryCategoryService;
    constructor(literaryWorksRepository: LiteraryWorksRepository, literaryCategoryService: LiteraryCategoryService);
    create(createLiteraryWorkDto: CreateLiteraryWorkDto): Promise<LiteraryWork>;
    findAll(): Promise<LiteraryWork[]>;
    findAmount(title: string): Promise<any>;
    findOne(id: string): Promise<LiteraryWork>;
    update(id: string, literaryWork: CreateLiteraryWorkDto): Promise<CreateLiteraryWorkDto>;
    setStatus(id: string, status: string): Promise<any>;
    remove(id: string): Promise<any>;
}

import { LiteraryWork, LiteraryWorkDocument } from './entities/literary-work.entity';
import { Model } from 'mongoose';
import { CreateLiteraryWorkDto } from './dto/create-literary-work.dto';
export declare class LiteraryWorksRepository {
    private model;
    constructor(model: Model<LiteraryWorkDocument>);
    create(literaryWork: LiteraryWork): Promise<LiteraryWork>;
    findAll(): Promise<LiteraryWork[]>;
    findOne(id: string): Promise<LiteraryWork>;
    findByTitle(title: string): Promise<LiteraryWork[]>;
    update(id: string, literaryWork: CreateLiteraryWorkDto): Promise<CreateLiteraryWorkDto>;
    updateStatus(id: string, status: string): Promise<LiteraryWork>;
    delete(id: string): Promise<any>;
}

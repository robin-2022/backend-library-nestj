import { Model } from 'mongoose';
import { LiteraryCategory } from './entities/literary-category.entity';
import { LiteraryCategoryDocument } from './entities/literary-category.entity';
export declare class LiteraryCategoryRepository {
    private model;
    constructor(model: Model<LiteraryCategoryDocument>);
    create(category: LiteraryCategory): Promise<LiteraryCategory>;
    update(category: LiteraryCategory): Promise<LiteraryCategory | any>;
    findAll(): Promise<LiteraryCategory[]>;
    findByName(description: string): Promise<any>;
    remove(id: string): Promise<{}>;
}

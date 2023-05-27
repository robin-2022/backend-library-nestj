import { Model } from 'mongoose';
import { ReaderCategory } from './entities/reader-category.entity';
import { ReaderCategoryDocument } from './entities/reader-category.entity';
export declare class ReaderCategoryRepository {
    private model;
    constructor(model: Model<ReaderCategoryDocument>);
    create(category: ReaderCategory): Promise<ReaderCategory>;
    update(id: string, category: ReaderCategory): Promise<ReaderCategory | any>;
    findAll(): Promise<ReaderCategory[]>;
    findOne(id: string): Promise<ReaderCategory>;
    remove(id: string): Promise<{}>;
}

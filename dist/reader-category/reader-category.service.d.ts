import { ReaderCategoryRepository } from './reader-category.repository';
import { ReaderCategory } from './entities/reader-category.entity';
export declare class ReaderCategoryService {
    private readonly readerCategoryRepository;
    constructor(readerCategoryRepository: ReaderCategoryRepository);
    save(category: ReaderCategory): Promise<any>;
    validateCategory(category: string): boolean;
    findAll(): Promise<ReaderCategory[]>;
    update(id: string, category: ReaderCategory): Promise<any>;
    findOne(id: string): Promise<any>;
    remove(id: string): Promise<{}>;
}

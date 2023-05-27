import { ReaderCategoryService } from './reader-category.service';
import { ReaderCategory } from './entities/reader-category.entity';
export declare class ReaderCategoryController {
    private readonly readerCategoryService;
    constructor(readerCategoryService: ReaderCategoryService);
    list(): Promise<ReaderCategory[]>;
    create(body: ReaderCategory): Promise<any>;
    find(id: string): Promise<any>;
    update(id: string, body: ReaderCategory): Promise<any>;
    remove(id: string): Promise<{}>;
}

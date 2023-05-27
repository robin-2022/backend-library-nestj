import { LiteraryCategoryService } from './literary-category.service';
import { LiteraryCategory } from './entities/literary-category.entity';
export declare class LiteraryCategoryController {
    private readonly literaryCategoryService;
    constructor(literaryCategoryService: LiteraryCategoryService);
    create(createLiteraryCategory: LiteraryCategory): Promise<LiteraryCategory>;
    update(updateCategory: LiteraryCategory): Promise<any>;
    findAll(): Promise<LiteraryCategory[]>;
    findByName(description: string): Promise<any>;
    remove(id: string): Promise<{}>;
}

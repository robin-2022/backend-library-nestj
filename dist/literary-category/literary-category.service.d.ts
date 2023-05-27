import { LiteraryCategory } from './entities/literary-category.entity';
import { LiteraryCategoryRepository } from './literary-category.repository';
export declare class LiteraryCategoryService {
    private readonly literaryCategoryRepository;
    constructor(literaryCategoryRepository: LiteraryCategoryRepository);
    create(createLiteraryCategory: LiteraryCategory): Promise<LiteraryCategory>;
    validateCategory(category: string): Promise<boolean>;
    update(category: LiteraryCategory): Promise<any>;
    findAll(): Promise<LiteraryCategory[]>;
    findBy(description: string): Promise<any>;
    remove(id: string): Promise<{}>;
}

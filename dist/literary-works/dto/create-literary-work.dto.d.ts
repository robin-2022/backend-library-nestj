import { LiteraryCategory } from '../../literary-category/entities/literary-category.entity';
export declare class CreateLiteraryWorkDto {
    title: string;
    category: LiteraryCategory;
    authors: string[];
    keywords: string[];
    publishingCompany: string;
}

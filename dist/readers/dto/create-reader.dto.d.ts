import { ReaderCategory } from '../../reader-category/entities/reader-category.entity';
export declare class Address {
    addressLine: string;
    city: string;
    uf: string;
}
export declare class ContactInfo {
    phone: string;
    email: string;
}
export declare class CreateReaderDto {
    name: string;
    address: Address;
    contact: ContactInfo;
    documentNumber: number;
    category: ReaderCategory;
}

import { CreateReaderDto } from './dto/create-reader.dto';
import { ReadersRepository } from './readers.repository';
import { ReaderCategoryService } from '../reader-category/reader-category.service';
export declare class ReadersService {
    private readonly readersRepository;
    private readonly readersCategoryService;
    constructor(readersRepository: ReadersRepository, readersCategoryService: ReaderCategoryService);
    create(createReaderDto: CreateReaderDto): Promise<import("./entities/reader.entity").Reader>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, reader: CreateReaderDto): Promise<any>;
    remove(id: string): Promise<any>;
}

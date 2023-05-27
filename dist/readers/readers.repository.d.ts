import { Model } from 'mongoose';
import { Reader, ReaderDocument } from './entities/reader.entity';
import { CreateReaderDto } from './dto/create-reader.dto';
export declare class ReadersRepository {
    private readerModel;
    constructor(readerModel: Model<ReaderDocument>);
    create(reader: Reader): Promise<Reader>;
    findAll(): Promise<any>;
    findByName(name: string): Promise<any>;
    findById(id: string): Promise<any>;
    update(id: string, reader: CreateReaderDto): Promise<any>;
    remove(id: string): Promise<any>;
}

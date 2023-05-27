"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadersService = void 0;
const common_1 = require("@nestjs/common");
const readers_repository_1 = require("./readers.repository");
const constants_1 = require("../shared/constants");
const reader_category_service_1 = require("../reader-category/reader-category.service");
let ReadersService = class ReadersService {
    constructor(readersRepository, readersCategoryService) {
        this.readersRepository = readersRepository;
        this.readersCategoryService = readersCategoryService;
    }
    async create(createReaderDto) {
        const validCategory = this.readersCategoryService.validateCategory(createReaderDto.category.description);
        if (!validCategory)
            throw new common_1.BadRequestException('Categoria inválida!');
        const reader = Object.assign(Object.assign({}, createReaderDto), { category: constants_1.READER_CATEGORY[createReaderDto.category.description] });
        try {
            const createReader = await this.readersRepository.create(reader);
            return createReader;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAll() {
        const response = await this.readersRepository.findAll();
        return response;
    }
    async findOne(id) {
        const response = await this.readersRepository.findById(id);
        return response;
    }
    async update(id, reader) {
        const response = await this.readersRepository.update(id, reader);
        return response;
    }
    async remove(id) {
        const response = await this.readersRepository.remove(id);
        return response;
    }
};
ReadersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [readers_repository_1.ReadersRepository,
        reader_category_service_1.ReaderCategoryService])
], ReadersService);
exports.ReadersService = ReadersService;
//# sourceMappingURL=readers.service.js.map
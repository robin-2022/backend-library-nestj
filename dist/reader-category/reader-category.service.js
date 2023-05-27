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
exports.ReaderCategoryService = void 0;
const common_1 = require("@nestjs/common");
const reader_category_repository_1 = require("./reader-category.repository");
const constants_1 = require("../shared/constants");
let ReaderCategoryService = class ReaderCategoryService {
    constructor(readerCategoryRepository) {
        this.readerCategoryRepository = readerCategoryRepository;
    }
    async save(category) {
        const validCategory = this.validateCategory(category.description);
        if (!validCategory)
            throw new common_1.BadRequestException('Categoria inválida');
        try {
            const response = this.readerCategoryRepository.create(category);
            return response;
        }
        catch (error) {
            return error;
        }
    }
    validateCategory(category) {
        const validCategory = constants_1.READER_CATEGORY.includes(category);
        return validCategory;
    }
    async findAll() {
        const response = this.readerCategoryRepository.findAll();
        return response;
    }
    async update(id, category) {
        const categoryFound = await this.findOne(id);
        if (category.description !== categoryFound.description) {
            throw new common_1.BadRequestException('Impossível alterar a descrição da categoria');
        }
        try {
            const response = await this.readerCategoryRepository.update(id, category);
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            const response = await this.readerCategoryRepository.findOne(id);
            return response;
        }
        catch (error) {
            return error;
        }
    }
    remove(id) {
        const response = this.readerCategoryRepository.remove(id);
        return response;
    }
};
ReaderCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [reader_category_repository_1.ReaderCategoryRepository])
], ReaderCategoryService);
exports.ReaderCategoryService = ReaderCategoryService;
//# sourceMappingURL=reader-category.service.js.map
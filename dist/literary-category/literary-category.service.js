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
exports.LiteraryCategoryService = void 0;
const common_1 = require("@nestjs/common");
const literary_category_repository_1 = require("./literary-category.repository");
const constants_1 = require("../shared/constants");
let LiteraryCategoryService = class LiteraryCategoryService {
    constructor(literaryCategoryRepository) {
        this.literaryCategoryRepository = literaryCategoryRepository;
    }
    async create(createLiteraryCategory) {
        const validCategory = this.validateCategory(createLiteraryCategory.description);
        if (!validCategory)
            throw new common_1.BadRequestException('Categoria inválida');
        const response = await this.literaryCategoryRepository.create(Object.assign({}, createLiteraryCategory));
        return response;
    }
    async validateCategory(category) {
        const validCategory = constants_1.LITERARY_WORKS_CATEGORY.includes(category);
        return validCategory;
    }
    async update(category) {
        const validCategory = constants_1.LITERARY_WORKS_CATEGORY.includes(category.description);
        if (!validCategory)
            throw new common_1.BadRequestException('Categoria inválida');
        const response = await this.literaryCategoryRepository.update(Object.assign({}, category));
        return response;
    }
    async findAll() {
        try {
            const response = this.literaryCategoryRepository.findAll();
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findBy(description) {
        const response = this.literaryCategoryRepository.findByName(description);
        return response;
    }
    async remove(id) {
        try {
            const response = await this.literaryCategoryRepository.remove(id);
            return response;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
LiteraryCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [literary_category_repository_1.LiteraryCategoryRepository])
], LiteraryCategoryService);
exports.LiteraryCategoryService = LiteraryCategoryService;
//# sourceMappingURL=literary-category.service.js.map
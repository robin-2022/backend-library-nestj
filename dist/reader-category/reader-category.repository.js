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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReaderCategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ReaderCategoryRepository = class ReaderCategoryRepository {
    constructor(model) {
        this.model = model;
    }
    async create(category) {
        const categoryExists = await this.model.exists({
            description: category.description,
        });
        if (categoryExists)
            throw new common_1.BadRequestException('Categoria já existe');
        const newCategory = await this.model.create(category);
        return newCategory;
    }
    async update(id, category) {
        try {
            await this.model.findByIdAndUpdate(id, Object.assign({}, category));
            return category;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findAll() {
        try {
            const categories = this.model.find();
            return categories;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findOne(id) {
        try {
            const category = this.model.findById(id);
            if (!category)
                throw new common_1.NotFoundException('Categoria não encontrada');
            return category;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async remove(id) {
        try {
            const category = await this.model.findByIdAndDelete(id);
            if (!category)
                throw new common_1.NotFoundException('Categoria não encontrada');
            return {};
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
ReaderCategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Reader_category')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReaderCategoryRepository);
exports.ReaderCategoryRepository = ReaderCategoryRepository;
//# sourceMappingURL=reader-category.repository.js.map
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
exports.LiteraryCategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LiteraryCategoryRepository = class LiteraryCategoryRepository {
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
    async update(category) {
        try {
            const udpatedCategory = await this.model.updateOne({ description: category.description }, category);
            return udpatedCategory;
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
    async findByName(description) {
        try {
            const employee = await this.model.findOne({ description: description }).exec();
            return employee;
        }
        catch (error) {
            return error;
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
LiteraryCategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Literary_category')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LiteraryCategoryRepository);
exports.LiteraryCategoryRepository = LiteraryCategoryRepository;
//# sourceMappingURL=literary-category.repository.js.map
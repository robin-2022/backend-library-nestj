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
exports.LiteraryWorksService = void 0;
const common_1 = require("@nestjs/common");
const literary_works_repository_1 = require("./literary-works.repository");
const constants_1 = require("../shared/constants");
const literary_category_service_1 = require("../literary-category/literary-category.service");
let LiteraryWorksService = class LiteraryWorksService {
    constructor(literaryWorksRepository, literaryCategoryService) {
        this.literaryWorksRepository = literaryWorksRepository;
        this.literaryCategoryService = literaryCategoryService;
    }
    async create(createLiteraryWorkDto) {
        try {
            const validCategory = this.literaryCategoryService.validateCategory(createLiteraryWorkDto.category.description);
            if (validCategory) {
                const response = await this.literaryWorksRepository.create(Object.assign(Object.assign({}, createLiteraryWorkDto), { status: constants_1.LiteraryStatusEnum.available }));
                return response;
            }
            throw new common_1.BadRequestException('Categoria inválida!');
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            const response = await this.literaryWorksRepository.findAll();
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async findAmount(title) {
        try {
            const literaryWorks = await this.literaryWorksRepository.findByTitle(title);
            const amount = literaryWorks.length;
            return { literaryWorks, amount };
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            const response = await this.literaryWorksRepository.findOne(id);
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async update(id, literaryWork) {
        try {
            const response = await this.literaryWorksRepository.update(id, literaryWork);
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async setStatus(id, status) {
        try {
            const response = await this.literaryWorksRepository.updateStatus(id, constants_1.LiteraryStatusEnum[status]);
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            const response = await this.literaryWorksRepository.delete(id);
            return response;
        }
        catch (error) {
            return error;
        }
    }
};
LiteraryWorksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [literary_works_repository_1.LiteraryWorksRepository,
        literary_category_service_1.LiteraryCategoryService])
], LiteraryWorksService);
exports.LiteraryWorksService = LiteraryWorksService;
//# sourceMappingURL=literary-works.service.js.map
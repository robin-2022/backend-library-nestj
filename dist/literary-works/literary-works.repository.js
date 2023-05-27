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
exports.LiteraryWorksRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LiteraryWorksRepository = class LiteraryWorksRepository {
    constructor(model) {
        this.model = model;
    }
    async create(literaryWork) {
        try {
            const newLiteraryWork = await this.model.create(literaryWork);
            return newLiteraryWork;
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        const literaryWorks = await this.model.find();
        return literaryWorks;
    }
    async findOne(id) {
        try {
            const literaryWork = await this.model.findById(id);
            return literaryWork;
        }
        catch (error) {
            return error;
        }
    }
    async findByTitle(title) {
        try {
            const literaryWorks = await this.model.find({ title });
            return literaryWorks;
        }
        catch (error) {
            return error;
        }
    }
    async update(id, literaryWork) {
        try {
            await this.model.findByIdAndUpdate(id, literaryWork);
            return literaryWork;
        }
        catch (error) {
            return error;
        }
    }
    async updateStatus(id, status) {
        try {
            const response = await this.model.findByIdAndUpdate(id, { status });
            return response;
        }
        catch (error) {
            return error;
        }
    }
    async delete(id) {
        try {
            await this.model.findByIdAndDelete(id);
            return {};
        }
        catch (error) {
            return error;
        }
    }
};
LiteraryWorksRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Literary_works')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LiteraryWorksRepository);
exports.LiteraryWorksRepository = LiteraryWorksRepository;
//# sourceMappingURL=literary-works.repository.js.map
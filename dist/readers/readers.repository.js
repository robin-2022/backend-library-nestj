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
exports.ReadersRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ReadersRepository = class ReadersRepository {
    constructor(readerModel) {
        this.readerModel = readerModel;
    }
    async create(reader) {
        try {
            const readerExists = await this.readerModel.exists({
                documentNumber: reader.documentNumber,
            });
            if (readerExists)
                throw new common_1.BadRequestException('Usuário já existe!');
            const newReader = await this.readerModel.create(reader);
            return newReader;
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            const readers = await this.readerModel.find();
            return readers;
        }
        catch (error) {
            return error;
        }
    }
    async findByName(name) {
        try {
            const reader = await this.readerModel.findOne({ name });
            return reader;
        }
        catch (error) {
            return error;
        }
    }
    async findById(id) {
        try {
            const reader = await this.readerModel.findById(id);
            return reader;
        }
        catch (error) {
            return error;
        }
    }
    async update(id, reader) {
        try {
            const updatedReader = await this.readerModel.findByIdAndUpdate(id, reader);
            return updatedReader;
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            await this.readerModel.findByIdAndRemove(id);
            return {};
        }
        catch (error) {
            return error;
        }
    }
};
ReadersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Reader')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReadersRepository);
exports.ReadersRepository = ReadersRepository;
//# sourceMappingURL=readers.repository.js.map
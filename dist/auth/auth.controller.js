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
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const api_dto_1 = require("./dto/api.dto");
const signup_dto_1 = require("./dto/signup.dto");
const swagger_1 = require("@nestjs/swagger");
let ApiController = class ApiController {
    constructor(apiService) {
        this.apiService = apiService;
    }
    async authLogin(res, loginAuthDTO) {
        try {
            const response = await this.apiService.loginAuth(loginAuthDTO);
            return res.status(common_1.HttpStatus.OK).json({ response });
        }
        catch (error) {
            throw error;
        }
    }
    async authRegister(res, signUpDto) {
        try {
            const response = await this.apiService.signAuth(signUpDto);
            return res.status(common_1.HttpStatus.OK).json({ response });
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)('auth-login'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, api_dto_1.LoginAuthDTO]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "authLogin", null);
__decorate([
    (0, common_1.Post)('auth-register'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, signup_dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "authRegister", null);
ApiController = __decorate([
    (0, swagger_1.ApiTags)('Login'),
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [auth_service_1.ApiService])
], ApiController);
exports.ApiController = ApiController;
//# sourceMappingURL=auth.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteraryStatusEnum = exports.READER_CATEGORY = exports.LITERARY_WORKS_CATEGORY = void 0;
exports.LITERARY_WORKS_CATEGORY = [
    'Livro',
    'Periódico',
    'Revista',
    'Nota didática',
    'Jornal',
    'Relatório técnico',
    'Tese de doutorado',
    'Dissertação de mestrado',
];
exports.READER_CATEGORY = [
    'Aluno de graduação',
    'Aluno de pós-graduação',
    'Professor',
    'Funcionário',
    'Usuário externo',
];
var LiteraryStatusEnum;
(function (LiteraryStatusEnum) {
    LiteraryStatusEnum["available"] = "Dispon\u00EDvel para empr\u00E9stimo";
    LiteraryStatusEnum["reserved"] = "Reservado";
    LiteraryStatusEnum["lent"] = "Emprestado";
    LiteraryStatusEnum["unavailable"] = "Indispon\u00EDvel";
})(LiteraryStatusEnum = exports.LiteraryStatusEnum || (exports.LiteraryStatusEnum = {}));
//# sourceMappingURL=constants.js.map
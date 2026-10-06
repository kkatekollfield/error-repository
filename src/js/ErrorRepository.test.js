import ErrorRepository from './ErrorRepository.js';

describe('ErrorRepository', () => {
    let repo;

    beforeEach(() => {
        repo = new ErrorRepository();
    });

    test('возвращает описание для существующего кода', () => {
        expect(repo.translate(404)).toBe('Not Found');
        expect(repo.translate(500)).toBe('Internal Server Error');
    });

    test('возвращает "Unknown error" для неизвестного кода', () => {
        expect(repo.translate(999)).toBe('Unknown error');
    });
});
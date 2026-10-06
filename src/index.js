import ErrorRepository from './js/ErrorRepository.js';

const repo = new ErrorRepository();

console.log(repo.translate(404));  // 'Not Found'
console.log(repo.translate(500));  // 'Internal Server Error'
console.log(repo.translate(999));  // 'Unknown error'
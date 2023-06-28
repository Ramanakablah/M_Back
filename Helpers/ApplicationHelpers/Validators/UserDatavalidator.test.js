// const assert = require('assert');
// const { DateValidator } = require('./UserDataValidators');

// describe('DateValidator', () => {
//     it('should return true for a valid date', async () => {
//       const result = await DateValidator('28-06-2083');
//       assert.strictEqual(result, true);
//     });
//     it('should return true for a valid date', async () => {
//       const result = await DateValidator('28-06-2093');
//       assert.strictEqual(result, true);
//     });
//     it('should return true for a valid date', async () => {
//       const result = await DateValidator('28-08-2023');
//       assert.strictEqual(result, true);
//     });
//     it('should return true for a valid date', async () => {
//       const result = await DateValidator('8-06-2023');
//       assert.strictEqual(result, true);
//     });
//     it('should return true for a valid date', async () => {
//       const result = await DateValidator('0-06-2923');
//       assert.strictEqual(result, false);
//     });
//     it('should return true for a valid date', async () => {
//       const result = await DateValidator('28-96-2023');
//       assert.strictEqual(result, false);
//     });
//     it('should return true for a valid date', async () => {
//       const result = await DateValidator('28-6-2023');
//       assert.strictEqual(result, true);
//     });
//     it('should return true for a valid date', async () => {
//       const result = await DateValidator('828-06-2023');
//       assert.strictEqual(result, false);
//     });
  
//     it('should return false for an invalid date', async () => {
//       const result = await DateValidator('InvalidDate');
//       assert.strictEqual(result, false);
//     });
//   });
  
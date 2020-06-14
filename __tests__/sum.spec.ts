import Class1 from "../src/Class1";
// describe-it の書き方でもよい
// describe('sum() のテスト', () => {
//   it('sum(1, 2) == 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });
describe('Class1テスト', () => {
  it('正しくコンストラクトできている', () => {
    const a = new Class1("hello");
    expect(a.name).toBe("hello");
  });
});


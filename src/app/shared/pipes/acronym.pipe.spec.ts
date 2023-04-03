import { AcronymPipe } from './acronym.pipe';

describe('AcronymPipe', () => {
  const pipe = new AcronymPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("should return acronym", () => {
    const value = "information technology";
    expect(pipe.transform(value)).toEqual('IT')
  })

  it('should return if value is empty', () => {
    expect(pipe.transform("Engineering")).toEqual('Engineering');
  })
});

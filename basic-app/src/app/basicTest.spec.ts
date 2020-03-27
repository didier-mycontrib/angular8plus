/*
describe('premiers tests', () => {
    it('1+1=2', () => expect(1+1).toBe(2));
    it('2+2=4', () => expect(2+2).toBe(4));
  });
  */


 describe('tests structures avec jasmine', () => {

  let s : string;
  let x,y,z;

  beforeAll(()=>{
    console.log("beforeAll called once");
    s="abc";
  });

  beforeEach(()=>{
    console.log("beforeEach called again");
    x=1;y=2;
  });

  describe('tests de calcul', () => {
    it('1+2=3', () => expect(x+y).toBe(3));
    it('1*2=2', () => expect(x*y).toBe(2));
  });

  describe('autres tests', () => {
    it('s=abc', () => expect(s).toBe('abc'));
    it('s comporte ab', () => expect(s).toContain('ab'));
  });

  afterEach(()=>{
    console.log("afterEach called again");
  });

  afterAll(()=>{
    console.log("afterAll called once");
  });


});
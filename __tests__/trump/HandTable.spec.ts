import { HandTable } from '../../src/trump/HandTable';
import { Card } from "../../src/trump/Card";

describe('手札置き場に手札をおく', () => {
  it('置くとき正常系', () => {
    const table = new HandTable();
    expect(table.num).toBe(0);
  });
});


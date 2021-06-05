const expect = require('chai').expect;
const centroid = require('../lib/centroid.js');

describe('Centroid', () => {
  it('should find the center of a group of 2-D points', () => {
    const points = [
      [1, 1],
      [2, 2],
      [3, 3]
    ];
    const center = centroid(points);

    expect(center).to.deep.equal([2, 2]);
  });

  it('should find the center of a group of 3-D points', () => {
    const points = [
      [1, 1, 3],
      [2, 2, 2],
      [3, 3, 5]
    ];
    const center = centroid(points);

    expect(center).to.deep.equal([2, 2, 10 / 3]);
  });
});
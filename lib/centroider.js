/**
 * Given an array of points (N-dimensional), this will find a
 * centroid point of the group of points. This is achieved by
 * finding the mean value of each dimension.
 *
 * @param  {Array} points  an array of points for which we want
 * to find the centroid point
 * @return {Array}        an N-dimensional array representing the
 * centroid point for the set of provided points.
 */
module.exports = function (points) {
  if (typeof points === 'undefined') {
    return [];
  }

  let dimensions = points[0].length;
  let accumulation = points.reduce((acc, point) => {
    point.forEach((dimension, idx) => {
      acc[idx] += dimension;
    });

    return acc;
  }, Array(dimensions).fill(0));

  return accumulation.map(dimension => dimension / points.length);
}

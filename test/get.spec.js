var { expect } = require('chai');

var tomatoes = require('../index');
var movies = tomatoes('6nkt9qb3ggxbd3ejyzsjvq3x');

var DIRECT = {
  id: '10598',
  title: 'Batman Returns',
  ratings: {
    critics_rating: 'Certified Fresh',
    critics_score: 81,
    audience_rating: 'Upright',
    audience_score: 68
  }
};

describe.skip('get()', function() {
  describe('with a match', function() {
    it('should return the match', function(done) {
      movies.get(DIRECT.id, function(err, result) {
        try {
          expect(result).to.be.an('object');
          done();
        } catch (err) {
          done(err)
        }
      });
    });
  });
  describe('without a match', function() {
    it('should return undefined', function(done) {
      movies.get('xxxxx', function(err, result) {
        try {
          expect(result).to.be.an('object');
          done();
        } catch (err) {
          done(err)
        }
      });
    });
  });
});

describe.skip('getList()', function() {
  describe('for "movies" "in_theaters"', function() {
    it ('should return the list', function(done) {
      movies.getList('movies', 'in_theaters', function(err, result) {
        result.total.should.be.a('number');
        result.movies.should.have.length(16);
        result.movies[0].title.should.be.a('string');
        return done();
      });
    });
  });
});

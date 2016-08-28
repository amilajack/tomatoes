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

describe('search()', function() {
  describe('with a direct match', function() {
    it('should return the match', function(done) {
      movies.search('Batman Returns', function(err, results) {
        try {
          expect(results).to.be.an('array');
          expect(results).to.have.length.above(1);
          done();
        } catch (err) {
          done(err)
        }
      });
    });
  });
  describe('with several matches', function() {
    it('should return all matches', function(done) {
      movies.search('Batman', function(err, results) {
        try {
          expect(results).to.be.an('array');
          expect(results).to.have.length.above(1);
          done();
        } catch (err) {
          done(err)
        }
      });
    });
  });
  describe('with no matches', function() {
    it('should return an empty set', function(done) {
      movies.search('lsdjflskjdflksjf', function(err, results) {
        try {
          expect(results).to.be.an('array');
          expect(results).to.have.length.above(1);
          done();
        } catch (err) {
          done(err)
        }
      });
    });
  });
});

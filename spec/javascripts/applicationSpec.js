describe("Example Application", function() {
  describe("CommonJS gives us a completely clean environment for each test", function() {
    var app;
    beforeEach(function() {
      app = require('specHelper');
    });

    it('so that stubing out one method', function() {
      app = {};
    }); 

    it('does not affect other tests', function() {
      app.main.start = jasmine.createSpy('start');
    }); 
  });
});

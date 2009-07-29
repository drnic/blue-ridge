Screw.Unit(function() {
  describe("DOM", function(){
    it("should be the default DOM initially", function(){
      expect($('div#some_dom p').size()).to(equal, 2);
    });
    it("should be modifiable by one test", function(){
      $('div#some_dom p:first').remove();
      expect($('div#some_dom p').size()).to(equal, 1);
    });
    it("should be restored before this test", function(){
      expect($('div#some_dom p').size()).to(equal, 2);
    });
  });
});

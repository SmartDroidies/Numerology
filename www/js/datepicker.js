var value = element(by.binding('ngudob | date: "yyyy-MM-dd"'));
var valid = element(by.binding('numlgy.input.$valid'));
var input = element(by.model('ngudob'));

// currently protractor/webdriver does not support
// sending keys to all known HTML5 input controls
// for various browsers (see https://github.com/angular/protractor/issues/562).
function setInput(val) {
  // set the value of the element and force validation.
  var scr = "var ipt = document.getElementById('exampleInput'); " +
  "ipt.value = '" + val + "';" +
  "angular.element(ipt).scope().$apply(function(s) { s.NmlgyFrmOne[ipt.name].$setViewValue('" + val + "'); });";
  browser.executeScript(scr);
}

it('should initialize to model', function() {
  expect(value.getText()).toContain('2013-10-22');
  expect(valid.getText()).toContain('NmlgyFrmOne.input.$valid = true');
});

it('should be invalid if empty', function() {
  setInput('');
  expect(value.getText()).toEqual('value =');
  expect(valid.getText()).toContain('NmlgyFrmOne.input.$valid = false');
});

it('should be invalid if over max', function() {  
  setInput('2015-01-01');
  expect(value.getText()).toContain('');
  expect(valid.getText()).toContain('NmlgyFrmOne.input.$valid = false');
});
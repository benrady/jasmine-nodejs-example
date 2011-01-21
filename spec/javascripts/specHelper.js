var fs = require('fs');
var jsdom = require("jsdom");
require('util/underscore');

beforeEach(function () {
  $('body').empty()
    .append('<div class="navbar"></div><div id="view-toolbar-controls" class="toolbar"> </div><div id="currentView"></div>');
});

window = jsdom.jsdom("<html><head></head><body></body></html>").createWindow();
global.navigator = {
  userAgent: 'jasmine'
};
global.window = window;
global.document = window.document;
global.location = "http://monitoring";
require("jquery/jquery-1.4.2");
if (window.$) { 
  global.$ = window.$; 
  global.jQuery = window.jQuery;
}

require('util/modit');
require('util/moditTest');
// Load your javascript here

_.extend(exports, global.mon);

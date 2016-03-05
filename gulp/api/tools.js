'use strict';

var tools = [{
  name: 'Print',
  glyph: 'print',
  tooltip: 'Open Print Preview'
}, {
  name: 'Import',
  glyph: 'cloud-download',
  tooltip: 'Import Annotations into Map'
}, {
  name: 'Export',
  glyph: 'cloud-upload',
  tooltip: 'Export Annotations from Map'
}, {
  name: 'My Maps',
  glyph: 'floppy-disk',
  tooltip: 'Save current view'
}, {
  name: 'Annotate',
  glyph: 'pencil',
  tooltip: 'Open Annotation Tools'
}, {
  name: 'Measure',
  glyph: 'print',
  tooltip: 'Open Measurement Tools'
}, {
  name: 'Feature',
  glyph: 'info-sign',
  tooltip: 'Get feature Information'
}, {
  name: 'Legend',
  glyph: 'print',
  tooltip: 'View Legend for layer'
}];
console.log('Before getTools');
exports.getTools = function(req, res) {
  console.log('Inside getTools');
  res.json(tools);
};
console.log('After getTools');

module.exports = {
  name: 'ui-notifications',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-notifications',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

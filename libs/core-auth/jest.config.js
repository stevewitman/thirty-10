module.exports = {
  name: 'core-auth',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/core-auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

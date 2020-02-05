module.exports = {
  name: 'app10',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app10',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

const { awscdk } = require('projen');
const { NodePackageManager } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'a-bigelow',
  authorAddress: 'adam@adambigelow.com',
  cdkVersion: '2.10.0',
  devDeps: ['commitizen', 'cz-conventional-changelog'],
  defaultReleaseBranch: 'main',
  name: 'aws-gameservers',
  repositoryUrl: 'https://github.com/a-bigelow/aws-gameservers.git',
  release: true,
  eslint: false,
  prettier: true,
  prettierOptions: {
    settings: {
      useTabs: false,
      tabWidth: 4,
      printWidth: 120,
    },
  },
});
project.setScript('format', 'prettier -w "src/**/*.ts"');
project.setScript('commit', 'cz');
project.gitignore.addPatterns('.idea/');
project.addKeywords('aws', 'games', 'dedicated server', 'valheim')
project.synth();
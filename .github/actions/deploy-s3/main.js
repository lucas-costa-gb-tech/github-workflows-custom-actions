const core = require('@actions/core');
// const github = require('@actions/github');
// const exec = require('@actions/exec');

const bucketName = core.getInput('bucket-name');
const bucketRegion = core.getInput('bucket-region');
const distFolder = core.getInput('dist-folder');

core.notice(`O nome do bucket é ${bucketName}`);
core.notice(`A região do bucket é ${bucketRegion}`);
core.notice(`A pasta que deve ser usada para deploy é ${distFolder}`);

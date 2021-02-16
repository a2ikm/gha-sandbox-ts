import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  const payload = JSON.stringify(github.context.payload, null, 2);
  core.info(`context.payload = ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

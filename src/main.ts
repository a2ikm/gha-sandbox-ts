import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  const context = github.context;
  core.info(`context.payload = ${context.payload}`);
} catch (error) {
  core.setFailed(error.message);
}

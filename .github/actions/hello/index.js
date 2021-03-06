const core = require("@actions/core");
const github = require("@actions/github");

const token = core.getInput("token");
const title = core.getInput("title");
const body = core.getInput("body");
const assignees = core.getInput("assignees");

const octokit = new github.getOctokit(token);

const response = octokit.rest.issues.create({
	owner: github.context.repo.owner,
	repo: github.context.repo.repo,
	title,
	body,
	assignees: assignees ? assignees.split("\\") : undefined
})

core.setOutput('issue', JSON.stringify(response.data));
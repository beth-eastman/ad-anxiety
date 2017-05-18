const fs = require('fs');
const packageJson = require('./package.json');

var schema = {
	properties: {
		name: {
			pattern: /^[a-zA-Z\-]+$/,
			message: 'Enter the name of the project. Name must be only letters or dashes',
			required: true

		},
		description: {
			message: 'Enter a description of the project',
			required: true
		},
		repository: {
			pattern: /ssh:\/\/git@gitlab.t2.local:10022\/t2-pwa\/[a-zA-Z\-]+$/,
			message: 'Enter the GitLab repository url for the project. Must be in the form of `ssh://git@gitlab.t2.local:10022/t2-pwa/<project-name>`',
			required: true
		}
	}
};

var prompt = require('prompt');
prompt.start();

prompt.get(schema, function(err, result) {
	packageJson.name = result.name;
	packageJson.version = '0.0.1';
	packageJson.description = result.description;
	packageJson.repository.url = result.repository;
	fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
	console.log('');
	console.log('*******************************');
	console.log('Now run command `npm run setup`');
	console.log('*******************************');
	console.log('');
});


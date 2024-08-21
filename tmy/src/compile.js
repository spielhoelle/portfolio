const fs = require('fs');
const Handlebars = require('handlebars');

const path = require('path');

const appDir = path.join(__dirname, '../')

const source = fs.readFileSync(appDir + 'src/index.hbs', 'utf8');

const items = [{
	filename: 'keylogger.html',
	headline: 'Analyse keylogger results',
	description: 'Capturing keystrokes over several weeks, keep the process in multiple environments active, format the data and elaborating on the results. This gave me insights in daily activity, mistakes, 10-finger typing behavior and more.',
	content: fs.readFileSync(appDir + 'app/notebooks/keylogger.html', 'utf8')
}, {
	filename: 'synthetic-data-generation.html',
	headline: 'Synthetic data generation on a large scale',
	description: 'From a predefined set of data, generate synthetic data for artificial LLM dataset. This can be adapted to be based on a certain base-truth data corpus. Interesting was the shuffling of random variables in the data creation, parallelism and performance when creating large datasets.',
	content: fs.readFileSync(appDir + 'app/notebooks/synthetic-data-generation.html', 'utf8')
}]

const template = Handlebars.compile(source);

const html = template({ items });

fs.writeFileSync(appDir + 'index.html', html);
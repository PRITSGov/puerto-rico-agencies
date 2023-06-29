const { Parser } = require('@json2csv/plainjs');
const fs = require('fs');

try {
  // Read the JSON file and convert it to CSV
  const json2csv = new Parser();
  const csvData = json2csv.parse(require('./data/agencies.json'));

  // Write CSV file from the converted JSON data
  fs.writeFileSync('./data/agencies.csv', csvData);

  console.log(
    '🎉 Successfully created agencies.csv file in the data directory'
  );
} catch (err) {
  console.log('🚨 Something went wrong while converting to CSV');

  // Log the error stack trace
  console.error(err);
}

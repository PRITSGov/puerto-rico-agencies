# Puerto Rico Government Agency Data Repository

This repository contains a collection of government agency data, such as agency names, acronyms, and website URLs. The data is available in two formats: JSON and CSV. Additionally, a script is provided to automatically convert the JSON data to CSV format.

## Installation

To use the script for converting the data, please ensure you have [Node.js](https://nodejs.org) installed on your system.

1. Clone this repository to your local machine using the following command:

```shell
git clone https://github.com/PRITSGov/puerto-rico-agencies.git
```

2. Navigate to the project directory:

```shell
cd puerto-rico-agencies
```

3. Install the dependencies:

```shell
npm install
```

## Usage

### Converting JSON to CSV

To convert the JSON data to CSV format, follow these steps:

1. Ensure you are in the project directory.

2. Open your terminal and run the following command:

```shell
npm run convert
```

3. The script will automatically convert the `agencies.json` file to `agencies.csv` and save it in the `data` directory.

### Accessing the Raw Data

To access the raw `agencies.json` file from this repository, you can fetch it using the raw data URL. The URL for the `agencies.json` file is as follows:

```
https://raw.githubusercontent.com/PRITSGov/puerto-rico-agencies/main/data/agencies.json
```

## File Structure

The repository follows the following directory structure:

```
.
├── data
│   ├── agencies.json     # JSON data file containing government agency information
│   └── agencies.csv      # Converted CSV file generated from the JSON data
├── .gitignore            # Specifies files and directories to ignore in version control
├── convert.js            # Script for converting JSON to CSV
└── README.md             # Documentation file (you're reading it now)
```

## Contributing

Contributions to this repository are welcome! If you have any suggestions, improvements, or additional government agency data that you'd like to add, feel free to open an issue or submit a pull request.

When contributing, please ensure that your changes align with the existing file structure and follow the repository's coding conventions.

## License

This repository is licensed under the [MPL 2.0 License](LICENSE). Feel free to use, modify, and distribute the code and data as permitted by the license.

If you use the data provided in this repository, please provide attribution to the original source.

## Contact

If you have any questions, concerns, or feedback, please don't hesitate to reach out. You can contact the repository maintainer at [info@prits.pr.gov](mailto:info@prits.pr.gov).

Happy coding!

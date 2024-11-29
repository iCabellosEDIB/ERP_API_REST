# Sample Exam Project

This is a sample exam project designed to demonstrate how to consume information from an API and display it on an HTML page. The project uses Node.js and an Express server running on port 3000. Visual Studio Code (VS Code) with the Live Server extension is recommended for development.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (Download from [Node.js official website](https://nodejs.org/))
- **npm** (Node Package Manager, included with Node.js)
- **VS Code** (Download from [Visual Studio Code official website](https://code.visualstudio.com/))
- **Live Server Extension for VS Code**

---

## Installation Process

1. **Clone the Repository**

   Clone this repository to your local machine or download the source code.

   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Install Node.js Dependencies**

Run the following command to install the required Node.js modules:

```bash
npm install
```
This will install all the dependencies listed in the package.json file.

Run the Express Server

Start the Express server on port 3000 by running the following command:

```bash
node server.js
```
The server will be accessible at http://localhost:3000.

Open the Project in VS Code

Open the project directory in VS Code.
Ensure the Live Server extension is installed and activated.
Serve the HTML File

Open the index.html file in VS Code and right-click to select Open with Live Server. The page will load in your default browser.

API Consumption
The Express server is set up to fetch data from an external API. The fetched data will be rendered dynamically on the index.html page using JavaScript.

Notes
Ensure the Express server is running before loading the HTML page.
Any API keys required for external API requests should be stored securely (e.g., in environment variables).
Good luck with your exam!
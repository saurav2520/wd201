const http = require('http');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

// Parse command-line arguments
const args = minimist(process.argv.slice(2));
const port = args.port || 5000; // Default to 5000 if no port is provided

// Create the server
const server = http.createServer((req, res) => {
    if (req.url === '/registration') {
        // Serve the registration.html file
        const filePath = path.join(__dirname, 'registration.html'); // or 'public/registration.html' if stored in 'public' directory
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/project') {
        // Serve the project.html file
        const filePath = path.join(__dirname, 'project.html'); // Adjust path as needed
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Serve a 404 for other routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

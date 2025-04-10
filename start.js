
const { exec } = require('child_process');
const os = require('os');

console.log('Starting development server...');

// Determine the command based on the environment
const command = 'npx vite --host 127.0.0.1';

// Execute the command
const process = exec(command);

// Forward stdout and stderr
process.stdout.on('data', (data) => {
  console.log(data);
});

process.stderr.on('data', (data) => {
  console.error(data);
});

process.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});

console.log('Server starting...');
console.log('You can access the app at:');
console.log('  - http://localhost:8080');
console.log('  - http://127.0.0.1:8080');

// Display all available network interfaces for direct access
const networkInterfaces = os.networkInterfaces();
Object.keys(networkInterfaces).forEach((interfaceName) => {
  const interfaces = networkInterfaces[interfaceName];
  interfaces.forEach((interface) => {
    if (interface.family === 'IPv4' && !interface.internal) {
      console.log(`  - http://${interface.address}:8080`);
    }
  });
});

console.log('Press Ctrl+C to stop the server');

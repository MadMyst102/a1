async function main() {
  try {
    // Start the Next.js development server if it's not already running
    const devServer = require('child_process').spawn('npm', ['run', 'dev'], {
      stdio: 'inherit'
    });

    // Wait for the server to start
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Make the request to our seed API endpoint
    const response = await fetch('http://localhost:3000/api/seed', {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`Failed to seed database: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Seeding result:', result);

    // Kill the development server
    devServer.kill();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();

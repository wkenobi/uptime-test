export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.send(`
    <html>
      <head>
        <title>Status Page</title>
        <style>
          body { font-family: Arial; padding: 20px; }
          .ok { color: green; }
          .down { color: red; }
        </style>
      </head>
      <body>
        <h1>🚀 Service Status</h1>
        <p><b>API:</b> <span class="ok">UP</span></p>
        <p><b>Database:</b> <span class="ok">UP</span></p>
        <p><b>Auth:</b> <span class="down">DOWN</span></p>
        <hr>
        <small>Last updated: ${new Date().toISOString()}</small>
      </body>
    </html>
  `);
}

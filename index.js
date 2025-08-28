addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Return the maintenance page HTML
  const maintenanceHTML = `
    <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site Maintenance - ISPMAN</title>
    <link rel="icon" type="image/x-icon" href="https://static.ispman.tech/favicon.ico">
    <style>
        body { 
            text-align: center; 
            padding: 50px 20px; 
            font: 20px Helvetica, sans-serif; 
            color: #333; 
            margin: 0;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 650px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 60px 40px;
        }
        .logo {
            width: 120px;
            height: auto;
            margin-bottom: 30px;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }
        h1 { 
            font-size: 42px; 
            margin: 20px 0 30px 0;
            color: #2c3e50;
            font-weight: 300;
        }
        .content { 
            text-align: left; 
            line-height: 1.6;
        }
        a { 
            color: #dc8100; 
            text-decoration: none; 
            font-weight: 500;
        }
        a:hover { 
            color: #333; 
            text-decoration: underline; 
        }
        .team-signature {
            font-style: italic;
            margin-top: 30px;
            color: #666;
        }
        @media (max-width: 768px) {
            .container {
                margin: 20px;
                padding: 40px 30px;
            }
            h1 {
                font-size: 32px;
            }
            body {
                font-size: 18px;
                padding: 20px 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://static.ispman.tech/logo.png" alt="ISPMAN Logo" class="logo" onerror="this.style.display='none'">
        <h1>We&rsquo;ll be back soon!</h1>
        <div class="content">
            <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:support@ispman.tech">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
            <p class="team-signature">&mdash; The ISPMAN Team</p>
        </div>
    </div>
</body>
</html>
    `
  
  return new Response(maintenanceHTML, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'cache-control': 'no-cache'
    },
    status: 503 // Service Unavailable
  })
}

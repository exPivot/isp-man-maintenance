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
            color: #0083FE; 
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
        .contact-info {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            border-left: 4px solid #0083FE;
        }
        .contact-item {
            margin: 12px 0;
            font-size: 18px;
        }
        .contact-item strong {
            color: #2c3e50;
            margin-right: 8px;
        }
        .contact-item a {
            color: #0083FE;
            text-decoration: none;
            font-weight: 600;
            padding: 8px 12px;
            border-radius: 4px;
            transition: all 0.3s ease;
            display: inline-block;
            margin-left: 5px;
        }
        .contact-item a:hover {
            background: #0083FE;
            color: white;
            text-decoration: none;
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(0, 131, 254, 0.3);
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
            .contact-info {
                padding: 20px;
                margin: 20px 0;
            }
            .contact-item {
                margin: 15px 0;
                font-size: 16px;
            }
            .contact-item a {
                display: block;
                text-align: center;
                margin: 8px 0 0 0;
                padding: 12px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://static.ispman.tech/logo.png" alt="ISPMAN Logo" class="logo" onerror="this.style.display='none'">
        <h1>We&rsquo;ll be back soon!</h1>
        <div class="content">
            <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need immediate assistance, you can reach us:</p>
            
            <div class="contact-info">
                <div class="contact-item">
                    <strong>📧 Email:</strong> <a href="mailto:support@ispman.co.ke">support@ispman.co.ke</a>
                </div>
                <div class="contact-item">
                    <strong>📞 Phone:</strong> <a href="tel:+254796777333">+254 796 777 333</a>
                </div>
            </div>
            
            <p>Otherwise we&rsquo;ll be back online shortly!</p>
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

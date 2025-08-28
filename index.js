addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  
  // Clone the response so that it's no longer immutable
  const newResponse = new Response(response.body, response)
  
  // Add a custom header with a value
  newResponse.headers.append("x-workers-hello", `
    <!doctype html>
<title>Site Maintenance</title>
<style>
  body { text-align: center; padding: 150px; }
  h1 { font-size: 50px; }
  body { font: 20px Helvetica, sans-serif; color: #333; }
  article { display: block; text-align: left; width: 650px; margin: 0 auto; }
  a { color: #dc8100; text-decoration: none; }
  a:hover { color: #333; text-decoration: none; }
</style>

<article>
    <h1>We&rsquo;ll be back soon!</h1>
    <div>
        <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:support@ispman.tech">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
        <p>&mdash; The ISPMAN Team </p>
    </div>
</article>
    `)
  
  // Delete headers
  newResponse.headers.delete("x-header-to-delete")
  newResponse.headers.delete("x-header2-to-delete")
  
  // Adjust the value for an existing header
  newResponse.headers.set("x-header-to-change", "NewValue")
  
  return newResponse
}

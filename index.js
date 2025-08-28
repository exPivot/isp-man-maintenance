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
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/css">@font-face {font-family:Manrope;font-style:normal;font-weight:400;src:url(/cf-fonts/v/manrope/5.0.18/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:400;src:url(/cf-fonts/v/manrope/5.0.18/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:400;src:url(/cf-fonts/v/manrope/5.0.18/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:400;src:url(/cf-fonts/v/manrope/5.0.18/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:400;src:url(/cf-fonts/v/manrope/5.0.18/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:400;src:url(/cf-fonts/v/manrope/5.0.18/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:500;src:url(/cf-fonts/v/manrope/5.0.18/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:500;src:url(/cf-fonts/v/manrope/5.0.18/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:500;src:url(/cf-fonts/v/manrope/5.0.18/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:500;src:url(/cf-fonts/v/manrope/5.0.18/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:500;src:url(/cf-fonts/v/manrope/5.0.18/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:500;src:url(/cf-fonts/v/manrope/5.0.18/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:600;src:url(/cf-fonts/v/manrope/5.0.18/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:600;src:url(/cf-fonts/v/manrope/5.0.18/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:600;src:url(/cf-fonts/v/manrope/5.0.18/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:600;src:url(/cf-fonts/v/manrope/5.0.18/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:600;src:url(/cf-fonts/v/manrope/5.0.18/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:600;src:url(/cf-fonts/v/manrope/5.0.18/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:700;src:url(/cf-fonts/v/manrope/5.0.18/cyrillic/wght/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:700;src:url(/cf-fonts/v/manrope/5.0.18/greek/wght/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:700;src:url(/cf-fonts/v/manrope/5.0.18/latin/wght/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:700;src:url(/cf-fonts/v/manrope/5.0.18/latin-ext/wght/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:700;src:url(/cf-fonts/v/manrope/5.0.18/vietnamese/wght/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Manrope;font-style:normal;font-weight:700;src:url(/cf-fonts/v/manrope/5.0.18/cyrillic-ext/wght/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}</style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'ispman-blue': '#0083FE'
                    },
                    fontFamily: {
                        'manrope': ['Manrope', 'sans-serif']
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50 font-manrope">
    <section class="relative">
        <div class="w-full py-12 max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full flex-col justify-center items-center lg:gap-14 gap-10 inline-flex">
                <a href="">
                    <img src="https://static.ispman.tech/logo.png" alt="ISPMAN Logo" class="w-30 h-24 filter drop-shadow-lg" onerror="this.style.display='none'">
                </a>
                <div class="w-full flex-col justify-center items-center gap-5 flex">
                    <div class="w-full flex-col justify-center items-center gap-6 flex">
                        <div class="w-full flex-col justify-start items-center gap-2.5 flex">
                            <h2 class="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">Please bear with us! We're currently under maintenance.</h2>
                            <p class="text-center text-gray-500 text-base font-normal leading-relaxed">We're working hard to improve your experience. We'll be back online in:</p>
                        </div>
                        <div class="flex items-start justify-center w-full gap-1 count-down-main">
                            <div class="timer">
                              <div class="">
                                <h3 class="countdown-element days text-center text-black text-3xl font-normal font-manrope leading-normal">00</h3>
                              </div>
                            </div>
                            <h3 class="text-center text-black text-3xl font-normal font-manrope leading-normal">:</h3>
                            <div class="timer">
                              <div class="">
                                <h3 class="countdown-element hours text-center text-black text-3xl font-normal font-manrope leading-normal">00</h3>
                              </div>
                            </div>
                            <h3 class="text-center text-black text-3xl font-normal font-manrope leading-normal">:</h3>
                            <div class="timer">
                              <div class="">
                                <h3 class="countdown-element minutes text-center text-black text-3xl font-normal font-manrope leading-normal">00</h3>
                              </div>
                            </div>
                            <h3 class="text-center text-black text-3xl font-normal font-manrope leading-normal">:</h3>
                            <div class="timer">
                              <div class="">
                                <h3 class="countdown-element seconds text-center text-black text-3xl font-normal font-manrope leading-normal">00</h3>
                              </div>
                            </div>
                          </div>
                        <div class="w-full justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                            <input type="text" id="emailInput" class="sm:w-80 w-full h-10 focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300" placeholder="Enter your email for updates">
                            <button onclick="notifyMe()" class="sm:w-fit w-full px-3.5 py-2 bg-ispman-blue hover:bg-blue-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span class="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">Notify Me</span>
                            </button>
                        </div>
                         <img src="https://ispman-static.expivot.tech/maintenance-mode-hero.png" alt="under maintenance image" class="object-cover mt-8 max-w-full h-auto">
                        <div class="mt-6 text-center">
                            <p class="text-gray-600 text-sm mb-3">Need immediate assistance? Reach us:</p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a href="mailto:support@ispman.co.ke" class="flex items-center gap-2 text-ispman-blue hover:text-blue-600 transition-colors">
                                    <span>📧</span>
                                    <span class="font-medium">support@ispman.co.ke</span>
                                </a>
                                <a href="tel:+254796777333" class="flex items-center gap-2 text-ispman-blue hover:text-blue-600 transition-colors">
                                    <span>📞</span>
                                    <span class="font-medium">+254 796 777 333</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        // Countdown timer - Count down to end of current hour
        function getNextHourEnd() {
            let now = new Date();
            let target = new Date();
            
            // Set target to the end of the current hour (start of next hour)
            target.setHours(now.getHours() + 1, 0, 0, 0);
            
            return target;
        }
        
        let dest = getNextHourEnd();

        let x = setInterval(function () {
            let now = new Date().getTime();
            let diff = dest.getTime() - now;

            // Check if the countdown has reached zero or negative
            if (diff <= 0) {
                // Reset to end of next hour
                dest = getNextHourEnd();
                return;
            }

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);

            // Format with leading zeros
            days = days < 10 ? '0' + days : days;
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            // Update countdown elements
            let countdownElements = document.getElementsByClassName("countdown-element");
            for (let i = 0; i < countdownElements.length; i++) {
                let className = countdownElements[i].classList[1];
                switch (className) {
                    case "days":
                        countdownElements[i].innerHTML = days;
                        break;
                    case "hours":
                        countdownElements[i].innerHTML = hours;
                        break;
                    case "minutes":
                        countdownElements[i].innerHTML = minutes;
                        break;
                    case "seconds":
                        countdownElements[i].innerHTML = seconds;
                        break;
                    default:
                        break;
                }
            }
        }, 1000);

        // Email notification function
        function notifyMe() {
            const email = document.getElementById('emailInput').value;
            if (!email) {
                alert('Please enter your email address');
                return;
            }

            // Basic email validation
            const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Store email (in a real implementation, you'd send this to your backend)
            localStorage.setItem('notificationEmail', email);
            document.getElementById('emailInput').value = '';
            alert('Thank you! We will notify you when we are back online.');
        }
    </script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"97672aa75cb68a65","serverTiming":{"name":{"cfExtPri":true,"cfEdge":true,"cfOrigin":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"version":"2025.8.0","token":"a22aa7dbc53e4a32942193235c21c5d0"}' crossorigin="anonymous"></script>
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

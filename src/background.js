'use strict';

// With background scripts you can communicate extension files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi Ove, my name is Bac. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});

// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     if (details.url.includes('tongdun')) {
//       console.log('1111' + details.url);

//     }
//     // if (details.url.indexOf("url-of-the-original-script.js") > -1) {
//     //   return { redirectUrl: chrome.runtime.getURL("replacement.js") };
//     // }
//   },
//   { urls: ["<all_urls>"] },
//   ["requestBody"]
// );

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { urlMatches: '(developer.chrome|facebook|wikipedia)\.com|.org' },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  chrome.tabs.onUpdated.addListener(function (tabs) {
    chrome.tabs.query({ active: true }, function (tabs) {
      const current_url = tabs[0].url;
      // const trackableUrls = ["facebook.com", "wikipedia.com"];

      // if (trackableUrls.includes(current_url)) {
      //   chrome.browserAction.setPopup({ popup: 'index.html' })
      // }
      if (current_url.includes("facebook.com")) {
        chrome.browserAction.setPopup({ popup: 'facebook.html' });
      }else if(current_url.includes("wikipedia.org")){
        chrome.browserAction.setPopup({ popup: 'wikipedia.html' });
      } else {
        chrome.browserAction.setPopup({ popup: 'popup.html' });
      }
    });
  })
});

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
      const supported_urls = ['facebook.com', 'wikipedia.org']
      const current_url = tabs[0].url;
      // const trackableUrls = ["facebook.com", "wikipedia.com"];

      // if (trackableUrls.includes(current_url)) {
      //   chrome.pageAction.setPopup({ popup: 'index.html' })
      // }
      const tabsID = tabs[0].id
      if (current_url.includes("facebook.com")) {
        chrome.pageAction.setPopup({tabId:tabsID, popup: 'facebook.html'});
      }
      if(current_url.includes("wikipedia.org")){
        chrome.pageAction.setPopup({tabId:tabsID, popup: 'wikipedia.html'});
      } else {
        chrome.pageAction.setPopup({tabId:tabsID, popup: 'popup.html'});
      }
    });
  })
});

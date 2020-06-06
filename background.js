chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: '#3aa757' }, function (tab) {
    var link = document.createElement('a')
    console.log("host", link)
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { urlMatches: '(developer.chrome|facebook|Wikipedia)\.com|.org' },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  chrome.tabs.onUpdated.addListener(function (tabs) {
    let current_url
    chrome.tabs.query({ active: true }, function (tabs) {
      let current_url = tabs[0].url
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

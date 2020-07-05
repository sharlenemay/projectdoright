chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { urlMatches: '(developer.chrome|dorchestercollection|amazon|draperesprit|facebook|wikipedia|netflix|google|reddit)\.com|.org' },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  chrome.tabs.onUpdated.addListener(function (tabs) {
    chrome.tabs.query({ active: true }, function (tabs) {
      const currentUrl = tabs[0].url;
      const currentTabId = tabs[0].id;
      const sadJoIcon = 'images/sad_jo_icon.png';
      const happyJoIcon = 'images/happy_jo_icon.png';
      const sadJoNotification = {
        type: 'basic',
        iconUrl: sadJoIcon,
        title: 'Jo is sick!',
        message: 'Judge for yourself'
      };

      if (currentUrl.includes('facebook.com')) {
        chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
        chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Facebook' });
        // chrome.notifications.create(`${Math.random()}`, sadJoNotification); Turning off notifications temporarily
      }

      if(currentUrl.includes('wikipedia.org')){
        chrome.pageAction.setIcon({ tabId: currentTabId, path: happyJoIcon });
        chrome.pageAction.setTitle({ tabId: currentTabId, title: 'wikipedia' });
      }

      if(currentUrl.includes('amazon.com')){
        chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
        chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Amazon' });
        // chrome.notifications.create(`${Math.random()}`, sadJoNotification);
      }

    });
  })
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { urlMatches: '(developer.chrome|dorchestercollection|amazon|primark|draperesprit|facebook|wikipedia|netflix|google|reddit|att|coca-cola|homedepot|xfinity|ups|ebay|YouTube)\.com|.org|.co' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
    chrome.tabs.onUpdated.addListener(function(tabs) {
        chrome.tabs.query({ active: true }, function(tabs) {
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

            if (currentUrl.includes('wikipedia.org')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: happyJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'wikipedia' });
            }

            if (currentUrl.includes('amazon.')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Amazon' });
                // chrome.notifications.create(`${Math.random()}`, sadJoNotification);
            }
            if (currentUrl.includes('netflix.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Netflix' });
            };
            if (currentUrl.includes('att.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'AT&T' });
            };
            if (currentUrl.includes('coca-cola.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Coca-Cola' });
            };
            if (currentUrl.includes('ups.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'UPS' });
            };
            if (currentUrl.includes('ebay.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: happyJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'eBay' });
            };
            if (currentUrl.includes('primark.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Primark' });
            };
            if (currentUrl.includes('homedepot.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Home Depot' });
            };
            if (currentUrl.includes('reddit.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Reddit' });
            };
            if (currentUrl.includes('xfinity.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Comcast' });
            };
            if (currentUrl.includes('google.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: happyJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'Google' });
            };
            if (currentUrl.includes('youtube.com')) {
                chrome.pageAction.setIcon({ tabId: currentTabId, path: sadJoIcon });
                chrome.pageAction.setTitle({ tabId: currentTabId, title: 'YouTube' });
            };
        })
    })
});
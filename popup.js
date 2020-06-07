let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});
chrome.tabs.query({ active: true }, function (tabs) {
    const supported_urls = ['facebook.com', 'wikipedia.org']
    const current_url = tabs[0].url;
    const tabsID = tabs[0].id
    // alert(current_url) /* we have the current url here*/
});
changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};
const btn = document.getElementById('btn');
btn.onclick = function() {
    console.log('Data >>', window.location);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log('Data >>', tabs);
    })
}


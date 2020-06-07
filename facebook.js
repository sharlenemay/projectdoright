// function getInfo() {
//     alert('https://en.wikipedia.org/wiki/Criticism_of_Facebook');
// }

const infoBtn = document.getElementById('info');

console.log("this is awesome")

infoBtn.onclick = function() {
    chrome.tabs.query({active: true}, function(tabs) {
        const currentTab = tabs[0];
        currentTab.url = 'https://en.wikipedia.org/wiki/Criticism_of_Facebook'
    });
}


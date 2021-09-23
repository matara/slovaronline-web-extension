$("#button-submit").button().click(function () {
    openNewTab()
});

$("#phrase-input").keyup(function (e) {
    if (e.keyCode === 13) {
        openNewTab()
    }
});

function openNewTab() {
    let inputValue = $('#phrase-input').val()
    console.log(inputValue)
    if (inputValue.length > 0) {
        chrome.tabs.create({url: "https://slovaronline.com/search?s=" + inputValue});
    }
}

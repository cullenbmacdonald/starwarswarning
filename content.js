var lastCheckedSite = window.location.href,
    hasAgreedToDealWithIt = false

var checkForMatchAndWarn = function() {
    if (window.location.href == lastCheckedSite && hasAgreedToDealWithIt) { return }
    lastCheckedSite = window.location.href

    var text = document.body.innerHTML,
        regex = /star\s*wars/i

    if (regex.exec(text)) {
        var blocker = document.createElement("div")
        blocker.style.width = "100%"
        blocker.style.height = "100%"
        blocker.style.position = "fixed"
        blocker.style.top = 0
        blocker.style.left = 0
        blocker.style.display = "block"
        blocker.style.background = "black"
        blocker.style.zIndex = 2147483640

        document.body.appendChild(blocker)

        if (confirm("Warning: This page mentions Star Wars. Do you want to continue?")) {
            document.body.removeChild(blocker)
            hasAgreedToDealWithIt = true
        } else {
            window.location = "https://www.google.com/search?q=cute+kittens&espv=2&biw=1911&bih=1464&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwiuy9X1-d7JAhWMsh4KHcAPC5YQ_AUIBigB&dpr=0.9"
        }
    }
}

setInterval(checkForMatchAndWarn, 3000)
checkForMatchAndWarn()

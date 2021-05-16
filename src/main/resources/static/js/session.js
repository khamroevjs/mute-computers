window.onload = function () {
    getAndCheck('cpu')
    getAndCheck('gpu')
    getAndCheck('motherboard')
    getAndCheckStorage('ram')
    getAndCheck('power')
    getAndCheck('cooler')
    getAndCheckStorage('ssd')
    getAndCheckStorage('hdd')
    getAndCheck('case')
}

window.onbeforeunload = function () {
    setOrRemoveItem('cpu')
    setOrRemoveItem('gpu')
    setOrRemoveItem('motherboard')
    setOrRemoveStorage('ram')
    setOrRemoveItem('power')
    setOrRemoveItem('cooler')
    setOrRemoveStorage('ssd')
    setOrRemoveStorage('hdd')
    setOrRemoveItem('case')
}

function setOrRemoveStorage(name) {
    const item = document.querySelector('input[name=' + name + ']:checked')
    if (item === null) {
        localStorage.removeItem(name)
        localStorage.removeItem(name + '-quantity')
        return
    }
    const itemQuantity = item.nextElementSibling.nextElementSibling.value
    localStorage.setItem(name, item.value)
    localStorage.setItem(name + '-quantity', itemQuantity)
}

function getAndCheckStorage(name) {
    const itemValue = localStorage.getItem(name)

    if (itemValue !== null) {
        const radio = document.querySelector('input[value="' + itemValue + '"]')
        radio.checked = true
        const select = radio.nextElementSibling.nextElementSibling
        select.hidden = false
        select.value = localStorage.getItem(name + '-quantity')
    }
}

function setOrRemoveItem(name) {
    const item = document.querySelector('input[name=' + name + ']:checked')
    if (item === null) {
        localStorage.removeItem(name)
        return
    }

    localStorage.setItem(name, item.value)
}

function getAndCheck(key) {
    const itemValue = localStorage.getItem(key);
    if (itemValue !== null)
        document.querySelector('input[value="' + itemValue + '"]').checked = true
}

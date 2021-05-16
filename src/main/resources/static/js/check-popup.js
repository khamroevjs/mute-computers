function checkComponents() {
    const cpuValue = document.querySelector("input[name=cpu]:checked") // manufacturer, name, socket, integratedGraphics
    const gpuValue = document.querySelector("input[name=gpu]:checked")
    const motherboardValue = document.querySelector("input[name=motherboard]:checked") // manufacturer, name, memorySlots, socket, chipset
    const ramValue = document.querySelector("input[name=ram]:checked")
    const powerValue = document.querySelector("input[name=power]:checked")
    const coolerValue = document.querySelector("input[name=cooler]:checked")
    const ssdValue = document.querySelector("input[name=ssd]:checked")
    const hddValue = document.querySelector("input[name=hdd]:checked")
    const caseValue = document.querySelector("input[name=case]:checked")

    const modal = document.getElementById('check-modal')

    let allSelected = true
    const trArray = modal.querySelectorAll('tr')

    allSelected &= addComponent(trArray[0], cpuValue)
    allSelected &= addGpu(trArray[1], gpuValue)
    allSelected &= addComponent(trArray[2], motherboardValue)
    allSelected &= addRam(trArray[3], ramValue)
    allSelected &= addComponent(trArray[4], powerValue)
    allSelected &= addComponent(trArray[5], coolerValue)
    allSelected &= addStorage(trArray[6], trArray[7], ssdValue, hddValue)
    allSelected &= addComponent(trArray[8], caseValue)

    // Determining the overall problem
    const firstImg = modal.querySelector('img')
    const h1 = firstImg.nextElementSibling.firstElementChild
    if (!allSelected) {
        firstImg.src = '/svg/cancel.svg'
        firstImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        firstImg.classList.add('filter-red')
        h1.innerHTML = 'Please, choose all required components'
        h1.nextElementSibling.innerHTML = '' //todo can be remove
        h1.nextElementSibling.style.display = 'none'
        return;
    }

    const cpuValueArray = cpuValue.value.split('|')
    const motherboardValueArray = motherboardValue.value.split('|')
    if (cpuValueArray[2] !== motherboardValueArray[3]) {
        const cpuImg = trArray[0].querySelectorAll('td')[2].firstElementChild
        const motherboardImg = trArray[2].querySelectorAll('td')[2].firstElementChild
        cpuImg.setAttribute('src', '/svg/cancel.svg')
        cpuImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        cpuImg.classList.add('filter-red')
        motherboardImg.setAttribute('src', '/svg/cancel.svg')
        motherboardImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        motherboardImg.classList.add('filter-red')
        firstImg.src = '/svg/cancel.svg'
        firstImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        firstImg.classList.add('filter-red')
        h1.innerHTML = 'CPU and Motherboard are incompatible'
        h1.nextElementSibling.innerHTML = 'Please, choose another CPU or Motherboard'
        h1.nextElementSibling.style.display = ''
        return;
    }

    if (!checkChipset(cpuValueArray[0], cpuValueArray[1], motherboardValueArray[4])) {
        const cpuImg = trArray[0].querySelectorAll('td')[2].firstElementChild
        const motherboardImg = trArray[2].querySelectorAll('td')[2].firstElementChild
        cpuImg.setAttribute('src', '/svg/cancel.svg')
        cpuImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        cpuImg.classList.add('filter-red')
        motherboardImg.setAttribute('src', '/svg/cancel.svg')
        motherboardImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        motherboardImg.classList.add('filter-red')
        firstImg.src = '/svg/cancel.svg'
        firstImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        firstImg.classList.add('filter-red')
        h1.innerHTML = 'CPU is incompatible with motherboard\'s chipset'
        h1.nextElementSibling.innerHTML = 'Please, choose another CPU or Motherboard'
        h1.nextElementSibling.style.display = ''
        return;
    }

    if (gpuValue === null && cpuValueArray[3] === 'N/A') {
        const cpuImg = trArray[0].querySelectorAll('td')[2].firstElementChild
        const gpuImg = trArray[1].querySelectorAll('td')[2].firstElementChild
        cpuImg.setAttribute('src', '/svg/cancel.svg')
        cpuImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        cpuImg.classList.add('filter-red')
        gpuImg.setAttribute('src', '/svg/cancel.svg')
        gpuImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        gpuImg.classList.add('filter-red')
        firstImg.src = '/svg/cancel.svg'
        firstImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        firstImg.classList.add('filter-red')
        h1.innerHTML = 'CPU doesn\'t have integrated graphics'
        h1.nextElementSibling.innerHTML = 'Please, choose GPU or CPU with integrated graphics'
        h1.nextElementSibling.style.display = ''
        return;
    }

    const selectedMemories = parseInt(ramValue.nextElementSibling.nextElementSibling.value)
    const memorySlots = parseInt(motherboardValueArray[2])

    if (selectedMemories > memorySlots) {
        const motheboardImg = trArray[2].querySelectorAll('td')[2].firstElementChild
        const ramImg = trArray[3].querySelectorAll('td')[2].firstElementChild
        motheboardImg.setAttribute('src', '/svg/cancel.svg')
        motheboardImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        motheboardImg.classList.add('filter-red')
        ramImg.setAttribute('src', '/svg/cancel.svg')
        ramImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        ramImg.classList.add('filter-red')
        firstImg.src = '/svg/cancel.svg'
        firstImg.classList.remove('filter-green', 'filter-red', 'filter-grey')
        firstImg.classList.add('filter-red')
        h1.innerHTML = 'Motherboard supports only ' + memorySlots + ' memory slots'
        h1.nextElementSibling.innerHTML = 'Please, choose another motherboard or decrease RAM modules'
        h1.nextElementSibling.style.display = ''
        return;
    }

    firstImg.src = '/svg/tick.svg'
    firstImg.classList.remove('filter-green', 'filter-red')
    firstImg.classList.add('filter-green')
    h1.innerHTML = 'All components are compatible'
    h1.nextElementSibling.style.display = 'none'
}

function checkChipset(cpuManufacturer, cpuName, motherboardChipset) {
    if (motherboardChipset[1] === '5')
        return true

    if (cpuManufacturer === 'Intel')
        return cpuName.substring(8, 10) === '10'

    if (cpuName.substring(8, 11) === 'PRO')
        return cpuName[12] === '4'

    return cpuName[8] === '4'
}

function addGpu(tr, gpuValue) {
    const tdArray = tr.querySelectorAll('td')
    const img = tdArray[2].firstElementChild
    if (gpuValue === null) {
        tdArray[1].innerHTML = ''
        img.setAttribute('src', '/svg/cancel.svg')
        img.classList.remove('filter-green', 'filter-red', 'filter-grey')
        img.classList.add('filter-grey')
        return true;
    }

    const valueArray = gpuValue.value.split('|')
    tdArray[1].innerHTML = valueArray[0] + ' ' + valueArray[1]
    img.setAttribute('src', '/svg/tick.svg')
    img.classList.remove('filter-red', 'filter-red', 'filter-grey')
    img.classList.add('filter-green')
    return true;
}

function addRam(tr, ramValue) {
    const tdArray = tr.querySelectorAll('td')
    const img = tdArray[2].firstElementChild
    if (ramValue === null) {
        tdArray[1].innerHTML = ''
        img.setAttribute('src', '/svg/cancel.svg')
        img.classList.remove('filter-green')
        img.classList.add('filter-red')
        return false;
    }

    const quantity = ramValue.nextElementSibling.nextElementSibling.value
    const valueArray = ramValue.value.split('|')
    tdArray[1].innerHTML = quantity + 'x ' + valueArray[0] + ' ' + valueArray[1] + ' ' + valueArray[2] + 'GB ' + valueArray[3] + 'MHz'
    img.setAttribute('src', '/svg/tick.svg')
    img.classList.remove('filter-red')
    img.classList.add('filter-green')
    return true;
}

function addStorage(tr1, tr2, ssdValue, hddValue) {
    const tdArray1 = tr1.querySelectorAll('td')
    const tdArray2 = tr2.querySelectorAll('td')
    const img1 = tdArray1[2].firstElementChild
    const img2 = tdArray2[2].firstElementChild
    if (ssdValue === null && hddValue === null) {
        tdArray1[1].innerHTML = ''
        tdArray2[1].innerHTML = ''
        img1.setAttribute('src', '/svg/cancel.svg')
        img2.setAttribute('src', '/svg/cancel.svg')
        img1.classList.remove('filter-green', 'filter-red', 'filter-grey')
        img2.classList.remove('filter-green', 'filter-red', 'filter-grey')
        img1.classList.add('filter-red')
        img2.classList.add('filter-red')
        return false;
    }

    if (ssdValue !== null && hddValue === null) {
        const ssdQuantity = ssdValue.nextElementSibling.nextElementSibling.value
        const ssdValueArray = ssdValue.value.split('|')
        tdArray1[1].innerHTML = ssdQuantity + 'x ' + ssdValueArray[0] + ' ' + ssdValueArray[1]
        tdArray2[1].innerHTML = ''
        img1.setAttribute('src', '/svg/tick.svg')
        img2.setAttribute('src', '/svg/cancel.svg')
        img1.classList.remove('filter-green', 'filter-red', 'filter-grey')
        img2.classList.remove('filter-green', 'filter-red', 'filter-grey')
        img1.classList.add('filter-green')
        img2.classList.add('filter-grey')
        return true;
    }
    if (ssdValue === null && hddValue !== null) {
        const hddQuantity = hddValue.nextElementSibling.nextElementSibling.value
        const hddValueArray = hddValue.value.split('|')
        tdArray1[1].innerHTML = ''
        tdArray2[1].innerHTML = hddQuantity + 'x ' + hddValueArray[0] + ' ' + hddValueArray[1]
        img1.setAttribute('src', '/svg/cancel.svg')
        img2.setAttribute('src', '/svg/tick.svg')
        img1.classList.remove('filter-green', 'filter-red', 'filter-grey')
        img2.classList.remove('filter-green', 'filter-red', 'filter-grey')
        img1.classList.add('filter-grey')
        img2.classList.add('filter-green')
        return true;
    }

    const ssdQuantity = ssdValue.nextElementSibling.nextElementSibling.value
    const hddQuantity = hddValue.nextElementSibling.nextElementSibling.value
    const hddValueArray = hddValue.value.split('|')
    const ssdValueArray = ssdValue.value.split('|')
    tdArray1[1].innerHTML = ssdQuantity + 'x ' + ssdValueArray[0] + ' ' + ssdValueArray[1]
    tdArray2[1].innerHTML = hddQuantity + 'x ' + hddValueArray[0] + ' ' + hddValueArray[1]
    img1.setAttribute('src', '/svg/tick.svg')
    img2.setAttribute('src', '/svg/tick.svg')
    img1.classList.remove('filter-green', 'filter-red', 'filter-grey')
    img2.classList.remove('filter-green', 'filter-red', 'filter-grey')
    img1.classList.add('filter-green')
    img2.classList.add('filter-green')
    return true;
}

function addComponent(tr, element) {
    const tdArray = tr.querySelectorAll('td')
    const img = tdArray[2].firstElementChild
    if (element === null) {
        tdArray[1].innerHTML = ''
        img.setAttribute('src', '/svg/cancel.svg')
        img.classList.remove('filter-green', 'filter-red', 'filter-grey')
        img.classList.add('filter-red')
        return false;
    }

    const valueArray = element.value.split('|')
    tdArray[1].innerHTML = valueArray[0] + ' ' + valueArray[1]
    img.setAttribute('src', '/svg/tick.svg')
    img.classList.remove('filter-green', 'filter-red', 'filter-grey')
    img.classList.add('filter-green')
    return true;
}

/** All cases:
 1. [x] Please, choose all required components
 2. [x] CPU and Motherboard are incompatible. Please, choose another CPU or Motherboard
 3. [x] CPU is incompatible with motherboard's chipset. Please, choose another CPU or Motherboard
 3. [x] CPU doesn't have integrated graphics. Please, choose GPU or CPU with integrated graphics.
 4. Motherboard don't support 4 memory slots. Please, choose another motherboard or decrease RAMs modules

 1. (x) CPU and Motherboard are incompatible. Please, choose another CPU or Motherboard
 2. (x) CPU doesn't have integrated graphics. Please, choose GPU or CPU with integrated graphics.
 3. (x) Please, choose all required components
 *list of all components*
 4. (x) Some components are incompatible
 5. () All components are compatible
 */
function exportPdf() {
    const cpuValue = document.querySelector("input[name=cpu]:checked") // manufacturer, name, socket, integratedGraphics
    const gpuValue = document.querySelector("input[name=gpu]:checked")
    const motherboardValue = document.querySelector("input[name=motherboard]:checked") // manufacturer, name, memorySlots, socket, chipset
    const ramValue = document.querySelector("input[name=ram]:checked")
    const powerValue = document.querySelector("input[name=power]:checked")
    const coolerValue = document.querySelector("input[name=cooler]:checked")
    const ssdValue = document.querySelector("input[name=ssd]:checked")
    const hddValue = document.querySelector("input[name=hdd]:checked")
    const caseValue = document.querySelector("input[name=case]:checked")

    const template = document.getElementById('pdf-template')
    const tdArray = template.querySelectorAll('td')
    tdArray[1].innerText = getComponentString(cpuValue)
    tdArray[3].innerText = getComponentString(gpuValue)
    tdArray[5].innerText = getComponentString(motherboardValue)

    tdArray[7].innerHTML = getRamString(ramValue)
    tdArray[9].innerText = getComponentString(powerValue)
    tdArray[11].innerText = getComponentString(coolerValue)

    tdArray[13].innerText = getStorageString(ssdValue)
    tdArray[15].innerText = getStorageString(hddValue)
    tdArray[17].innerText = getComponentString(caseValue)

    // Setting the date
    const today = new Date()
    const date = String(today.getDate()).padStart(2, '0') + '.' + String(today.getMonth() + 1).padStart(2, '0') + '.' + today.getFullYear()
    const time = today.getHours() + ':' + today.getMinutes()
    document.getElementById('date').lastElementChild.innerHTML = date + ' ' + time.padStart(2, '0')

    // Exporting PDF
    const opt = {
        margin: 0.5,
        filename: 'configuration.pdf',
        image: {type: 'jpeg', quality: '1'},
        html2canvas: {scale: 2},
        jsPDF: {unit: 'in', format: 'A4', orientation: 'portrait'}
    };
    html2pdf().set(opt).from(template).save()
}

function getComponentString(element) {
    if (element === null)
        return ''

    const elementArray = element.value.split('|')
    return elementArray[0] + ' ' + elementArray[1]
}

function getRamString(ramValue) {
    if (ramValue === null)
        return ''

    const ramQuantity = ramValue.nextElementSibling.nextElementSibling.value
    const ramArray = ramValue.value.split('|')
    return ramQuantity + 'x ' + ramArray[0] + ' ' + ramArray[1] + ' ' + ramArray[2] + 'GB ' + ramArray[3] + 'MHz'
}

function getStorageString(storageValue) {
    if (storageValue === null)
        return ''

    const storageQuantity = storageValue.nextElementSibling.nextElementSibling.value
    const storageArray = storageValue.value.split('|')
    return storageQuantity + 'x ' + storageArray[0] + ' ' + storageArray[1]
}
function popupCpu(manufacturer, name, releaseYear, fabricationProcess, TDP, socket, microarchitecture, codeName, cores,
                  threads, baseFrequency, turboFrequency, L1CacheInstruction, L1CacheDate, L2Cache, L3Cache,
                  unlockedMultiplier, memoryType, memoryBandwidth, memoryChannels, maxMemorySize, ECCMemory,
                  integratedGraphics, PCIExpressRevision, PCIExpressLanes) {

    const element = document.getElementById('modal_body')
    element.innerHTML = ''

    const button = createButton()
    element.append(button)

    const img = createImg('cpu')
    element.append(img)

    const title = createTitle(manufacturer, name)
    element.append(title)

    const div = createDiv()
    element.append(div)

    // Main content
    let divRow = createDivRow()
    let span1 = createSpan('Release Year')
    divRow.append(span1)
    let span2 = createSpan(releaseYear)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Fab. Process')
    divRow.append(span1)
    span2 = createSpan(fabricationProcess + ' nm')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('TDP')
    divRow.append(span1)
    span2 = createSpan(TDP + ' W')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Socket')
    divRow.append(span1)
    span2 = createSpan(socket)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Microarchitecture')
    divRow.append(span1)
    span2 = createSpan(microarchitecture)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Codename')
    divRow.append(span1)
    span2 = createSpan(codeName)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Cores')
    divRow.append(span1)
    span2 = createSpan(cores)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Threads')
    divRow.append(span1)
    span2 = createSpan(threads)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Base Frequency')
    divRow.append(span1)
    span2 = createSpan(baseFrequency + ' GHz')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Turbo Frequency')
    divRow.append(span1)
    span2 = createSpan(turboFrequency + ' GHz')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('L1 Cache (Instruction)')
    divRow.append(span1)
    span2 = createSpan(L1CacheInstruction)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('L1 Cache (Data)')
    divRow.append(span1)
    span2 = createSpan(L1CacheDate)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('L2 Cache')
    divRow.append(span1)
    span2 = createSpan(L2Cache)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('L3 Cache')
    divRow.append(span1)
    span2 = createSpan(L3Cache)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Unlocked Multiplier')
    divRow.append(span1)
    span2 = createSpan(unlockedMultiplier ? 'Yes' : 'No')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Type')
    divRow.append(span1)
    span2 = createSpan(memoryType)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Bandwidth')
    divRow.append(span1)
    span2 = createSpan(memoryBandwidth + " GB/s")
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Channels')
    divRow.append(span1)
    span2 = createSpan(memoryChannels)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Max. Memory Size')
    divRow.append(span1)
    span2 = createSpan(maxMemorySize + " GB")
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('ECC Memory')
    divRow.append(span1)
    span2 = createSpan(ECCMemory ? 'Yes' : 'No')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Integrated Graphics')
    divRow.append(span1)
    span2 = createSpan(integratedGraphics)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('PCI-Express')
    divRow.append(span1)
    span2 = createSpan(PCIExpressRevision)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('PCI-Express Lanes')
    divRow.append(span1)
    span2 = createSpan(PCIExpressLanes)
    divRow.append(span2)
    div.append(divRow)
}

function popupGpu(
    manufacturer,
    name,
    releaseYear,
    microarchitecture,
    fabricationProcess,
    TDP,
    interfacePort,
    multiGPUSupport,
    baseClock,
    boostClock,
    shadingUnits,
    L1Cache,
    L2Cache,
    L3Cache,
    memoryType,
    memorySize,
    memoryClock,
    memoryClockEffective,
    memoryBus,
    memoryBandwidth) {

    const element = document.getElementById('modal_body')
    element.innerHTML = ''

    const button = createButton()
    element.append(button)

    const img = createImg('gpu')
    element.append(img)

    const title = createTitle(manufacturer, name)
    element.append(title)

    const div = createDiv()
    element.append(div)

    // Main content
    let divRow = createDivRow()
    let span1 = createSpan('Release Year')
    divRow.append(span1)
    let span2 = createSpan(releaseYear)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Fab. Process')
    divRow.append(span1)
    span2 = createSpan(fabricationProcess + ' nm')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('TDP')
    divRow.append(span1)
    span2 = createSpan(TDP + ' W')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Interface')
    divRow.append(span1)
    span2 = createSpan(interfacePort)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Microarchitecture')
    divRow.append(span1)
    span2 = createSpan(microarchitecture)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Multi-GPU Support')
    divRow.append(span1)
    span2 = createSpan(multiGPUSupport)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Base Clock')
    divRow.append(span1)
    span2 = createSpan(baseClock + ' MHz')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Boost Clock')
    divRow.append(span1)
    span2 = createSpan(boostClock + ' MHz')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Shading Units')
    divRow.append(span1)
    span2 = createSpan(shadingUnits)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('L1 Cache')
    divRow.append(span1)
    span2 = createSpan(L1Cache)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('L2 Cache')
    divRow.append(span1)
    span2 = createSpan(L2Cache)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('L3 Cache')
    divRow.append(span1)
    span2 = createSpan(L3Cache)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Type')
    divRow.append(span1)
    span2 = createSpan(memoryType)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Type')
    divRow.append(span1)
    span2 = createSpan(memoryType)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Size')
    divRow.append(span1)
    span2 = createSpan(memorySize + ' GB')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Clock')
    divRow.append(span1)
    span2 = createSpan(memoryClock + ' MHz')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Clock (Effective)')
    divRow.append(span1)
    span2 = createSpan(memoryClockEffective + ' MHz')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Bus')
    divRow.append(span1)
    span2 = createSpan(memoryBus + ' bits')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Bandwidth')
    divRow.append(span1)
    span2 = createSpan(memoryBandwidth + ' GB/s')
    divRow.append(span2)
    div.append(divRow)
}

function popupMotherboard(
    manufacturer,
    name,
    chipset,
    formFactor,
    memorySlots,
    socket,
    wifiSupport,
    bluetoothSupport,
    PCIExpressRevision
) {
    const element = document.getElementById('modal_body')
    element.innerHTML = ''

    const button = createButton()
    element.append(button)

    const img = createImg('motherboard')
    element.append(img)

    const title = createTitle(manufacturer, name)
    element.append(title)

    const div = createDiv()
    element.append(div)

    // Main content
    let divRow = createDivRow()
    let span1 = createSpan('Chipset')
    divRow.append(span1)
    let span2 = createSpan(chipset)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Form Factor')
    divRow.append(span1)
    span2 = createSpan(formFactor)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Memory Slots')
    divRow.append(span1)
    span2 = createSpan(memorySlots)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Socket')
    divRow.append(span1)
    span2 = createSpan(socket)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Wi-Fi Support')
    divRow.append(span1)
    span2 = createSpan(wifiSupport ? ' Yes' : 'No')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Bluetooth Support')
    divRow.append(span1)
    span2 = createSpan(bluetoothSupport ? ' Yes' : 'No')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('PCI-Express Revision')
    divRow.append(span1)
    span2 = createSpan(PCIExpressRevision)
    divRow.append(span2)
    div.append(divRow)
}

function popupRam(manufacturer,
                  name,
                  speed, //MHz
                  capacity,
                  type) {

    const element = document.getElementById('modal_body')
    element.innerHTML = ''

    const button = createButton()
    element.append(button)

    const img = createImg('ram')
    element.append(img)

    const title = createTitle(manufacturer, name)
    element.append(title)

    const div = createDiv()
    element.append(div)

    // Main content
    let divRow = createDivRow()
    let span1 = createSpan('Speed')
    divRow.append(span1)
    let span2 = createSpan(speed + ' MHz')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Capacity')
    divRow.append(span1)
    span2 = createSpan(capacity + ' GB')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Type')
    divRow.append(span1)
    span2 = createSpan(type)
    divRow.append(span2)
    div.append(divRow)
}

function popupPower(manufacturer, name, certificate80Plus, wattage) {
    const element = document.getElementById('modal_body')
    element.innerHTML = ''

    const button = createButton()
    element.append(button)

    const img = createImg('power')
    element.append(img)

    const title = createTitle(manufacturer, name)
    element.append(title)

    const div = createDiv()
    element.append(div)

    // Main content
    let divRow = createDivRow()
    let span1 = createSpan('Certificate 80Plus')
    divRow.append(span1)
    let span2 = createSpan(certificate80Plus)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Wattage')
    divRow.append(span1)
    span2 = createSpan(wattage + ' W')
    divRow.append(span2)
    div.append(divRow)
}

function popupCooler(manufacturer, name, type, dimensions, TDP, fanCount) {
    const element = document.getElementById('modal_body')
    element.innerHTML = ''

    const button = createButton()
    element.append(button)

    const img = createImg('cooler')
    element.append(img)

    const title = createTitle(manufacturer, name)
    element.append(title)

    const div = createDiv()
    element.append(div)

    // Main content
    let divRow = createDivRow()
    let span1 = createSpan('Type')
    divRow.append(span1)
    let span2 = createSpan(type)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Dimensions (L x W x H)')
    divRow.append(span1)
    span2 = createSpan(dimensions)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('TDP')
    divRow.append(span1)
    span2 = createSpan(TDP + ' W')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Fans')
    divRow.append(span1)
    span2 = createSpan(fanCount)
    divRow.append(span2)
    div.append(divRow)
}

function popupSsd(manufacturer, name, capacity, readSpeed, writeSpeed, totalBytesWritten, formFactor) {
    const element = document.getElementById('modal_body')
    element.innerHTML = ''

    const button = createButton()
    element.append(button)

    const img = createImg('ssd')
    element.append(img)

    const title = createTitle(manufacturer, name)
    element.append(title)

    const div = createDiv()
    element.append(div)

    // Main content
    let divRow = createDivRow()
    let span1 = createSpan('Capacity')
    divRow.append(span1)
    let span2 = createSpan(capacity + ' GB')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Read Speed')
    divRow.append(span1)
    span2 = createSpan(readSpeed + ' MB/s')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Write Speed')
    divRow.append(span1)
    span2 = createSpan(writeSpeed + ' MB/s')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Total Bytes Written (TBW)')
    divRow.append(span1)
    span2 = createSpan(totalBytesWritten + ' TB')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Form Factor')
    divRow.append(span1)
    span2 = createSpan(formFactor)
    divRow.append(span2)
    div.append(divRow)
}

function popupHdd(manufacturer, name, capacity, readSpeed, writeSpeed, cache, formFactor) {
    const element = document.getElementById('modal_body')
    element.innerHTML = ''

    const button = createButton()
    element.append(button)

    const img = createImg('hdd')
    element.append(img)

    const title = createTitle(manufacturer, name)
    element.append(title)

    const div = createDiv()
    element.append(div)

    // Main content
    let divRow = createDivRow()
    let span1 = createSpan('Capacity')
    divRow.append(span1)
    let span2 = createSpan(capacity + ' TB')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Read Speed')
    divRow.append(span1)
    span2 = createSpan(readSpeed + ' MB/s')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Write Speed')
    divRow.append(span1)
    span2 = createSpan(writeSpeed + ' MB/s')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Cache')
    divRow.append(span1)
    span2 = createSpan(cache + ' MB')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Form Factor')
    divRow.append(span1)
    span2 = createSpan(formFactor)
    divRow.append(span2)
    div.append(divRow)
}

function popupCase(manufacturer, name, size, dimensions, weight, maxCoolerHeight, maxGpuLength) {
    const element = document.getElementById('modal_body')
    element.innerHTML = ''

    const button = createButton()
    element.append(button)

    const img = createImg('case')
    element.append(img)

    const title = createTitle(manufacturer, name)
    element.append(title)

    const div = createDiv()
    element.append(div)

    // Main content
    let divRow = createDivRow()
    let span1 = createSpan('Size')
    divRow.append(span1)
    let span2 = createSpan(size)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Dimensions')
    divRow.append(span1)
    span2 = createSpan(dimensions)
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Weight')
    divRow.append(span1)
    span2 = createSpan(weight + ' KG')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Max Cooler Height')
    divRow.append(span1)
    span2 = createSpan(maxCoolerHeight + ' mm')
    divRow.append(span2)
    div.append(divRow)

    divRow = createDivRow()
    span1 = createSpan('Max GPU Length')
    divRow.append(span1)
    span2 = createSpan(maxGpuLength + ' mm')
    divRow.append(span2)
    div.append(divRow)
}

//region Styles
function createDivRow() {
    const divRow = document.createElement('div')
    divRow.classList.add('row')
    return divRow
}

function createSpan(innerText) {
    const span = document.createElement('span')
    span.classList.add('col', 'fs-5')
    span.innerText = innerText
    return span
}

function createButton() {
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('data-bs-dismiss', 'modal')
    button.setAttribute('aria-label', 'Close')
    button.classList.add('btn-close', 'align-self-end', 'mt-2', 'me-2')
    return button
}

function createImg(imageName) {
    const img = document.createElement('img')
    img.classList.add('align-self-center')
    img.width = 250
    img.src = '/svg/' + imageName + '.svg'
    img.alt = '#';
    return img
}

function createTitle(manufacturer, name) {
    const title = document.createElement('span')
    title.classList.add('fs-2', 'ms-3', 'mt-3', 'mb-1')
    title.innerText = manufacturer + ' ' + name
    return title
}

function createDiv() {
    const div = document.createElement('div')
    div.classList.add('ms-3', 'mb-3')
    return div
}

//endregion
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
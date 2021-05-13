function checkComponents() {
    const cpuArray = document.querySelector("input[name=cpu]:checked").value.split('|')
    const cpuManufacturer = cpuArray[0]
    const cpuName = cpuArray[1]
    //
    // if (cpu !== undefined) {
    //     const cpuName = cpu.nextElementSibling.nextElementSibling.innerHTML
    //     alert(cpu.value + "\n" + cpuName)
    // }


    const modal = document.getElementById('check-modal')
    const firstImg = modal.querySelector('img')
    firstImg.src = '/svg/tick.svg'
    firstImg.classList.replace('filter-red','filter-green')

    const h1 = firstImg.nextElementSibling.firstElementChild
    h1.innerHTML = 'Hello, World'
    h1.nextElementSibling.innerHTML = '1234'


    const tr = modal.querySelector('tr')
    const td2 = tr.firstElementChild.nextElementSibling
    td2.innerHTML = cpuManufacturer + ' ' + cpuName
    const img = td2.nextElementSibling.firstElementChild
    img.setAttribute('src','/svg/tick.svg')
    img.classList.replace('filter-red','filter-green')

    //
    // tdArray[1].innerText = cpuManufacturer + ' ' + cpuName
    // tdArray[2].firstElementChild.setAttribute('src','/svg/tick.svg')
}

/** All cases:

 1. (x) CPU and Motherboard are incompatible. Please, choose another CPU or Motherboard
 2. (x) CPU doesn't have integrated graphics. Please, choose GPU or CPU with integrated graphics.
 3. (x) Please, choose all required components
 *list of all components*
 4. (x) Some components are incompatible
 5. () All components are compatible
 */
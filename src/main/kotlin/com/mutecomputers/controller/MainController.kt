package com.mutecomputers.controller

import com.mutecomputers.model.Motherboard
import com.mutecomputers.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

@Controller
class MainController @Autowired constructor(
    private val cpuRepository: CPURepository,
    private val gpuRepository: GPURepository,
    private val motherboardRepository: MotherboardRepository,
    private val ramRepository: RAMRepository,
    private val powerRepository: PowerRepository,
    private val coolerRepository: CoolerRepository,
    private val ssdRepository: SSDRepository,
    private val hddRepository: HDDRepository,
    private val caseRepository: CaseRepository
) {

    @GetMapping
    fun info(model: Model): String {

        addCpu(model)
        addGpu(model)
        addMotherboard(model)
        addRam(model)
        addPower(model)
        addCooler(model)
        addSsd(model)
        addHdd(model)
        addCase(model)

        return "main"
    }

    fun addMotherboard(model: Model) {
        val z590 = ArrayList<Motherboard>()
        val h570 = ArrayList<Motherboard>()
        val b560 = ArrayList<Motherboard>()
        val z490 = ArrayList<Motherboard>()
        val h470 = ArrayList<Motherboard>()
        val b460 = ArrayList<Motherboard>()
        val x570 = ArrayList<Motherboard>()
        val b550 = ArrayList<Motherboard>()
        val x470 = ArrayList<Motherboard>()
        val b450 = ArrayList<Motherboard>()
        val motherboards = motherboardRepository.findAll()
        for (item in motherboards) {
            when (item.chipset) {
                "Z590" -> z590.add(item)
                "H570" -> h570.add(item)
                "B560" -> b560.add(item)
                "Z490" -> z490.add(item)
                "H470" -> h470.add(item)
                "B460" -> b460.add(item)
                "X570" -> x570.add(item)
                "B550" -> b550.add(item)
                "X470" -> x470.add(item)
                "B450" -> b450.add(item)
            }
        }
        model.addAttribute("allMotherboards", motherboards)
        model.addAttribute("z590", z590)
        model.addAttribute("h570", h570)
        model.addAttribute("b560", b560)
        model.addAttribute("z490", z490)
        model.addAttribute("h470", h470)
        model.addAttribute("b460", b460)
        model.addAttribute("x570", x570)
        model.addAttribute("b550", b550)
        model.addAttribute("x470", x470)
        model.addAttribute("b450", b450)
    }

    fun addCpu(model: Model) {
        model.addAttribute("allCpu", cpuRepository.findAll())
        model.addAttribute("intelCpu", cpuRepository.findAllByManufacturer("Intel"))
        model.addAttribute("amdCpu", cpuRepository.findAllByManufacturer("AMD"))
    }

    fun addGpu(model: Model) {
        model.addAttribute("allGpu", gpuRepository.findAll())
        model.addAttribute("nvidiaGpu", gpuRepository.findAllByManufacturer("Nvidia"))
        model.addAttribute("amdGpu", gpuRepository.findAllByManufacturer("AMD"))
    }

    fun addRam(model: Model) {
        model.addAttribute("allRam", ramRepository.findAll())
        model.addAttribute("hyperxRam", ramRepository.findAllByManufacturer("HyperX"))
        model.addAttribute("corsairRam", ramRepository.findAllByManufacturer("Corsair"))
    }

    fun addPower(model: Model) {
        model.addAttribute("allPower", powerRepository.findAll())
        model.addAttribute("bequietPower", powerRepository.findAllByManufacturer("be quiet!"))
        model.addAttribute("masterPower", powerRepository.findAllByManufacturer("Cooler Master"))
    }

    fun addCooler(model: Model) {
        model.addAttribute("allCooler", coolerRepository.findAll())
        model.addAttribute("airCooler", coolerRepository.findAllByType("Air"))
        model.addAttribute("liquidCooler", coolerRepository.findAllByType("Liquid"))
    }

    fun addSsd(model: Model) {
        model.addAttribute("allSsd", ssdRepository.findAll())
        model.addAttribute("samsungSsd", ssdRepository.findAllByManufacturer("Samsung"))
        model.addAttribute("wdSsd", ssdRepository.findAllByManufacturer("Western Digital"))
    }

    fun addHdd(model: Model) {
        model.addAttribute("allHdd", hddRepository.findAll())
        model.addAttribute("seagateHdd", hddRepository.findAllByManufacturer("Seagate"))
        model.addAttribute("wdHdd", hddRepository.findAllByManufacturer("Western Digital"))
    }

    fun addCase(model: Model) {
        model.addAttribute("allCase", caseRepository.findAll())
        model.addAttribute("bequietCase", caseRepository.findAllByManufacturer("be quiet!"))
        model.addAttribute("masterCase", caseRepository.findAllByManufacturer("Cooler Master"))
    }
}
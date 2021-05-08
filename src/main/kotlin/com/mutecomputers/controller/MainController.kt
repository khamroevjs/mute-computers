package com.mutecomputers.controller

import com.mutecomputers.model.CPU
import com.mutecomputers.model.GPU
import com.mutecomputers.model.Motherboard
import com.mutecomputers.model.Person
import com.mutecomputers.repository.CPURepository
import com.mutecomputers.repository.GPURepository
import com.mutecomputers.repository.MotherboardRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.servlet.ModelAndView

@Controller
@RequestMapping("/main")
class MainController @Autowired constructor(
    private val cpuRepository: CPURepository,
    private val gpuRepository: GPURepository,
    private val motherboardRepository: MotherboardRepository
) {

    @GetMapping("/info")
    fun info(model: Model): String {
        model.addAttribute("allCpu", cpuRepository.findAll())
        model.addAttribute("intelCpu", cpuRepository.findAllByManufacturer("Intel"))
        model.addAttribute("amdCpu", cpuRepository.findAllByManufacturer("AMD"))
        model.addAttribute("allGpu", gpuRepository.findAll())

        model.addAttribute("nvidiaGpu", gpuRepository.findAllByManufacturer("Nvidia"))
        model.addAttribute("amdGpu", gpuRepository.findAllByManufacturer("AMD"))

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

        return "main"
    }

    @PostMapping("/add-cpu")
    fun addCpu(@RequestBody cpuList: List<CPU>) {
        cpuRepository.saveAll(cpuList)
    }

    @PostMapping("/add-gpu")
    fun addGpu(@RequestBody gpuList: List<GPU>) {
        gpuRepository.saveAll(gpuList)
    }

    @PostMapping("/add-motherboards")
    fun addMotherboards(@RequestBody motherboardList: List<Motherboard>) {
        motherboardRepository.saveAll(motherboardList)
    }
}
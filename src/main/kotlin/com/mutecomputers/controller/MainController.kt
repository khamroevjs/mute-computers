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

@Controller
@RequestMapping("/main")
class MainController @Autowired constructor(
    private val gpuRepository: GPURepository,
    private val cpuRepository: CPURepository,
    private val motherboardRepository: MotherboardRepository
) {

    @GetMapping("/info")
    fun info(model: Model): String {
        model.addAttribute("something", "this is coming from the controller")
        model.addAttribute(
            "people",
            arrayOf(
                Person("John", 15),
                Person("Steve", 20)
            )
        )

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
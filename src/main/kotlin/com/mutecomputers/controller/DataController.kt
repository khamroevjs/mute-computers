package com.mutecomputers.controller

import com.mutecomputers.model.*
import com.mutecomputers.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/data")
class DataController @Autowired constructor(
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

    @PostMapping("/add-ram")
    fun addRam(@RequestBody ramList: List<RAM>) {
        ramRepository.saveAll(ramList)
    }

    @PostMapping("/add-power")
    fun addPower(@RequestBody powerList: List<Power>) {
        powerRepository.saveAll(powerList)
    }

    @PostMapping("/add-cooler")
    fun addCooler(@RequestBody coolerList: List<Cooler>) {
        coolerRepository.saveAll(coolerList)
    }

    @PostMapping("/add-ssd")
    fun addSsd(@RequestBody ssdList: List<SSD>) {
        ssdRepository.saveAll(ssdList)
    }

    @PostMapping("/add-hdd")
    fun addHdd(@RequestBody hddList: List<HDD>) {
        hddRepository.saveAll(hddList)
    }

    @PostMapping("/add-case")
    fun addCase(@RequestBody caseList: List<ComputerCase>) {
        caseRepository.saveAll(caseList)
    }
}
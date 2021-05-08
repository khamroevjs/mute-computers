package com.mutecomputers.model
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class GPU(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val manufacturer: String,
    val name: String,
    val releaseYear: Int,
    val microarchitecture: String,
    val fabricationProcess: Int,
    val TDP: Int,
    val interfacePort: String,
    val multiGPUSupport: String,
    val baseClock: Int,
    val boostClock: Int,
    val shadingUnits: Int,
    val L1Cache: String,
    val L2Cache: String,
    val L3Cache: String,
    val memoryType: String,
    val memorySize: Int,
    val memoryClock: Int,
    val memoryClockEffective: Int,
    val memoryBus: Int,
    val memoryBandwidth: Double
)

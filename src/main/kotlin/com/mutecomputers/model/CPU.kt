package com.mutecomputers.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class CPU(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val manufacturer: String,
    val name: String,
    val releaseYear: Int,
    val fabricationProcess: Int, // nm
    val TDP: Int, // W
    val socket: String,
    val microarchitecture: String,
    val codeName: String,
    val cores: Int,
    val threads: Int,
    val baseFrequency: Double, // GHz
    val turboFrequency: Double, // GHz
    val L1CacheInstruction: String,
    val L1CacheDate: String,
    val L2Cache: String,
    val L3Cache: String,
    val unlockedMultiplier: Boolean,
    val memoryType: String,
    val memoryBandwidth: Double,
    val memoryChannels: Int, // GB/s
    val maxMemorySize: Int, // GB
    val ECCMemory: Boolean,
    val integratedGraphics: String,
    val PCIExpressRevision: Int,
    val PCIExpressLanes: Int,
)

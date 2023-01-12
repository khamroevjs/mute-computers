package com.mutecomputers.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class ComputerCase(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val manufacturer: String,
    val name: String,
    val size: String,
    val dimensions: String,
    val weight: Double,
    val maxCoolerHeight: Int,
    val maxGpuLength: Int,
)
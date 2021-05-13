package com.mutecomputers.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

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
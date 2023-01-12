package com.mutecomputers.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class Motherboard(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val manufacturer: String,
    val name: String,
    val chipset: String,
    val formFactor: String,
    val memorySlots: Int,
    val socket: String,
    val wifiSupport: Boolean,
    val bluetoothSupport: Boolean,
    val PCIExpressRevision: Int
)

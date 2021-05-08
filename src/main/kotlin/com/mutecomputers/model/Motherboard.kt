package com.mutecomputers.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

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

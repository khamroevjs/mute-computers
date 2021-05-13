package com.mutecomputers.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class SSD(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val manufacturer: String,
    val name: String,
    val capacity: Int,
    val readSpeed: Int, // MB/s
    val writeSpeed: Int,// MB/s
    val totalBytesWritten: Int, // TB
    val formFactor: String,
)

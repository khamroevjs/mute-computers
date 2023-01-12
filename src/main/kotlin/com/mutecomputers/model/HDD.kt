package com.mutecomputers.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class HDD(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val manufacturer: String,
    val name: String,
    val capacity: Int,
    val readSpeed: Int, // MB/s
    val writeSpeed: Int,// MB/s
    val cache: Int,
    val formFactor: String
)

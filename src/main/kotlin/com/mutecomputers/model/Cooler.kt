package com.mutecomputers.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class Cooler(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,
    val manufacturer: String,
    val name: String,
    val type: String, // Air or Liquid
    val dimensions: String,
    val TDP: Int,
    val fanCount: Int,
)

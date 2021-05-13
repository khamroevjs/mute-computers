package com.mutecomputers.repository

import com.mutecomputers.model.SSD
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SSDRepository: JpaRepository<SSD, Int> {
    fun findAllByManufacturer(manufacturer: String) : List<SSD>
}
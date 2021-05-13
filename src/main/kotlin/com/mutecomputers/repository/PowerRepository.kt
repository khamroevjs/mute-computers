package com.mutecomputers.repository

import com.mutecomputers.model.Power
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PowerRepository : JpaRepository<Power, Int> {
    fun findAllByManufacturer(manufacturer: String): List<Power>
}
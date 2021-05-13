package com.mutecomputers.repository

import com.mutecomputers.model.ComputerCase
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CaseRepository : JpaRepository<ComputerCase, Int> {
    fun findAllByManufacturer(manufacturer: String): List<ComputerCase>
}
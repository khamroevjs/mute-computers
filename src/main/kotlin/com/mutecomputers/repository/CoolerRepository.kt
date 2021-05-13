package com.mutecomputers.repository

import com.mutecomputers.model.Cooler
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CoolerRepository : JpaRepository<Cooler, Int> {
    fun findAllByType(type: String): List<Cooler>
}
package com.mutecomputers.repository

import com.mutecomputers.model.HDD
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface HDDRepository : JpaRepository<HDD, Int> {
    fun findAllByManufacturer(manufacturer: String) : List<HDD>
}
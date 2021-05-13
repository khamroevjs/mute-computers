package com.mutecomputers.repository

import com.mutecomputers.model.RAM
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface RAMRepository : JpaRepository<RAM, Int> {

    fun findAllByManufacturer(manufacturer: String) : List<RAM>
}
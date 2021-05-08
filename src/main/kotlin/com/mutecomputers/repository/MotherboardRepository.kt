package com.mutecomputers.repository

import com.mutecomputers.model.Motherboard
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface MotherboardRepository : JpaRepository<Motherboard, Int> {
}
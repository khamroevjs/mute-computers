package com.mutecomputers.repository

import com.mutecomputers.model.CPU
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface  CPURepository : JpaRepository<CPU, Int> {
}
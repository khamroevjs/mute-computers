package com.mutecomputers.repository

import com.mutecomputers.model.GPU
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GPURepository : JpaRepository<GPU, Int> {

}
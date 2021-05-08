package com.mutecomputers.service

import com.mutecomputers.model.CPU
import com.mutecomputers.model.GPU
import com.mutecomputers.repository.GPURepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

@Service
class GPUService @Autowired constructor(private val repository: GPURepository){

    fun findAll(): List<GPU> = repository.findAll()
}
package com.mutecomputers.service

import com.mutecomputers.repository.CPURepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CPUService @Autowired constructor(private val repository: CPURepository) {

}
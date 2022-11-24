package com.mutecomputers.utils

import org.springframework.core.env.PropertySource
import java.io.BufferedReader
import java.io.File
import java.nio.file.Files
import java.nio.file.Path

class FilePropertySource : PropertySource<File>("file") {

    override fun getProperty(value: String): Any? =
        Regex("file\\((\\S*)\\)").matchEntire(value)
            ?.let { Files.newBufferedReader(Path.of(it.groupValues[1])).use(BufferedReader::readLine) }
}
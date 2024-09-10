package com.stream.app.spring_stream_backend;

import com.stream.app.spring_stream_backend.services.VideoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringStreamBackendApplicationTests {

	@Autowired
	VideoService videoService;
	@Test
	void contextLoads() {
		videoService.processVideo("de498a89-a359-4b40-8ac2-184f54ef4efe");
	}

}

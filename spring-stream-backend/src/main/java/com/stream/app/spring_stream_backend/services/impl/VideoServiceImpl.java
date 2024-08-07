package com.stream.app.spring_stream_backend.services.impl;

import com.stream.app.spring_stream_backend.entities.Video;
import com.stream.app.spring_stream_backend.services.VideoService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class VideoServiceImpl implements VideoService {

    @Value("${files.video}")
    String DIR;




    @Override
    public Video save(Video video, MultipartFile file) {


        try{
            //original filename
            String filename = file.getOriginalFilename();

            String contentType = file.getContentType();
            InputStream inputStream  = file.getInputStream();

            String cleanFileName = StringUtils.cleanPath(filename);
            String cleanFolder = StringUtils.cleanPath(DIR);
            Path path = Paths.get( cleanFolder, cleanFileName);
            System.out.println(path);
        }catch(IOException e){
            e.printStackTrace();
        }



        return null;
    }

    @Override
    public Video get(String videoId) {
        return null;
    }

    @Override
    public Video getByTitle(String title) {
        return null;
    }

    @Override
    public List<Video> getAll() {
        return List.of();
    }
}

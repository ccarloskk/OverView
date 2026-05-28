package com.carlosriquedev.OverView.Service;

import com.carlosriquedev.OverView.Model.CloudinaryConfig;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {

    @Autowired
    private CloudinaryConfig cloudinary;

    public String uploadImagem(MultipartFile file) {
        try {
            Map uploadResult = cloudinary.cloudinary().uploader().upload(
                    file.getBytes(),
                    ObjectUtils.emptyMap()
            );
            return uploadResult.get("url").toString();
        } catch (IOException e) {
            throw new RuntimeException("Erro ao enviar imagem");
        }
    }
}

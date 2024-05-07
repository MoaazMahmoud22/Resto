package com.twd.RestoWeb.dto;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;
@Data
public class UploadRequest {

    private MultipartFile file;
    private String foodName;
    private String description;
    private String price;
    private String cetgoryName;
}

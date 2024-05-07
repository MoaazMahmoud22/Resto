package com.twd.RestoWeb.config;

import org.springframework.stereotype.Component;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

@Component
public class AESEncryption {

    private static final byte[] AES_KEY = new byte[16];

    private static final String ALGORITHM = "AES";

    public static String encrypt(String input) throws Exception {
        SecretKeySpec keySpec = new SecretKeySpec(AES_KEY, ALGORITHM);
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, keySpec);
        byte[] encryptedBytes = cipher.doFinal(input.getBytes());
        return Base64.getUrlEncoder().encodeToString(encryptedBytes);
    }


    public static String decrypt(String topic) throws Exception {
        SecretKeySpec keySpec = new SecretKeySpec(AES_KEY, ALGORITHM);
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, keySpec);
        byte[] decryptedBytes = cipher.doFinal(Base64.getDecoder().decode(topic));
        return new String(decryptedBytes);
    }


}
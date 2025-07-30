package com.DhanushDevs.Smart_Email_Assistant.Controller;

import com. DhanushDevs.Smart_Email_Assistant.EmailRequest;
import com.DhanushDevs.Smart_Email_Assistant.Service.EmailGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin("*")
public class EmailGeneratorController {


    private  EmailGeneratorService emailGeneratorService;

    public EmailGeneratorService getEmailGeneratorService() {
        return emailGeneratorService;
    }

    @Autowired
    public void setEmailGeneratorService(EmailGeneratorService emailGeneratorService) {
        this.emailGeneratorService = emailGeneratorService;
    }


    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String response = emailGeneratorService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}

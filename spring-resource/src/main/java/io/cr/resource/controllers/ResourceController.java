package io.cr.resource.controllers;

import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ResourceController {

    @GetMapping("/messages")
    public Map<String, Object> messages() {

        Map<String, Object> result = new HashMap<>();
        result.put("messages", Arrays.asList(
                new Message("I am a robot."),
                new Message("Hello, world!")));

        return result;
    }

    class Message {
        public Date date = new Date();
        public String text;

        Message(String text) {
            this.text = text;
        }
    }
}
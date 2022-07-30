package com.example.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {
   //Let's create some API endpoints
    //This would return a list of students

    //To explose this as an endpoint we anotate with @GetMapping
    @GetMapping
    public List<Student> getAllStudents() {
        //Extract with variables --- Ctrl+Alt+Shift
        List<Student> students = Arrays.asList(

                new Student(
                        1L,
                        "Jamila",
                        "jamila@tunjiTrain.edu",
                        Gender.FEMALE
                ),
                new Student(
                        2L,
                        "alex",
                        "alex@tunjiTrain.edu",
                        Gender.MALE
                )
        );

        return students;
    }
}

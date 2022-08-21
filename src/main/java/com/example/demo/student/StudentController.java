package com.example.demo.student;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/students")
@AllArgsConstructor
public class StudentController {
    private final StudentService studentService;
   //Let's create some API endpoints
    //This would return a list of students

    //To explose this as an endpoint we anotate with @GetMapping
    @GetMapping
    public List<Student> getAllStudents() {
        //Extract with variables --- Ctrl+Alt+Shift

        return studentService.getAllStudents();
    }

    @PostMapping
    public void addStudent(@RequestBody Student student) {
        studentService.addStudent(student);
    }
}

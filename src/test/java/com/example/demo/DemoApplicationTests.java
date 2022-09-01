package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


class DemoApplicationTests {

    Calculator underTest = new Calculator();

    @Test
    void itShouldAddTwoNumbers() {
        //given
        int numberOne = 15;
        int numberTwo = 35;

        // when
        int result = underTest.add(numberOne, numberTwo);

        //then
        assertThat(result).isEqualTo(50);
    }

    class Calculator {
        int add(int a, int b) {
            return a + b;
        }
    }

}

package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


class DemoApplicationTests {
    Calculator underTest = new Calculator();

    @Test
    void itshouldAddTwoNumbers() {
        //given
        int num1 = 15;
        int num2 = 35;

        //when

        int result = underTest.add(num1, num2);

        //then
        int expected = 50;
        assertThat(result).isEqualTo(expected);

    }

    class Calculator{
        int add(int a, int b) {
            return a+b;
        }
    }

}

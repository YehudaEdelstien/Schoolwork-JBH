package Loops;

import java.util.Scanner;

public class L1 {
    public static void main (String[] args) {
        Scanner in = new Scanner(System.in);
        int input;
        int total = 0;

        System.out.println("Please input a positive integer:");
        input = in.nextInt();

        for (int i = 1; i <= input; i++) {
            total += i * i;
        }
        System.out.println("Result is: "+total);
    }
}
/*
add to total square of current iteration of loop, start with one,
 */
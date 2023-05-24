package Loops;

import java.util.Scanner;

public class L9 {
    public static void main(String[] args) {
        int num = getNumberInput("Enter a number:");
        System.out.println(num+" has "+divisorsOf(num)+" divisors");
    }

    public static int getNumberInput(String message) {
        Scanner in = new Scanner(System.in);

        System.out.println(message);
        return in.nextInt();
    }

    public static int divisorsOf(int num) {
        int counter = 0;
        for (int i = 1; i <= num; i++) {
            if (num % i == 0) {
                counter++;
            }
        }
        return counter;
    }
}

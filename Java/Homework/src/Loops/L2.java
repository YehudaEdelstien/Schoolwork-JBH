package Loops;

import java.util.Scanner;

public class L2 {
    public static void main(String[] args) {
        calcDividableDigits();
    }

    public static void calcDividableDigits() {
        Scanner in = new Scanner(System.in);
        int num, k;
        int counter = 0;

        System.out.println("Please input a number and a digit");
        num = in.nextInt();
        k = in.nextInt();

        while (num != 0) {
            int dig = num % 10;
            if (dig % k == 0) {
                counter++;
            }
            num /= 10;
        }

        System.out.println("Dividable digits are "+counter);
    }
}
/*
1) get number and digit
2) get one digit at a time, count it if it goes into digit, remove number
 */
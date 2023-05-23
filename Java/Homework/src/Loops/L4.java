package Loops;

import java.util.Scanner;

public class L4 {
    public static void main(String[] args) {
        calcIsPalindrome();
    }

    public static void calcIsPalindrome() {
        Scanner in = new Scanner(System.in);

        int num;
        int oppositeNum = 0;
        int temp; // for calculating the palindrome

        System.out.println("Please input a number to see if it's a palindrome");
        num = in.nextInt();
        temp = num;

        while(true) {
            oppositeNum += temp % 10;
            temp /= 10;

            if (temp == 0) {
                break;
            }

            oppositeNum *= 10;
        }

        if (num == oppositeNum) {
            System.out.println(num+" is a palindrome");
        } else {
            System.out.println(num+" is not a palindrome");
        }
    }
}
/*
1) need to calculate if a number is a palindrome
2) in loop:
    1) get first digit,
    2) add to new number, and remove form old
    3) if old number is 0, break loop,
    4) multiply new number by 10
3) check if numbers are equal. if they are, it's a palindrome.
 */
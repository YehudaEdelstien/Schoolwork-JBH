package Loops;

import java.util.Scanner;

public class Lcl3 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        for (int i = 0; i < 5; i++) {
            char input = in.next().charAt(0);

            if (input >= 'a' && input <= 'z') {
                System.out.println("Small letter");
                System.out.println((char)(input - ('a' - 'A')));
            } else if (input >= 'A' && input <= 'Z') {
                System.out.println("Big letter");
                System.out.println((char)(input - ('A' - 'a')));
            } else {
                System.out.println(input);
            }
        }
    }
}
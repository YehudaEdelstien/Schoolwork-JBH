package Loops;

import java.util.Scanner;

public class Lcl2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int largestScore = 0;
        int prevChoice = 0;

        System.out.println("Input grades. -1 exits.");

        while (prevChoice != -1) {
            if (prevChoice > largestScore) {
                largestScore = prevChoice;
            }
            prevChoice = in.nextInt();
        }
        System.out.println("Largest score: " + largestScore);
    }
}

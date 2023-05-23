package Loops;

import java.util.Scanner;
public class L3 {
    public static void main(String[] args) {
        calcNumberStats();
    }

    public static void calcNumberStats() {
        Scanner in = new Scanner(System.in);
        int biggestValue = 0;
        int smallestValue = 0;

        int averageValues = 0;
        int totalNumbers = 0;

        int evenNumbers = 0;
        int oddNumbers = 0;

        boolean firstLoop = true;

        System.out.println("Please input some positive numbers. type '-1' to finish");

        while(true) {
            int value = in.nextInt();
            if (value == -1){
                break;
            }

            if (firstLoop) { // initialize values to compare to
                biggestValue = value;
                smallestValue = value;
                firstLoop = false;
            }

            if (value > biggestValue) biggestValue = value;
            if (value < smallestValue) smallestValue = value;

            averageValues+= value;
            totalNumbers++;

            if (value % 2 == 0) {
                evenNumbers++;
            } else {
                oddNumbers++;
            }
        }

        if (totalNumbers == 0) {
            System.out.println("You did not input any numbers.");
            return;
        }

        averageValues /= totalNumbers;

        System.out.println("Biggest number: "+biggestValue);
        System.out.println("Smallest number: "+smallestValue);
        System.out.println("Average value: "+averageValues);
        System.out.println("Total numbers inputted: "+totalNumbers);
        System.out.println("Even numbers inputted: "+evenNumbers);
        System.out.println("Odd numbers inputted: "+oddNumbers);
    }
}

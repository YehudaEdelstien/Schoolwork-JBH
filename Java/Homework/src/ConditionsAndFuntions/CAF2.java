package ConditionsAndFuntions;
import java.util.Scanner;

public class CAF2 {
    public static void main(String[] args) {
        function2();
    }

    public static void function2() {
        Scanner in = new Scanner(System.in);

        System.out.println("Input three numbers");

        int num1 = in.nextInt();
        int num2 = in.nextInt();
        int num3 = in.nextInt();

        int smallest = smallestOfThreeAlt(num1, num2, num3);

        System.out.println("The smallest number is " + smallest);
    }

    // 2 - a
    public static int biggestOfThree(int num1, int num2, int num3) {
        if (num1 >= num2 && num1 >= num3) {
            return num1;
        } else if (num2 >= num3) {
            return num2;
        } else {
            return num3;
        }
    }

    // 2 - b
    public static int smallestOfThree(int num1, int num2, int num3) {
        // get the biggest number and sum of all numbers
        int biggestNum = biggestOfThree(num1, num2, num3);
        int sumOfAll = num1 + num2 + num3;

        // get two copies of the biggest number and one of the middle number;
        int biggestOfPair1 = biggestOfTwo(num1, num2);
        int biggestOfPair2 = biggestOfTwo(num1, num3);
        int biggestOfPair3 = biggestOfTwo(num2, num3);
        int reducer = biggestOfPair1 + biggestOfPair2 + biggestOfPair3;

        // reduce from sum of all numbers plus biggest number
        int smallestNum = (sumOfAll + biggestNum) - reducer;

        // return the smallest number
        return smallestNum;
    }

    public static int smallestOfThreeAlt (int num1, int num2, int num3) {
        return biggestOfThree(-num1, -num2, -num3) * -1;
    }

    public static int biggestOfTwo(int numX, int numY) {
        return (biggestOfThree(numX, numY, numY));
    }
}
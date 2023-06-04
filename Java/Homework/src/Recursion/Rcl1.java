package Recursion;

public class Rcl1 {
    public static void main(String[] args) {
        printIncrementedDigits(1234567890);
    }

    public static void printIncrementedDigits(int num) {
        if (num < 10) {
            System.out.print(incrementedDigit(num));
        } else {
            printIncrementedDigits(num / 10);
            System.out.print(incrementedDigit(lastDigit(num)));
        }
    }

    public static int lastDigit(int num) {
        return num % 10;
    }

    public static int incrementedDigit(int num) {
        return (num + 1) % 10;
    }
}

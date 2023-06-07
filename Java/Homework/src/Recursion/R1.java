package Recursion;

public class R1 {
    public static void main (String[] args) {
        System.out.println(evenDigitsInNumber(1234567890));
    }

    public static int evenDigitsInNumber(int num) {
        if (num < 10) {
            return countEvenDigit(num);
        }

        return evenDigitsInNumber(num / 10) + countEvenDigit(num % 10);
    }

    public static int countEvenDigit(int digit){
        return (digit + 1) % 2;
    }
}

package Recursion;

public class R2 {
    public static void main(String[] args) {
        System.out.println(digitsAreOdd(135790));
        System.out.println(digitsAreOdd(135791));
    }

    public static boolean digitsAreOdd(int num) {
        if (num < 10) {
            return (num % 2) == 1;
        }

        if ((num % 10) % 2 == 1 && digitsAreOdd(num / 10)) {
            return true;
        } else {
            return false;
        }
    }
}

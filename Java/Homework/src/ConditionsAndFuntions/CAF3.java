package ConditionsAndFuntions;

public class CAF3 {
    public static void main(String[] args) {
        System.out.println(dividableDigits(238, 4));
    }

    public static int dividableDigits(int num, int dig){
        int counter = 0;

        // extract each digit from num and check if it perfectly divides into dig
        if ((num / 100) % dig == 0) counter++;
        if ((num / 10 % 10) % dig == 0) counter++;
        if ((num % 10) % dig == 0) counter++;

        return counter;
    }

    public static boolean isDividable(int dividend, int divisor) {
        return dividend % divisor == 0;
    }
}
/*
make a counter
* 1) split up the digits and check if they are dividable;
* 2) if they are, count them
*/
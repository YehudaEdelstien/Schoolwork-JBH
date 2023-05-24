package Loops;

import java.util.Scanner;

public class L10 {
    public static void main(String[] args) {
        System.out.println(getSum(1, 6));
    }

    public static int getSum(int a, int b) {
        int count = 0;

        for (int i = Math.min(a, b); i <= Math.max(a, b); i++){
            count += i;
        }

        return count;
    }
}

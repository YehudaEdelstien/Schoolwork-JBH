package Loops;

import java.util.Scanner;

public class L5 {
    public static void main(String[] args) {
        printRightTriangles();
    }

    public static void printRightTriangles() {
        Scanner in = new Scanner(System.in);
        int size;

        System.out.println("Input triangle size");
        size = in.nextInt();

        for (int i = 1; i <= size; i++) {
            int emptySpaces = (size * 2) - (i * 2);

            for (int j = 0; j < i; j++) {
                System.out.print('*');
            }

            for (int k = 0; k < emptySpaces; k++) {
                System.out.print(' ');
            }

            for (int l = 0; l < i; l++) {
                System.out.print('*');
            }

            System.out.println("");
        }
    }
}
/*
(x * 2) - (i * 2);
1 = 8
2 = 6
3 = 4
4 = 2
5 = 0
 */
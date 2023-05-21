package Loops;

import java.util.Scanner;

public class Lcl1 {
    public static void main(String[] args) {
        int width = getInput();

        printHourglass(width);
    }

    public static int getInput() {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter structure size:");
        int width = in.nextInt();
        return width;
    }

    public static void printHourglass(int width) {
        if (width % 2 == 0) {
            width--;
        }

        for (int i = 0; i <= width; i++) {
            int dots = Math.abs(width - (i*2));
            int spaces = (width - dots) / 2;

            // print blanks
            for (int k = 0; k < spaces; k++) {
                System.out.print(" ");
            }

            //print dots
            for (int j = 0; j < dots; j++) {
                System.out.print("*");
            }
            System.out.print("\n");
        }
    }
}
/*
i (abs (length - i*2))
0 7 0
1 5 1
2 3 2
3 1 3
4 1 3
5 3 2

 */
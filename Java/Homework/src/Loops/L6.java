package Loops;

import java.util.Scanner;

public class L6 {
    public static void main(String[] args) {
        char letter = getInput();
        printLetterPyramid(letter);
    }

    public static char getInput() {
        Scanner in = new Scanner(System.in);

        System.out.println("Please input a letter to form the pyramid");
        return in.next().charAt(0);
    }

    public static void printLetterPyramid(char letter) {
        int pyramidHeight = letter - 'a';

        for (int i = 0; i <= pyramidHeight; i++) {
            printBlanks(pyramidHeight - i);
            printLetterBoomerang(i);

            System.out.println("");
        }
    }

    public static void printBlanks(int blanks) {
        for (int i = 0; i < blanks; i++) {
            System.out.print(' ');
        }
    }

    public static void printLetterBoomerang(int letterCount) {
        for (int i = 0; i <= (letterCount * 2); i++) {
            int num = Math.abs(i - letterCount);
            char let = (char)(letterCount - num + 'a');
            System.out.print(let);
        }
    }
}
/*
0 - 1 abs(-3)
1 - 2 abs(-2)
2 - 3 abs(-1)
3 - 4 abs(0)
4 - 3 abs(1)
5 - 2 abs(2)
6 - 1 abs(3)
 */

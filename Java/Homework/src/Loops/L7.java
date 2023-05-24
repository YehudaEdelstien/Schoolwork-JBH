package Loops;

import java.util.Scanner;

public class L7 {
    public static void main(String[] args) {
        int n = getNumberInput("Input Number-Cube size:");
        int k = getNumberInput("Input Number-Cube amount:");

        printNumberCubes(n, k);
    }

    public static int getNumberInput(String message) {
        Scanner in = new Scanner(System.in);

        System.out.println(message);
        return in.nextInt();
    }

    public static void printNumberCubes(int n, int k) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < k; j++) {
                printNumberLine(n, i);
            }
            System.out.println("");
        }
    }

    public static void printNumberLine(int size, int startNum) {
        for (int i = 0; i < size; i++) {
            int num = (i + startNum) % size;
            System.out.print(num);
        }
        System.out.print('@');
    }
}

package Loops;

import java.util.Scanner;

public class L8 {
    public static void main(String[] args) {
        int n = getNumberInput("Input Symbol-Cube size:");
        int k = getNumberInput("Input Symbol-Cube amount:");

        printSymbolCubes(n, k);
    }

    public static int getNumberInput(String message) {
        Scanner in = new Scanner(System.in);

        System.out.println(message);
        return in.nextInt();
    }

    public static void printSymbolCubes(int n, int k) {
        for (int i = 1; i <= n; i++){
            for (int j = 0; j < k; j++){
                printSymbolRow(n, i);
            }
            System.out.println("");
        }
    }

    public static void printSymbolRow(int length, int count) {
        if (count % 2 == 0) {
            printSymbols('#', count);
            printSymbols('$', length - count);
        } else {
            printSymbols('$', count);
            printSymbols('#', length - count);
        }

        System.out.print('@');
    }

    public static void printSymbols(char symbol, int count) {
        for (int i = 0; i < count; i++){
            System.out.print(symbol);
        }
    }
}

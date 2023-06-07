package Recursion;

public class R3 {
    public static void main(String[] args) {
        printStarTrapezoid(3, 6);
    }

    public static void printStarTrapezoid(int a, int b) {
        printStars(a);

        if (a == b) {
            return;
        }

        if (a < b) {
            printStarTrapezoid(a + 1, b);
        } else {
            printStarTrapezoid(a - 1, b);
        }
    }

    public static void printStars(int amount) {
        for (int i = 0; i < amount; i++) {
            System.out.print('*');
        }
        System.out.println("");
    }
}

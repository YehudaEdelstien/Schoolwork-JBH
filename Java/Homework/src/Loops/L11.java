package Loops;

public class L11 {
    public static void main(String[] args) {
        rowSumOddNumbers(5);
    }

    public static int rowSumOddNumbers(int n) {
        int firstNumber = rowStart(n);
        int totalNumber = rowTotal(firstNumber, n);
        return totalNumber;
    }

    public static int rowStart(int n) {
        int count = 1;

        for (int i = 0, j = 0; i < n; i++, j+=2) {
            count += j;
        }
        System.out.println(count);
        return count;
    }

    public static int rowTotal(int start, int amount) {
        int count = 0;

        for (int i = start; i <= amount; i++) {
            count += i;
        }

        return count;
    }
}

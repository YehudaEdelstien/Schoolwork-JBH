package Recursion;

public class R5 {
    public static void main(String[] args) {
        int[] testNums1 = {25,4,31,18,13};
        int[] testNums2 = {25,4,30,18,13};
        System.out.println(isAlternatingArray(testNums1));
        System.out.println(isAlternatingArray(testNums2));
    }

    public static boolean isAlternatingArray(int[] array) {
        if (array.length <= 1) {
            return true;
        } else if (isEvenNumber(array[0]) == isEvenNumber(array[1])) {
            return false;
        }

        int[] recursedArr = new int[array.length - 1];
        for (int i = 1; i < array.length; i++) {
            recursedArr[i - 1] = array[i];
        }
        return isAlternatingArray(recursedArr);
    }

    public static boolean isEvenNumber(int digit){
        return digit % 2 == 0;
    }
}

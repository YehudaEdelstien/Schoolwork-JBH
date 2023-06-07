package Recursion;

import java.sql.Array;

public class R4 {
    public static void main(String[] args) {
        int[] testNums = {11, 22, 33, 44, 55, 66, 77, 88, 99, 0};
        System.out.println(evenNumsInArr(testNums));
    }

    public static int evenNumsInArr(int[] arr) {
        if (arr.length == 1) {
            return countEvenNumber(arr[0]);
        }

        int[] recursedArr = new int[arr.length - 1];
        for (int i = 1; i < arr.length; i++) {
            recursedArr[i - 1] = arr[i];
        }
        return countEvenNumber(arr[0]) + evenNumsInArr(recursedArr);
    }

    public static int countEvenNumber(int digit){
        return (digit + 1) % 2;
    }
}

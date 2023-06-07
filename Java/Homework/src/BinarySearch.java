public class BinarySearch {
    public static void main(String[] args) {
        int[] testArr = {1,2,5,7,12,16,18,24,32,88,90,91,95};
        System.out.println(binarySearch(testArr, 5));
        System.out.println(binarySearch(testArr, 88));
        System.out.println(binarySearch(testArr, 1));
        System.out.println(binarySearch(testArr, 18));
        System.out.println(binarySearch(testArr, 95));
        System.out.println(binarySearch(testArr, 3));
        System.out.println(binarySearch(testArr, 0));
        System.out.println(binarySearch(testArr, -10));
        System.out.println(binarySearch(testArr, 999));
    }

    public static boolean binarySearch(int[] array, int term) {
        int left = 0;
        int right = array.length - 1;
        int mid = 0;

        while (left <= right) {
            mid = (left + right) / 2;

            if (array[mid] == term) {
                return true;
            }

            if (array[mid] < term) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}

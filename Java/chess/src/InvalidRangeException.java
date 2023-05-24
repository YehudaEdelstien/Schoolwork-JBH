public class InvalidRangeException extends Exception{

    public InvalidRangeException() {

    }

    public InvalidRangeException (int pos) {
        System.out.println("The value " + pos + "is out of range!");
    }
}

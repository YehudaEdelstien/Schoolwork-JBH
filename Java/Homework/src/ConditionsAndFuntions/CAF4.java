package ConditionsAndFuntions;

public class CAF4 {
    public static void main (String[] args) {
        calc(20, 10, 'e');
    }

    public static void calc(int num1, int num2, char sign) {
        switch (sign) {
            case '+':
                System.out.println(num1 + num2);
                break;
            case '-':
                System.out.println(num1 - num2);
                break;
            case '*':
                System.out.println(num1 * num2);
                break;
            case '/':
                System.out.println(num1 / num2);
                break;
            case '%':
                System.out.println(num1 % num2);
                break;
            default:
                System.out.println("InvalidSignException");
            break;
        }
    }
}

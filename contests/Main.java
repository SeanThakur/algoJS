import java.util.*;
import java.io.*;

public class Main {
    public static boolean isValie(String n) {
        for (int i = 1; i < n.length(); i++) {
            char firstChar = n.charAt(0);
            char restChar = n.charAt(i);
            if (!Character.isLowerCase(firstChar)) {
                return false;
            } else if (Character.isLowerCase(firstChar) && !Character.isUpperCase(restChar)) {
                return false;
            }
        }
        if (n.length() == 1 && Character.isUpperCase(n.charAt(0))) {
            return false;
        }
        return true;
    }

    public static boolean isStrUpper(String n) {
        for (int i = 0; i < n.length(); i++) {
            char character = n.charAt(i);
            if (!Character.isUpperCase(character)) {
                return false;
            }
        }
        return true;
    }

    public static String solve(String n) {
        StringBuilder result = new StringBuilder();
        if (isValie(n)) {
            result.append(Character.toUpperCase(n.charAt(0)));
            result.append(n.substring(1, n.length()).toLowerCase());
        } else if (isStrUpper(n)) {
            result.append(n.toLowerCase());
        } else {
            result.append(n);
        }

        return result.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // int testCases = sc.nextInt();
        // for (int i = 0; i < testCases; i++) {
        // solve something
        // solve(n, arr);
        // }
        String n = sc.nextLine();
        System.out.println(solve(n));
        sc.close();
    }
}
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {
    /**
     * https://www.lintcode.com/problem/reorder-array-to-construct-the-minimum-number/description
     * slow
     * @param nums: n non-negative integer array
     * @return: A string
     */
    public String minNumber(int[] nums) {
        //lintcode上不能用collect 就不用流了。。
        List<Integer> ints = new ArrayList<>(nums.length);
        for (int num : nums) {
            ints.add(num);
        }
        Collections.sort(ints, (a, b) -> ("" + a + b).compareTo("" + b + a));
        StringBuilder sb = new StringBuilder();
        ints.forEach(item -> {
            if (item != 0) {
                sb.append(item);
            }
        });

        String result = sb.toString();
        if (result.equals("")) {
            return "0";
        }

        return result;
    }

    public static void main(String[] args) {
        new Solution().minNumber(new int[]{3, 32, 321});
    }
}
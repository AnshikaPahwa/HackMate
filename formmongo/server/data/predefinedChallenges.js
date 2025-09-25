const predefinedChallenges = [
    {
        title: "Sum of Two Numbers",
        description: "Write a function that returns the sum of two numbers",
        difficulty: "Easy",
        points: 10,
        timeLimit: 900, // 15 minutes for Easy
        testCases: [
            { input: "2, 3", expectedOutput: "5", isHidden: false, explanation: "2 + 3 = 5" },
            { input: "-1, 1", expectedOutput: "0", isHidden: false, explanation: "-1 + 1 = 0" },
            { input: "10, 20", expectedOutput: "30", isHidden: true }
        ],
        sampleCode: {
            javascript: "function sum(a, b) {\n  // Your code here\n}",
            python: "def sum(a, b):\n    # Your code here\n    pass",
            java: "public class Solution {\n    public int sum(int a, int b) {\n        // Your code here\n        return 0;\n    }\n}",
            cpp: "int sum(int a, int b) {\n    // Your code here\n    return 0;\n}"
        }
    },
    // Add more predefined challenges here
    {
        title: "Find Maximum Number",
        description: "Write a function that finds the maximum number in an array",
        difficulty: "Easy",
        points: 15,
        timeLimit: 900, // 15 minutes for Easy
        testCases: [
            { input: "[1, 3, 2]", expectedOutput: "3", isHidden: false, explanation: "3 is the largest number in the array" },
            { input: "[-1, -5, -2]", expectedOutput: "-1", isHidden: false, explanation: "-1 is the largest number among negative numbers" },
            { input: "[10, 20, 30, 15]", expectedOutput: "30", isHidden: true }
        ],
        sampleCode: {
            javascript: "function findMax(arr) {\n  // Your code here\n}",
            python: "def find_max(arr):\n    # Your code here\n    pass",
            java: "public class Solution {\n    public int findMax(int[] arr) {\n        // Your code here\n        return 0;\n    }\n}",
            cpp: "int findMax(vector<int>& arr) {\n    // Your code here\n    return 0;\n}"
        }
    },
    {
        title: "Reverse String",
        description: "Write a function that reverses a string",
        difficulty: "Easy",
        points: 12,
        timeLimit: 900, // 15 minutes for Easy
        testCases: [
            { input: "'hello'", expectedOutput: "'olleh'", isHidden: false, explanation: "Reverse the characters in 'hello'" },
            { input: "'world'", expectedOutput: "'dlrow'", isHidden: false, explanation: "Reverse the characters in 'world'" },
            { input: "'javascript'", expectedOutput: "'tpircsavaj'", isHidden: true }
        ],
        sampleCode: {
            javascript: "function reverseString(str) {\n  // Your code here\n}",
            python: "def reverse_string(str):\n    # Your code here\n    pass",
            java: "public class Solution {\n    public String reverseString(String str) {\n        // Your code here\n        return \"\";\n    }\n}",
            cpp: "string reverseString(string str) {\n    // Your code here\n    return \"\";\n}"
        }
    },
    {
        title: "Count Vowels",
        description: "Write a function that counts the number of vowels in a string",
        difficulty: "Medium",
        points: 20,
        timeLimit: 1500, // 30 minutes for Medium
        testCases: [
            { input: "'hello'", expectedOutput: "2", isHidden: false, explanation: "'hello' has 2 vowels: 'e' and 'o'" },
            { input: "'AEIOU'", expectedOutput: "5", isHidden: false, explanation: "'AEIOU' has all 5 vowels" },
            { input: "'JavaScript'", expectedOutput: "3", isHidden: true }
        ],
        sampleCode: {
            javascript: "function countVowels(str) {\n  // Your code here\n}",
            python: "def count_vowels(str):\n    # Your code here\n    pass",
            java: "public class Solution {\n    public int countVowels(String str) {\n        // Your code here\n        return 0;\n    }\n}",
            cpp: "int countVowels(string str) {\n    // Your code here\n    return 0;\n}"
        }
    }
];

module.exports = predefinedChallenges;
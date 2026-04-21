---
name: fibonacci
description: Calculate the n-th Fibonacci number. Use when the user asks for a Fibonacci number, e.g. "fibonacci of 10", "/fibonacci 42".
argument-hint: [n]
allowed-tools: Bash(node *)
---

Calculate the $ARGUMENTS-th Fibonacci number by running:

```
node ${CLAUDE_SKILL_DIR}/fibonacci.js $ARGUMENTS
```

Run the command above with the Bash tool and report the **exact numeric output** to the user verbatim — do NOT recalculate or substitute your own value. The sequence is 0-indexed from position 1: F(1)=0, F(2)=1, F(3)=1, F(4)=2, F(5)=3, ...

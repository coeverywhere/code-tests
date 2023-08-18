# Log Analysis

## Objective

Create a script that analyzes a server log file. The tool will parse log entries and generate a summary report based on specific analysis criteria.

## Input

Combine the log files in different formats:
- log.txt
- log2.xml
- log3.csv

## Requirements

### Parsing the Log File
- Read the log files and extract the timestamp, severity, and message from each entry.

### Generating a Summary Report
- Create a summary report in JSON format with the following details:
  - Total number of log entries.
  - Breakdown of entries by severity level.
  - The three most frequent error messages, along with their counts.
  - Number of errors messages broken down by hour of the day

## Constraints
- You may choose the programming language that you are most comfortable with.
- Ensure that the code is robust against malformed log entries.

Your solution should reflect a thoughtful approach to the problem, demonstrating your ability to write clear and efficient code.

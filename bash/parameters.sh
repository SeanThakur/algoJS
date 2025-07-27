#!/opt/homebrew/bin/bash

if [[ $# -ne 2 ]]; then
    echo "You didn't entere exactly 2 params";
    echo "$0 <param1> <param2>";
    exit 1;
fi

echo "this is first paramater $1"
echo "this is second paramter $2"
echo "no. of paramter is $#"
exit 0;
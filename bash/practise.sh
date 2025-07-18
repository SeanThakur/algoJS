#!/opt/homebrew/bin/bash

time=$(date +%H:%m:%S)
x=2
y=5
output="$(dirname "$0")/practise_output.txt"
echo "aur lavdii $USER tera ye time ho raha hai $time"
echo "2 and 5 plus karke $((x+y)) itna hota hai"
echo "this is brace and arthematic expansion example:" {1..3} "and $((3+4))"
echo $HOSTNAME > $output
exit 0;
#!/opt/homebrew/bin/bash

# can write condition inside this [ 2 -eq 2 ]; note there should be space between [  ] before writing the any condition
# -eq is equal to
# -ne is not equal to
# -gt is greater than
# -lt is less than
# -geq is greater than equal to
# -leq is less than equal to
# Note:- these operaters only work for integer
# These are string compare operators
# = is equal to for example:- [[ $a = $b ]]; eccho $?;
# != is not equal to
# -z is used to check if the string is empty forexample:- [[ -z $c ]]; echo $?; this will return true when $c is empty
# -n is used to check if the string is non-empty
# These below are the file compare operators
# -e is used to check wheather the file exist or not forexample:- [[ -e today.txt ]]; echo $?; will return true if file exist
# -f is used to check wheather the input is file or directory forexp:- [[ -f today.txt ]]; will return true because today.txt is file not __dir__
# same -d is used to check wheater the input is __dir__ or not
# -x, -r, -w these are permission flags it is used to check if the fiel has these permission or not
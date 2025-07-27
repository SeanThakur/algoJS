#!/opt/homebrew/bin/bash
read -p "Your full name " fullname;
read -N 4 -p "Your extension code? (Must be 4 character) " extcode;
echo;
read -N 4 -s -p "Your password? (Must be 4 character) " password;
echo;

echo "$fullname, $extcode" >> read_project_output.csv;
exit 0;
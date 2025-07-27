#!/opt/homebrew/bin/bash

read -p "Give me your name: " name;
read -p "What are you looking for? " lookingFor;
# -s is the flag you used when you don't want to display the input in the terminal
# -t is the flat you should use when you want to add time limit for any parameter and -t take input in seconds
# forexample -t 5 tell the script to wait for 5 sec and go to the next input
read -s -p "ya ya!! what's the password? " password;
echo;
echo "Here is your information what you have provided so far";
echo "Your name is $name and $lookingFor is what you are looking for";
echo "After carefully searching to our connection we didn't find anything to give me!! try again."
exit 0;
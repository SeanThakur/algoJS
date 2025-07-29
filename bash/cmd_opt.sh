#!/opt/homebrew/bin/bash

while getopts "f:n:" opt; do
    case "$opt" in 
        f) echo "filename: $OPTARG" ;;
        n) echo "User: $OPTARG" ;;
        *) echo "Invalid argument"; exit 1 ;;
    esac
done
exit 0;
#!/opt/homebrew/bin/bash

total_sec=""
while getopts "m:s:" opt; do
    case "$opt" in
        m) total_sec=$((total_sec + $OPTARG * 60)) ;;
        s) total_sec=$((total_sec + $OPTARG)) ;;
        *) echo "Invalid arg"; exit 1 ;;
    esac
done

while [ $total_sec -gt 0 ]; do
    echo $total_sec
    total_sec=$((total_sec - 1))
    sleep 1s
done

echo "Time's up"
exit 0;
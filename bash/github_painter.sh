#!/bin/bash
echo 'GENERATING ART...'

# Create a new directory for the project and initialize git
mkdir github_painter
cd github_painter
git init

# Add your remote repository (adjust the URL as necessary)
git remote add origin https://github.com/SeanThakur/paint-github-e7d3f.git

# Fetch the latest data from the remote repository (if any)
git fetch origin

# If the remote is using 'master', check out master (or create the 'main' branch if needed)
git checkout main || git checkout master

# Create a file to trigger a commit
touch foobar.txt

# Stage the file for the first commit
git add .

# Start date (January 1st, 2023) and end date (January 31st, 2023)
start_date="2020-07-1"
end_date="2020-12-27"

# Convert dates to Unix timestamp (to make date calculations easier)
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS: Use -j and -f to parse the date and get the Unix timestamp
    start_timestamp=$(date -j -f "%Y-%m-%d" "$start_date" "+%s")
    end_timestamp=$(date -j -f "%Y-%m-%d" "$end_date" "+%s")
else
    # Linux: Use -d to parse the date and get the Unix timestamp
    start_timestamp=$(date -d "$start_date" +%s)
    end_timestamp=$(date -d "$end_date" +%s)
fi

# Debugging: Print start and end timestamps
echo "Start Timestamp: $start_timestamp"
echo "End Timestamp: $end_timestamp"

# Generate an array of all the dates between start and end
dates=()
current_timestamp=$start_timestamp
while [ $current_timestamp -le $end_timestamp ]; do
    commit_date=$(date -j -f "%s" $current_timestamp "+%Y-%m-%d")  # For macOS
    # commit_date=$(date -d @$current_timestamp "+%Y-%m-%d")  # For Linux
    dates+=("$commit_date")
    current_timestamp=$((current_timestamp + 86400))  # Add one day (86400 seconds)
done

# Shuffle dates manually (works on both macOS and Linux)
shuffled_dates=($(for date in "${dates[@]}"; do echo $date; done | sort -R))

# Loop through the shuffled dates and commit 3 or 5 times per day, skipping weekends
for date in "${shuffled_dates[@]}"; do
    # Check if the current date is Saturday or Sunday (1=Monday, 7=Sunday)
    day_of_week=$(date -j -f "%Y-%m-%d" "$date" "+%u")  # For macOS
    # day_of_week=$(date -d "$date" "+%u")  # For Linux

    if [[ "$day_of_week" -eq 6 || "$day_of_week" -eq 7 ]]; then
        # Skip Saturday (6) and Sunday (7)
        echo "Skipping commit on $date (Weekend)"
        continue
    fi

    # Randomly decide if we want to commit 3 or 5 times on this date
    num_commits=$((RANDOM % 3))  # Will be either 1 or 5 commits

    echo "Selected $num_commits commits for $date"

    # For each commit on the date
    for commit_num in $(seq 1 $num_commits); do
        # Modify the file (append a timestamp) to trigger a commit
        echo "Commit $commit_num for $date" >> foobar.txt

        # Stage the file for the commit
        git add foobar.txt

        # Commit with the selected date
        GIT_COMMITTER_DATE="$date 12:00:00" GIT_AUTHOR_DATE="$date 12:00:00" git commit --date "$date" -m "Commit $commit_num for $date"

        # Check if the commit was successful
        if [ $? -eq 0 ]; then
            echo "Commit $commit_num for $date successful."
        else
            echo "Commit $commit_num for $date failed."
        fi
    done

    # Optionally, add a small delay between commits to avoid hitting the GitHub server too quickly
    sleep 0.5
done

# Force-push these commits to the remote repository
git push origin main --force

echo 'DONE!'
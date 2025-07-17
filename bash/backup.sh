#!/opt/homebrew/bin/bash

echo "Hello, ${USER^}"
echo "will now backup all the files and folders in algorithms..."
tar -cvf ~/Documents/algojs/bash/my_backup_"$(date +%d-%m-%Y_%H-%M-%S)".tar ~/Documents/algojs/algorithms*

echo "backup completed"
exit 0;
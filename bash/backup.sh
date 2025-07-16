#!/bin/bash

echo "backing up all the files and folders of algorithms..."
tar -cvf ~/Documents/algojs/bash/my_backup_"$(date +%d-%m-%Y_%H-%M-%S)".tar ~/Documents/algojs/algorithms*

echo "backup completed"
exit 0;
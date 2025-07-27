#!/opt/homebrew/bin/bash
PS3="What is the day of the week? ";
# PS3 is used to modify the input of the select
select day in mon tue wed thur fri sat sun;
do
echo "You have selected $day";
# break command will execute after one cycle, if you want to have inifinte cycle of this input you can remove break and select
# will ask this question like a loop and user can use ctr+c to exit from it
break
done
exit 0;
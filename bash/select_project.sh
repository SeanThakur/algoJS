#!/opt/homebrew/bin/bash
read -p "What is your fullname?: " fullname;
read -N 4 -p "Give your extenion code (Must be 4 digit): " extcode;
echo;
PS3="What type of phone do you use? (type number) ";
select phone in headset handheld; do
    echo "You chose $phone"
    break;
done;

PS3="Which department do you work? (type number) ";
select department in finance sales "customer service"; do
    echo "You chose $department"
    break;
done;
echo;
read -N 4 -s -p "Your password? (Must be 4 digit): " password;
echo;
echo "Your information is saved in select_project_output file as csv";
echo "$fullname, $extcode, $phone, $department" >> select_project_output.csv;
exit 0;
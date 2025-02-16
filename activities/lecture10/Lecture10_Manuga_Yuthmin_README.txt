*Lecture 10 Activity - CSCI3172 

*Date created: 15 02 2025
*Last Modified: 16 02 2025
*Lab URL:
web.cs.dal.ca/~bandara/csci3172/activities/lecture10/Lecture10_Manuga_Yuthmin_README.txt
https://git.cs.dal.ca/bandara/csci3172.git

##Author: Manuga Yuthmin Wijesundara Bandara B00944453

##Built with 

*https://regexr.com - website used to test the regular expressions 

#Lecture 10 Activity: 

*Regular Expression for first name: ^[A-Za-z]+(?:\s[A-Za-z]+)?$

*Regular Expression for last name: ^[A-Za-z]+(?:['-][A-Za-z]+)*$

*Regular Expression for email: ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$

*Regular Expression for password: ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!_-]).{12,}$

#Rules for the regular expressions:

*First Name: Allows letters & space separating optional middle name

*Last Name: Allows letters, apostrophes & hyphens

*Email: Standard email format with flexible domains 

*Password - One uppercase, one lowercase, one digit, one special character & minimum of 12 characters

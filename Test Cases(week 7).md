# Practical 7: Interation 2

## Objective: 
Execute your iteration-2 and writing tests for your project

---

## Title:
User Login and Authentication

## Description:
Description: As a registered user, I want to securely log into the system so that my personal information and order history are protected.

## Priority: 
High

## Estimate: 
1 day

## 1. Test for logging in with valid email and password
·Open the system login page.
·Enter a registered email address in the email field.
·Enter the correct password in the password field.
·Click the Login button.
·Check that the user is redirected to the homepage or dashboard.
·Check that the system creates a valid user session.
·Check that no error message is displayed.

## 2. Test for logging in with an incorrect password
·Open the system login page.
·Enter a registered email address in the email field.
·Enter an incorrect password in the password field.
·Click the Login button.
·Check that the login is rejected by the system.
·Check that an error message such as “Invalid email or password” is displayed.
·Confirm that the user remains on the login page.
·Make sure the user is not allowed to access protected pages.

## 3. Test for submitting the login form with empty fields
·Open the system login page.
·Leave the email field empty and the password field empty.
·Click the Login button.
·Check that the system does not process the login request.
·Check that validation messages are shown for the required fields.
·Confirm that the user is not redirected away from the login page.
·Make sure no session is created.
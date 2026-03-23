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
Open the system login page.  
Enter a registered email address in the email field.  
Enter the correct password in the password field.  
Click the Login button.  
Check that the user is redirected to the homepage or dashboard.  
Check that the system creates a valid user session.  
Check that no error message is displayed.  

## 2. Test for logging in with an incorrect password
Open the system login page.  
Enter a registered email address in the email field.  
Enter an incorrect password in the password field.  
Click the Login button.  
Check that the login is rejected by the system.  
Check that an error message such as “Invalid email or password” is displayed.  
Confirm that the user remains on the login page.  
Make sure the user is not allowed to access protected pages. 

## 3. Test for submitting the login form with empty fields
Open the system login page.  
Leave the email field empty and the password field empty.  
Click the Login button.  
Check that the system does not process the login request.  
Check that validation messages are shown for the required fields.  
Confirm that the user is not redirected away from the login page.  
Make sure no session is created.  

---

## Title: 
View Restaurant Menu

## Description: 
Description: As a user, I want to view the detailed menu of a selected restaurant so that I can see dish names, prices, and descriptions before ordering.

## Priority: 
High

## Estimate: 
2 days

## 1. Test for viewing a restaurant menu successfully
Open the system homepage or restaurant list page.  
Select a restaurant from the list.  
Click on the restaurant to open its menu page.  
Check that the menu page is displayed correctly.  
Check that food and drink items are listed clearly.  
Check that item names, prices, and descriptions are visible.  
Make sure no error message is displayed.  

## 2. Test for viewing a restaurant menu when no menu items are available
Open the system homepage or restaurant list page.  
Select a restaurant that has no available menu items.  
Click on the restaurant to open its menu page.  
Check that the menu page still loads successfully.  
Check that a message such as “No menu items available” is displayed.  
Confirm that no broken layout or system error appears.  
Make sure the user stays on the restaurant menu page.  

## Open the system homepage or restaurant list page.
Select a restaurant from the list.  
Click on the restaurant to open its menu page.  
Simulate a loading failure or unavailable data source.  
Check that the system does not display incomplete or broken menu data.  
Check that an error message is shown, such as “Unable to load menu”.  
Confirm that the system handles the error properly without crashing.  
Make sure the user can retry or return to the previous page.  

---

## Title: 
Add Items to Cart

## Description: 
As a user, I want to add selected dishes to a shopping cart so that I can review and manage my order before checkout.

## Priority: 
High

## Estimate: 
1 day

## 1. Test for adding a menu item to the cart successfully
Open the system homepage or restaurant list page.  
Select a restaurant from the list.  
Open the restaurant menu page.  
Choose a menu item.  
Click the Add to Cart button.  
Check that the selected item is added to the cart.  
Check that the cart updates the item name, quantity, and total price correctly.  
Make sure no error message is displayed.  

## 2. Test for adding multiple quantities of the same item to the cart
Open the system homepage or restaurant list page.  
Select a restaurant from the list.  
Open the restaurant menu page.  
Choose one menu item.  
Click the Add to Cart button more than once, or increase the quantity before adding.  
Check that the cart shows the correct quantity for that item.  
Check that the total price is updated correctly based on the quantity.  
Confirm that the system does not create incorrect or duplicate cart entries.  

## 3. Test for adding an unavailable item to the cart
Open the system homepage or restaurant list page.  
Select a restaurant from the list.  
Open the restaurant menu page.  
Choose a menu item marked as unavailable or out of stock.  
Click the Add to Cart button.  
Check that the system prevents the item from being added to the cart.  
Check that an error message is displayed, such as “Item is unavailable”.  
Confirm that the cart remains unchanged and the system does not crash.  
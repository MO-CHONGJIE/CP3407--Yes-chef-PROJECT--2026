# Iteration 2


## Overview

Compared with Iteration 1, this iteration focused on improving the practicality and realism of the YesChef system.

In Iteration 1, the ordering page only used a pseudo-AI recommendation approach. The search function relied on manually predefined tags to match and recommend dishes. In Iteration 2, we integrated a large language model into the search feature, so the system can now provide more intelligent dish recommendations based on user needs. For example, when a user searches for a keyword such as **"healthy"**, the system can analyse dish names and related meanings more flexibly instead of only depending on fixed preset tags.

We also added an **administrator version** of the system. By logging in with an admin account, an administrator is able to add new dishes through the admin interface.

In addition, we completed the **local frontend-backend deployment**, which means users can now register accounts and their account information can be stored in the backend system.

Finally, the frontend of our project has been deployed to a server and can now be accessed through a **public website address**, which means users do not need to run the system locally to use the website.

---

## New Features in Iteration 2

* **AI-powered recommendation search**

  * Integrated a large language model into the search bar
  * Improved recommendation quality compared with the pseudo-AI search in Iteration 1
  * Users can search by needs such as “healthy” and receive more suitable dish suggestions

* **Administrator version**

  * Added admin login
  * Admin can add new dishes through the admin page

* **Frontend and backend deployment**

  * Users can register accounts
  * User account data can be stored in the backend

* **Public website access**

  * The system frontend is hosted on a server
  * Users can access the website through a public URL

---

## User Testing Plan

The purpose of the user testing in Iteration 2 is to evaluate whether the newly added functions are usable, understandable, and practical in real situations. Instead of only checking whether a feature works technically, we also want to know whether users can find the feature easily, understand what it does, and complete common tasks without confusion.

This testing is focused on both **general users** and **administrator users**.

---

## Testing Method

We used a **task-based user testing method**. Participants were asked to complete practical tasks on the website, while we observed their actions and recorded whether they could complete the task successfully, how long it took, and whether they encountered any confusion.

For example, instead of only checking whether the website link works, we tested whether a user could directly open the website through the public address without needing technical help. Similarly, instead of only checking whether the AI search feature exists, we tested whether a user could quickly notice the AI search function on the page and use it correctly.

### Testing steps

1. Give the participant a short introduction to the system
2. Ask the participant to complete several real tasks
3. Observe whether the participant can finish the task independently
4. Record any hesitation, confusion, failed attempt, or question raised by the participant
5. Collect feedback after the testing session

### What we observed during testing

* Whether users could directly access the website through the deployed public address
* Whether users could quickly understand where the AI search feature is located
* Whether users understood the difference between normal search and AI-based recommendation
* Whether the registration and login process was smooth
* Whether admin users could access the admin page and add a dish successfully
* Whether users felt the system was easy and natural to use

---

## Detailed User Testing Table

| Test ID | Feature to Test                                    | User Type                 | Example Testing Process                                                                                                                              | Expected Result                                                                                                  |
| ------- | -------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| T1      | Public website access                              | General User              | Ask the user to open the system by directly entering or clicking the public website address in the browser, without running any local code or server | The website should load successfully and the user should be able to enter the homepage directly                  |
| T2      | Website accessibility and first impression         | General User              | After opening the website, ask the user what they think the website is for and whether they can identify the ordering page quickly                   | The homepage should be clear enough for the user to understand the purpose of the website and navigate correctly |
| T3      | Finding the AI search function                     | General User              | Ask the user to go to the ordering page and find the AI search/recommendation function without giving step-by-step instructions                      | The user should be able to find the AI search function quickly and without confusion                             |
| T4      | Using AI search for healthy dishes                 | General User              | Ask the user to type a word such as “healthy” into the search area and check whether the returned dishes match the expected idea                     | The system should recommend dishes that are relevant to healthy food choices                                     |
| T5      | Comparing Iteration 1 and Iteration 2 search logic | General User              | Ask the user to search using a broader need-based keyword and observe whether the result feels more intelligent than a simple tag match              | The user should feel that the search is more flexible and more useful than the previous pseudo-AI version        |
| T6      | User registration                                  | General User              | Ask the user to create a new account with valid details and then log in using the new account                                                        | The account should be created successfully and login should work correctly                                       |
| T7      | Account data storage                               | General User              | After registration, ask the user to refresh the page or reopen the website and log in again using the same account                                   | The account information should remain stored in the backend and still be valid                                   |
| T8      | User login process                                 | General User              | Ask an existing user to log in and observe whether the process is clear and whether any errors happen                                                | The login process should be completed smoothly and the user should enter the system successfully                 |
| T9      | Admin login                                        | Admin User                | Ask the admin user to log in with the administrator account and enter the admin version of the system                                                | The admin account should open the correct admin interface                                                        |
| T10     | Adding a new dish                                  | Admin User                | Ask the admin to add a new dish with required details, then check whether the new dish appears in the menu or system data                            | The new dish should be added successfully and displayed correctly                                                |
| T11     | Navigation between pages                           | General User / Admin User | Ask the user to move between homepage, order page, login page, and admin page                                                                        | The user should be able to navigate without getting lost                                                         |
| T12     | Overall ease of use                                | General User / Admin User | After the tasks are completed, ask the user whether the functions were easy to find and easy to understand                                           | Most users should report that the system is understandable and convenient to use                                 |

---

## Example Test Scenarios

### 1. Testing public access to the website

A participant is given the public frontend address and asked to open it in a browser. The goal is to check whether the website can be accessed directly from the Internet, rather than only through local deployment. If the page opens successfully and the participant can start using the system immediately, the test is considered successful.

### 2. Testing whether the AI search function is easy to find

A participant is asked to find a way to get recommended dishes for healthy eating, but no direct instruction is given about where the AI search bar is located. This helps us test whether the feature is visible enough in the interface. If the participant can find it quickly, this means the design is clear. If the participant takes too long or looks confused, this suggests the interface still needs improvement.

### 3. Testing whether AI recommendations are meaningful

A participant enters words such as **healthy**, **light meal**, or **low calorie** into the AI search function. We then observe whether the system returns dishes that reasonably match the request. This test helps evaluate whether the new AI-based search is more practical than the Iteration 1 tag-based approach.

### 4. Testing admin functionality

A participant logs in with an admin account and is asked to add a new menu item. This is used to test whether the admin page works correctly and whether the management function is usable. If the dish can be added without errors and appears in the system, the function is considered successful.

---

## Feedback Questions for Users

After testing, users can be asked the following questions:

* Could you open the website easily through the public address?
* Was it easy to find the AI search function?
* Did the AI search results match your expectations?
* Was the registration and login process simple to follow?
* Was the website easy to navigate?
* For admin users: was the add-dish function easy to use?
* Which part of the system was the most useful?
* Which part of the system still needs improvement?

---

## Summary

Iteration 2 is a major improvement compared with Iteration 1. The search feature is no longer limited to manually assigned tags, but instead uses a large language model to provide more intelligent recommendations. The project now also includes an administrator version, account registration with backend storage, and a deployed public frontend website.

Through user testing, we do not only check whether these functions technically work, but also whether real users can access them easily, find them quickly, and use them effectively in practice.
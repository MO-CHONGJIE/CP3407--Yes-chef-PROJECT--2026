## Iteration 2

Compared with Iteration 1, our team added several important new features in Iteration 2 to make the YesChef system more practical and closer to a real-world application.

### New Features in Iteration 2

1. **Real AI-powered search and recommendation**
   - In Iteration 1, the search function was a pseudo-AI system based on manually predefined tags.
   - In Iteration 2, we introduced a real AI function into the ordering page.
   - The system can now use a large language model to understand food-related meanings and recommend dishes more intelligently.
   - For example, if a dish is related to healthy eating, the system can identify this through generated tags and return suitable dishes when the user searches for terms like **"Healthy"**.

2. **Admin version**
   - We added an admin account and admin interface.
   - After logging in as an administrator, the admin can add new dishes to the menu.
   - Dish images no longer need to come from local files. Instead, image links from online sources can be used directly.

3. **Completed front-end and back-end deployment**
   - In Iteration 2, we completed the local deployment of both the front end and back end.
   - Users can now register accounts and log in with saved account information.
   - User account data can be recorded properly in the system.

4. **Public website access**
   - We connected the website to a server.
   - The front-end website now has a publicly accessible address, which means users can visit the website online instead of only running it locally.

---

## User Testing for Iteration 2

The purpose of user testing in Iteration 2 is to evaluate whether the newly added features work correctly and whether they improve the overall user experience.

| No. | Feature | What to Test | Testing Method | User Task | Expected Result |
|------|---------|--------------|----------------|-----------|-----------------|
| 1 | AI-powered search and recommendation | Whether the system can recommend dishes based on natural language input such as "healthy" | Task-based usability testing | Ask users to type words like **healthy**, **low calorie**, or **high protein** into the search bar | The system should display dishes that match the user’s meaning more accurately than Iteration 1 |
| 2 | AI search improvement | Whether the new AI search is better than the previous tag-based search | Comparative testing | Let users try the old search logic and the new AI search using the same keywords | Users should find Iteration 2 search more flexible, natural, and helpful |
| 3 | LLM-based dish tagging | Whether the system can identify useful dish attributes from dish names | Functional testing | Test dish names and check whether health-related searches can return suitable dishes | The generated tags should support better recommendations |
| 4 | Admin login | Whether the admin account can log in successfully and access admin functions | Role-based testing | Log in using the admin account | The admin should be able to access the management page successfully |
| 5 | Add new dishes | Whether admins can add new menu items correctly | Functional testing | Add a new dish with name, price, description, category, and image link | The dish should be saved and shown on the menu page |
| 6 | Image by URL | Whether online image links work correctly for dish images | Functional testing | Paste an online image URL when creating a dish | The dish image should display correctly without local upload |
| 7 | User registration | Whether new users can register successfully | Basic usability testing | Create a new user account | The new account should be stored successfully in the backend |
| 8 | User login and account record | Whether registered users can log in again with saved information | Functional testing | Register, log out, and log in again with the same account | The user should be able to log in successfully and account data should persist |
| 9 | Front-end and back-end connection | Whether the complete system works smoothly after deployment | End-to-end testing | Complete the full process: register, log in, search dishes, add to cart, and place an order | The main workflow should run correctly without major errors |
| 10 | Public website accessibility | Whether users can access the website through the public frontend link | Accessibility testing | Open the website on different devices or networks | The website should be accessible online without local setup |
| 11 | Overall ordering workflow | Whether the ordering process is easy to understand and use | Usability testing | Ask users to search for food, choose dishes, and place an order | Users should complete the ordering process with little confusion |
| 12 | User satisfaction | Whether users think Iteration 2 is better than Iteration 1 | Questionnaire / short interview | Collect feedback after testing | Most users should report improvement in intelligence, functionality, and usability |

---

## Testing Summary

The user testing for Iteration 2 focuses on both **functionality** and **usability**.  
Compared with Iteration 1, this version introduces more realistic and useful features, especially the real AI recommendation function, the admin management interface, the completed login and registration system, and the public website access.  
These tests help confirm that the system is not only technically improved, but also easier and more valuable for users to use in practice.
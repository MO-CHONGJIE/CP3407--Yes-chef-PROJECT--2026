# User Testing Report

## Purpose

The purpose of this user testing report is to evaluate the usability and practicality of the new functions introduced in the final iteration of the YesChef system. The testing focused not only on whether the features worked correctly, but also on how users felt when interacting with them, whether the functions were easy to understand, and what improvements they believed would further strengthen the system.

The testing involved both general users and administrator users. Participants were asked to use the website in realistic scenarios, such as searching for dishes, registering accounts, logging in, and using the admin page. Their actions, comments, and suggestions were recorded as feedback.

---

## Testing Summary

Overall, users considered this final iteration a clear improvement over Iteration 1. They especially noticed the increased realism of the system because it now supports account registration, backend storage, administrator functions, and online access through a public website.

The AI-powered search feature was seen as one of the most important improvements because it made dish recommendations more flexible and intelligent than before. However, users also pointed out that the original tag-based search still has value, because it relies on local data and can return results much faster. For this reason, some users suggested that the system should keep both search methods instead of replacing the original one completely.

Users were also interested in a more complete ordering experience. One common suggestion was to add an order status or food preparation progress page after payment, so that users can track whether the order has been placed, is being prepared, or is ready for pickup.

From the administrator side, users felt that the add-dish function was useful, but they suggested that image uploading should not depend only on local image files. They preferred an option to use online image links so that dishes can be updated more easily even when the admin is working remotely or does not have the image stored locally.

As this is the final iteration of the project, these suggestions are recorded as valuable user feedback and possible directions for future development, rather than planned changes for another iteration.

---

## Detailed Feedback by Feature

| Feature                                   | Testing Result                                                                  | User Feedback                                                                                                                                 | Possible Improvement                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| AI-powered search                         | Worked successfully and could recommend dishes based on broader user needs      | Users liked that the AI search was more flexible than the old pseudo-AI search and could better match natural requests such as “healthy food” | Continue improving recommendation quality and make AI search results clearer                        |
| Original tag-based search                 | Still useful and easy to use                                                    | Some users preferred keeping this function because it depends on local data and gives results faster than AI search                           | Retain the original tag-based search together with the AI search as a fast-search option            |
| Public website access                     | Users could access the website through the public address successfully          | Users felt this made the project look more complete and realistic because it could be used online instead of only locally                     | Improve website stability and speed for online access                                               |
| User registration and login               | Function worked correctly in testing                                            | Users thought account registration improved the realism of the website and made it feel more like a real online ordering system               | Add clearer system feedback messages during registration and login if needed                        |
| Administrator login and add-dish function | Admin version could be accessed and dishes could be added                       | Users found the admin function useful, but thought image uploading was too limited if it only supports local files                            | Allow administrators to add dish images through online image URLs as well as local uploads          |
| Order completion flow                     | Payment/order flow was understandable, but still felt incomplete after checkout | Users wanted more feedback after payment instead of the process ending immediately                                                            | Add an order tracking or food processing page after payment                                         |
| Order status visibility                   | Not yet available                                                               | Users wanted to know what happens after ordering, such as whether the food has been accepted, is being prepared, or is ready for pickup       | Add a live order status page showing stages such as “Ordered”, “Processing”, and “Ready for Pickup” |

---

## Example User Feedback

### 1. Feedback on AI search

Users generally thought the AI-based search was one of the most interesting improvements in the final iteration. They liked that it could respond to more natural requests instead of depending only on manually assigned tags.

However, several users also mentioned that the original tag-based search should not be removed. Their reason was that the old search method is based on local data matching, so it can return results more quickly. In comparison, AI search is more powerful, but sometimes users may prefer a faster result for simple needs.

**Conclusion:**
Users saw value in both search methods. The AI search provides flexibility, while the original tag-based search provides speed.

---

### 2. Feedback on post-payment experience

During testing, users felt that the ordering process became unclear after payment was completed. Although the system allowed them to place the order, there was no further feedback about what was happening next.

Several users said they wanted to see a separate order progress page after payment. They expected the system to show stages such as:

* Order placed
* Preparing food
* Ready for pickup

This kind of feature would make the website feel more complete and more similar to a real online food ordering platform.

**Conclusion:**
Users expected a more continuous post-payment experience, and order progress tracking was one of the most frequently suggested improvements.

---

### 3. Feedback on administrator dish management

Admin users were able to use the add-dish function, but they pointed out one limitation: the current design depends too much on local image files.

This means that if the administrator does not already have the image stored on the local device, updating dishes becomes less convenient. Some users suggested that the admin page should allow image input through an online image URL. This would make it much easier to update dish information remotely, especially when the admin is working on a different device or location.

**Conclusion:**
Users felt that the administrator function works, but could be made more flexible by supporting online image links.

---

## Key Findings

The testing shows that the final iteration made the YesChef system much more complete than Iteration 1. The AI search, backend account system, public deployment, and admin functions all added practical value.

At the same time, the feedback also made it clear that users care about three important areas:

1. **Keeping both search methods**

   * AI search is more intelligent
   * Tag-based search is faster
   * Both have practical value in different situations

2. **Improving the post-payment experience**

   * Users want to see what happens after checkout
   * The process should feel continuous, not suddenly finished

3. **Making admin updates more flexible**

   * Admins want to use online image URLs
   * This would make menu updates easier and more realistic

---

## Final Reflection on User Feedback

As this was the final iteration of the project, the user testing was especially useful in showing both the strengths of the completed system and the areas that users still considered important.

The results suggest that the project successfully moved beyond a simple prototype and became a more realistic online ordering platform. Users appreciated the intelligent search, account system, admin functionality, and public accessibility of the website.

At the same time, the feedback showed that users value not only innovation, but also practicality. Faster local search, clearer post-payment feedback, and more flexible admin operations were all seen as meaningful additions that could further improve the user experience.

These findings provide a useful summary of the final state of the project and highlight possible directions for future development beyond the scope of this assignment.

---

## Conclusion

The user testing results show that the final iteration is a meaningful improvement over Iteration 1. Users appreciated the addition of AI search, backend functionality, administrator management, and public website access. At the same time, their feedback highlighted several practical ideas that could make the system even more complete.

Most importantly, users did not simply want more features; they wanted the features to be more practical in real use. Keeping a fast local search option, adding order progress tracking, and making admin updates more flexible were the main themes that appeared during testing.

Overall, the final iteration demonstrated clear progress in both technical implementation and user experience, while the feedback provided a realistic understanding of what users valued most in the finished system.

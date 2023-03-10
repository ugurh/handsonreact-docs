Good use cases for React Context include:

Signed In User and their permissions
(Color) Theme of the application
Language (locale) used in the application
Good use cases for Redux include:

A count of something that displays in a header or sidebar (likes, upvotes, active projects, items in shopping cart, unread messages)
Again, this often can be done by having a common parent component (in many cases the App component) but sometimes it might be too far removed from where you are updating this information
Collaborative software where multiple users can work on the same document at the same time (Google Docs, Google Sheets etc...)
Deciding How to Handle State
From Managing React State: Pluralsight Course by Cory House

Does it belong in the URL? (current page, current record, sorting, scroll location...)
Keep URL-related state in the URL.
Want to persist data across sessions or make data available offline?
Consider web storage (localStorage, IndexedDB, etc)
Is it server data?
Try react-query or swr. Using GraphQL? Then also consider Relay / Apollo.
Is it a DOM element reference, state that doesn’t change, or not rendered at all?
Use a ref.
Can it be derived from existing props, state, URL, etc?
Derive it “on-the-fly” as part of each render (memoize if expensive).
Does only one component use the data?
Use local state.
Do a few related components use it?
Store state in a common parent.
Is it global state? Consider, in order:
Store in App’s root component, context, or separate library like Redux.
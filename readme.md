# Tab_Title_Change_Demo

This is a demo for a use case of changing the tab title.

When a user clicks off to another tab, then the tab of this page will flash between whatever the current title of the page is, and a new message.

The intention is to drive people back to the page with some kind of message like "Come back!".

## How it works

I am using `document.addEventListener` with `visibilityChange`. When the tab's visibility changes and is set to "hidden" (i.e. the customer keeps the tab open, but just goes to a new tab in general), then a new message will replace the current page's title.

This new title will swap back and forth with the original title every X milliseconds, adjustable with a variable.

Using a ternary operator: `document.title = document.title === unfocusedMessage ? currentTitle : unfocusedMessage;` to check every X milliseconds, if the title is the original title, swap it with the new one, and vice-versa.

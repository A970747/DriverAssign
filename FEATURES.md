# Bonus Features

 - Front end hosted by Vercel, back-end on Digital Ocean with PostgreSQL db - data is live.
 - Written in strict TypeScript. Every effort was made to avoid using *any* where possible.
 - Data is very close to real-time. The data layer uses polling and different trigers to give the user the feel of instantaneous updates.
 - Orders are fully editable, and can be created via a form - drivers too!
 - Drivers can be assigned via the DnD UI in /planning, or updated via editing the order.
 - Page is server side rendered with NextJS uses dynamic routing to show individual orders & drivers.
 - Simple UI that should be intuitive and with thoughtful effects to help users.
 - Orders and drivers can be deleted.

# Improvements

 - The most basic improvements I would make are implementing tests. For an example of recent tests you can find some here(https://github.com/A970747/strcal).
 - Having worked in Logistics, I really wanted to be able to implement a date selector to be able filter out the orders on the various pages, but wasn't able to get to that for this test.
 - Front-end isn't optimized for large amounts of drivers/orders. For example, the planning page would get extremely long with many orders. Would have added collapsing orders & container scrolling.
 - Adding some foreign keys to the DB for large looksup, particularly by adding a foreign driverId key to the orders table with an index for when the tables get bigger.
 
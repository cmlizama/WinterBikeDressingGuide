README.md

-Simple 1-2 page web app that takes in a temperature condition and returns a suggested biking outfit

-It would use a 3rd party API to take in weather data and would use the weather info to find corresponding data in the database.

-User would have the option of alternatively suggesting warmer or colder outfit depending on their preference. Either that, or you could generate 1 main suggested outfit and then 1 that is colder and 1 that is warmer.

-Could also perhaps integrate amazon.com API or REI.com to suggest where to find an item of clothing they do not own

-Possibly a collection for each body part, i.e. what to wear on your head, your feet, etc etc

-Of course it would also probably need a disclaimer saying that the user should use the app as a rough guideline and always exercise their best judgment when biking in the cold.

-Inspired by sites like logicalincrements.com, whatthefuckshouldimakefordinner.com, and the biking weather charts myself and other Minnesota cyclists often make for themselves.

-Perhaps with a user login system visitors can also make custom profiles to store their own clothing preferences.

-As some flavor content, you could pull in 2 or 3 geo-tagged instagram photos with #biking #bikes etc from the user's location. This would make the site more visually interesting and possibly give some relevant real-time info on the road conditions.	

-Hourly info could give you a "commute home" plan

-Use geolocation feature of the browser html5 to take in the location data. The browser might give long/lat already
matt wrote a node module for open street maps to geocode, doesnt need an API key.

-AJAX call to re-render an outfit given the user's preference for warmer or colder clothing.

-visualization of a typical person's body and show the clothing options

-Request module in node for API calls

-Actually the data is probably too small to warrant a MongoDB database. Just put it in memory.
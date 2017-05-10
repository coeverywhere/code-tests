# Map Search Test

## Base Files

You've been given:

1. `index.html`: The base HTML file with a full-page Google Map
1. `main.css`: The base CSS file
1. `main.js`: The base JS file
1. `sample-data.js`: The sample data that should be searched. Each record has _at least_ an `id` and `name`.

## The Task

Create a user interface that implements the following:

1. "Autocomplete" search field. Use the provided sample data (found in `sample-data.js`) to allows users to search in an input field (type `text` or `search`) for results based on the data `name` value.
1. Results drop down. Show the results of the autocomplete input as a list of items that a user can select/click from.
1. Locations/markers. When a user finds and clicks a search result, display the location on the map.
1. Detailed popup. When a user clicks a map location/marker, display a popup that contains additional information about that location.

## Things to think about

* Document your code! This is your opportunity to help us understand you. Let us know:
	* why you did (or did not) do something,
	* why you used (or did not use) any frameworks/libraries,
	* what you wanted to do, but could not because...?

* How friendly is the user experience? _Feel free to look around at other map search implementations on the web and see if you notice any things that stick out as really enhancing the UX._

## Extra Credit

* We use [Ractive.js](http://ractive.js.org) for our user interface at **Ground Signal**. If you find it useful for this exercise, by all means give it a go!
* We also implement _lots_ of charts using [Chart.js](http://chartjs.org/). We've included some data (see `avgStoreTraffic`) in the `sample-data.js` in case you want to spice up your modal with that.
* Let us know how we could improve this test. Do a PR!
* Anything else awesome. :)

### Be Unique!

If you have any questions/comments/feedback, don't hesitate to [shoot Brian an email](mailto:brian@groundsignal.com)!

For quick reference, some Google Maps documentation can be found at [https://developers.google.com/maps/documentation/javascript/](https://developers.google.com/maps/documentation/javascript)

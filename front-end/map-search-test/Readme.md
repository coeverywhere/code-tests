# Map Search Test

## Base Files

You've been given:

1. `index.html`: The base HTML file with a full-page Google Map
1. `main.css`: The base CSS file
1. `main.js`: The base JS file
1. `sample-data.js`: The sample data that should be searched. Each record has _at least_ an `id` and `name`.

## The Task

Create a user interface that implements the following:

1. "Autocomplete" search field - Using the provided sample data in `sample-data.js`, allow users to search in an input field for results based on the data `name` value.
1. Results list - Show the results of the autocomplete search as a list of items that a user can select/click.
1. Locations/markers - When a user finds and clicks a search result, display the location on the map.
1. Details modal - When a user clicks a map location/marker, display a modal that contains additional information about that location. (see below)

## Details Modal

When clicking on a map location/marker you should display a modal that contains information about that specific location. **This modal should be both horizontally and vertically aligned.**

Example:

![Example vertically and horizontally aligned modal](./test-example-modal.png?raw=true)

## Things to think about

* Document your code! This is your opportunity to help us understand you. Let us know:
	* why you did (or did not) do something,
	* why you used (or did not use) any frameworks/libraries,
	* what you wanted to do, but could not because...?
* How friendly is the user experience? _Feel free to look around at other map search implementations on the web and see if you notice any things that stick out as really enhancing the UX._

## Extra Credit

* We use [Ractive.js](http://ractive.js.org) for our user interface at **Ground Signal**. If you find it useful for this exercise, by all means give it a go!
* We also implement _lots_ of charts using [Chart.js](http://chartjs.org/). We've included some data (see `avgStoreTraffic`) in the `sample-data.js` in case you want to spice up your modal with that.
* Let us know how we could improve this test. Bug? Improvement? Do a PR!
* Anything else awesome. :)

### Be Unique!

If you have any questions/comments/feedback, don't hesitate to [shoot us an email](mailto:jobs@groundsignal.com)!

For quick reference, some Google Maps documentation can be found at [https://developers.google.com/maps/documentation/javascript/](https://developers.google.com/maps/documentation/javascript)

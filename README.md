<h1 align="center">friendfinder</h1>

<div align="center">
  <strong>Find someone</strong>
</div>
<div align="center">
  A <code>full-stack</code> application designed to find your perfect mate
</div>

<br />

## Table of Contents
- [Goal](#goal)
- [Getting Started](#getting-started)
- [Prerequisites](#example)
- [Installing](#philosophy)
- [Built With](#built-with)
- [Author](#state)
- [License](#license)
- [Application Structure](#application-structure)
- [Deployment](#deployment)
- [Target Audience](#target-audience)
- [API](#api)
- [Installation](#installation)
- [See Also](#see-also)
- [Support](#support)

[bel]: https://github.com/shama/bel
[browserify]: https://github.com/substack/node-browserify
[budo]: https://github.com/mattdesl/budo
[es2020]: https://github.com/yoshuawuyts/es2020
[handbook]: https://github.com/yoshuawuyts/choo-handbook
[hyperx]: https://github.com/substack/hyperx
[morphdom-bench]: https://github.com/patrick-steele-idem/morphdom#benchmarks
[nanomorph]: https://github.com/choojs/nanomorph
[nanorouter]: https://github.com/choojs/nanorouter
[yo-yo]: https://github.com/maxogden/yo-yo
[yo-yoify]: https://github.com/shama/yo-yoify
[unassertify]: https://github.com/unassert-js/unassertify
[window-performance]: https://developer.mozilla.org/en-US/docs/Web/API/Performance

## Goal
The goal is to use deceptively deep personality questions to link 2 users together with a common bond. Many great questions and ideas were discovered during my research, but few translated well into a scale of 1-5.
## Features
- __minimal size:__ weighing `4kb`, Choo is a tiny little framework
- __event based:__ our performant event system makes writing apps easy
- __small api:__ with only 6 methods there's not much to learn
- __minimal tooling:__ built for the cutting edge `browserify` compiler
- __isomorphic:__ renders seamlessly in both Node and browsers
- __very cute:__ choo choo!

## Getting Started
Welcome to Friend Finder! Are you lonely? Maybe just bored? Do you want to go hang out, but finding a friend is just too much work? Well I've got GOOD NEWS for you! We can find friends for you! Just include a few details about yourself, and we'll work our magic. Try it for FREE!

## Built With
Friend Finder is a full stack node app deployed on Heroku. Data is saved on a file, not in a database. It uses Express to configure and operate the server, Body-Parser to pass the json data back and forth between files & functions, and fs to read & write from the data files on the server. Various routes are setup to complete the survey, view the JSON API, and post data into the app. A general catch-all route will bring all users to the homepage, regardless of the path the user attempts to access.

## Example

```js
var html = require('choo/html')
var devtools = require('choo-devtools')
var choo = require('choo')

var app = choo()
app.use(devtools())
app.use(countStore)
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html
```
 
Want to see more examples? Check out the [Choo handbook][handbook].

## Target Audience
Casual users looking to see who they best resemble will enjoy the app. A community of friends, co-workers, or students can compare their interests to each other as well.

## Deployment
Deployment on a node server is required. This app is setup to listen on a Heroku default port; in the absence of Heroku, it sets the port to 8080 instead. Since no database management is required, setup should be a simple matter of simply uploading the files and having the server listen for a request.

### `'DOMContentLoaded'`|`state.events.DOMCONTENTLOADED`
Choo emits this when the DOM is ready. Similar to the DOM's
`'DOMContentLoaded'` event, except it will be emitted even if the listener is
added _after_ the DOM became ready. Uses
[document-ready](https://github.com/bendrucker/document-ready) under the hood.

### `'render'`|`state.events.RENDER`
This event should be emitted to re-render the DOM. A common pattern is to
update the `state` object, and then emit the `'render'` event straight after.
Note that `'render'` will only have an effect once the `DOMContentLoaded` event
has been fired.

### `'navigate'`|`state.events.NAVIGATE`
Choo emits this event whenever routes change. This is triggered by either
`'pushState'`, `'replaceState'` or `'popState'`.

### `'pushState'`|`state.events.PUSHSTATE`
This event should be emitted to navigate to a new route. The new route is added
to the browser's history stack, and will emit `'navigate'` and `'render'`.
Similar to
[history.pushState](http://devdocs.io/dom/history_api).

### `'replaceState'`|`state.events.REPLACESTATE`
This event should be emitted to navigate to a new route. The new route replaces
the current entry in the browser's history stack, and will emit `'navigate'`
and `'render'`. Similar to
[history.replaceState](http://devdocs.io/dom/history#history-replacestate).

### `'popState'`|`state.events.POPSTATE`
This event is emitted when the user hits the 'back' button in their browser.
The new route will be a previous entry in the browser's history stack, and
immediately afterward the`'navigate'` and `'render'`events will be emitted.
Similar to [history.popState](http://devdocs.io/dom_events/popstate). (Note
that `emit('popState')` will _not_ cause a popState action - use
`history.go(-1)` for that - this is different to the behaviour of `pushState`
and `replaceState`!)

### `'DOMTitleChange'`|`state.events.DOMTITLECHANGE`
This event should be emitted whenever the `document.title` needs to be updated.
It will set both `document.title` and `state.title`.  This value can be used
when server rendering to accurately include a `<title>` tag in the header.
This is derived from the
[DOMTitleChanged event](https://developer.mozilla.org/en-US/docs/Web/Events/DOMTitleChanged).

## Application Structure
Code for running the modules located in the root of the application

```
FriendFinder/server.js
```
objects array where I store all the friends' details

```
FriendFinder/app/data/friends.js
```
code to display the home page which has bootstrap jumbotron header,glyphicons, a button to go to survey page, and links to list all friends' details in json format and link to git repository.

```
FriendFinder/app/public/home.html
```
the code to display the survey page with fields name, link to photo, and 10 dropdown questions for the user to choose to find the best match, and a submit button. Also has link to Clear All which clears the user input to start fresh, another link to list all friends' details in json format, and another to git repository. And a modal to display the result (best match). I have used css, and js bootstrap components to format the page and components. Also I have added the Front-end Javascript code to handle the submit and clear all events.

```
FriendFinder/app/public/survey.html
```
* The clear all event will reload the page which clears the input to start fresh.
* The submit event first validates the input whether all fields are entered. If any field is missing data it'll display an alert asking the user to enter all fields; else it'll do a POST request to the express server sending the current URL and user entered data. Once the call is complete it'll display a Modal with the best match person's name and photo (if the photo is not available it'll display a placeholder image).

```
FriendFinder/app/routing/htmlRoutes.js
```

```
FriendFinder/app/routing/apiRoutes.js
```
 handles the GET request to list all friends in json format, and the POST request to find the best match. When the POST request is hit, the code will get the scores array for the current user and compares with each of the friend's scores in the existing pool, finds the difference (difference in each answer score and adds them all together), and stores the total difference and the friends array index in a temporary array. Once all the friend's scores are compared the temporary array will be sorted by the difference, and this will give me the best match at the 0th index. Then the POST request will return the index of 0 which has the best match back to the client.

code to handle the api GET requests on /survey and * for anything else other than survey including /home, and displays the corresponding html page.

## API
This section provides documentation on how each function in Choo works. It's
intended to be a technical reference. If you're interested in learning choo for
the first time, consider reading through the [handbook][handbook] first
:sparkles:



`friendfinder` is a full stack node app deployed on Heroku. Data is saved on a file, not in a database. It uses [Express](https://www.npmjs.com/package/express) to configure and operate the server, [Body-Parser](https://www.npmjs.com/package/body-parser) to pass the json data back and forth between files & functions, and [fs](https://nodejs.org/api/fs.html) to read & write from the data files on the server. Various routes are setup to complete the survey, view the JSON API, and post data into the app. A general catch-all route will bring all users to the homepage, regardless of the path the user attempts to access.
 *better* 
 
 Friend Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

Friend Finder application is meant to simulate a simple dating app. The application is implemented using a Node.js and Express server on the back end and the Materialize CSS framework on the front end.
 
> ***<sub>Live Link</sub>*** <br/>
> `friendfinder` hosted at https://friendfinder-nodejs-apirouter.herokuapp.com/ written in **Swift 4.0**+. 

***
## [Usage Overview](#usage-overview)

### **Installation**

Some days, you just feel like dealing with [UIControl](https://vhesener.github.io/Closures/Controls.html)'s target-action using a closure instead.

```swift
git clone git@github.com:angrbrd/friend-finder.git
cd friend-finder
npm install
}
```

```swift
mySwitch.onChange { isOn in
    // UISwitch value changed code
}
```

***

Adding a [gesture recognizer](https://vhesener.github.io/Closures/Gesture%20Recognizers.html) can be compacted into one method.

```swift
view.addPanGesture() { pan in
    // UIPanGesutreRecognizer recognized code
}
```

***

Populating views with an array? I gotchu.

```swift
tableView.addElements(myArray, cell: MyTableViewCell.self) { element, cell, index in
    cell.textLabel!.text = "\(element)"
}
```

```swift
collectionView.addFlowElements(myArray, cell: MyCustomCollectionViewCell.self) { element, cell, index in
    cell.myImageViewProperty.image = element.thumbImage
}
```

```swift
pickerView.addStrings(myStrings) { title, component, row in
    // UIPickerView item selected code
}
```
***
### **Running Locally**

Almost all convenience methods allow for the use of [daisy chaining](https://en.wikipedia.org/wiki/Method_chaining). This allows us to have some nice syntax sugar while implementing optional delegate methods in a concise way. Using [UITextField](https://vhesener.github.io/Closures/Extensions/UITextField.html) as an example, we can organize and visualize all of the `UITextFieldDelegate` behavior.

To run the application locally and access it in your browser, first set the PORT environment variable to the value of your choice. An example is shown below.

```swift
export PORT=3030

```
***
### **Demo**

Friend Finder is deployed to Heroku. Please check it out here.

At no time are you locked into using these convenience methods. For instance, [UITableView](https://vhesener.github.io/Closures/Extensions/UITableView.html) does not need to be populated with an array. You can just as easily provide your own `UITableViewDelegate` and `UITableViewDataSource` handlers.

```swift
tableView.register(MyTableViewCell.self, forCellReuseIdentifier: "Cell")
tableView
    .numberOfRows { _ in
        myArray.count
    }.cellForRow { indexPath in
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)
        cell.textLabel!.text = myArray[indexPath.row]
        return cell
    }.didSelectRowAt { indexPath in
        // IndexPath selected code
}
```

***

You aren't limited to which delegate/dataSource methods you wish to implement. Similarly, you can act on any
[UIControl](https://vhesener.github.io/Closures/Extensions/UIControl.html#/s:So9UIControlC8ClosuresE2onABXDSC0A6EventsV_yAB_So7UIEventCSgtc7handlertF) events.

```swift
anyControl.on(.touchDown) { control, event in
    // UIControlEvents.touchDown event code
}
```

***

These two [UIImagePickerController](https://vhesener.github.io/Closures/Extensions/UIImagePickerController.html) snippets are equivalent. As you can see, there are lots of ways to provide more granular control by mixing and match various convenience methods and closure handlers.
	
```swift
UIImagePickerController(source: .camera, allow: .image) { result, picker in
    myImageView.image = result.editedImage
}.present(from: self)
```
```swift
let pickerController = UIImagePickerController()
pickerController.sourceType = .camera
pickerController.mediaTypes = [kUTTypeImage]
pickerController.didFinishPickingMedia { [weak self] info in
    myImageView.image = info[UIImagePickerControllerEditedImage] as? UIImage
    self?.dismiss(animated: true)
}.didCancel { [weak self] in
    self?.dismiss(animated: true)
}
self.present(pickerController, animated: true)
```
***
## [Dive Deeper](#dive-deeper)

There are several ways to learn more about the `Closures` API, depending on your learning style. Some just like to open up Xcode and use autocomplete to view the various properties/functions. Others prefer a more documented approach. Below are some documentation options.

***
### <img src="https://raw.githubusercontent.com/vhesener/Closures/assets/assets/playground_Icon.png" width="50" height="50"/> &nbsp;&nbsp; **Playground**

To play with the <a href="https://developer.apple.com/swift/blog/?id=35">Playground</a> demo, open the `Closures` workspace (Closures.xcworkspace file), build the `Closures` framework target, then click on the `Closures Demo` playground. Be sure to show the Assistant Editor and Live View as shown below:

![Playgrounds](https://raw.githubusercontent.com/vhesener/Closures/assets/assets/playground_general.gif)

***
### <img src="https://raw.githubusercontent.com/vhesener/Closures/assets/assets/reference_Icon.png" width="50" height="50"/> &nbsp;&nbsp; **Class Reference Documentation**

The [Reference Documentation](https://vhesener.github.io/Closures) has all of the detailed usage information including all the public methods, parameters, and convenience initializers.

[![Class Reference Documentation](https://raw.githubusercontent.com/vhesener/Closures/assets/assets/reference_large.png)](https://vhesener.github.io/Closures)

***
## [Installation](#installation)

### **CocoaPods**

If using [CocoaPods](https://cocoapods.org/), add the following to your Podfile:

```ruby
pod 'Closures'
```

### **Carthage**

If using [Carthage](https://github.com/Carthage/Carthage), add the following to your Cartfile:

```shell
github "vhesener/Closures"
```

### **Manual**

Download or clone the project files found in the [master branch](https://github.com/vhesener/Closures). Drag and drop
all .swift files located in the 'Closures/Source' subdirectory into your Xcode project. Check the option *Copy items
if needed*. 

***
## [Background](#background)

Inspired by [BlocksKit](https://github.com/BlocksKit/BlocksKit), there was a need for a more *Swifty* version
of the same library. The goal of this library was to provide similar usefulness, but with the following
constraints:

* Use Swift's strong-typed system as much as possible in the API.
* Not use the [Objective-C runtime](https://github.com/BlocksKit/BlocksKit/search?utf8=%E2%9C%93&q=objc_setAssociatedObject&type=). 
There are many reasons for this, but mostly because 
	* It was arbitrarily challenging.
	* It was in the spirit of Swift.
* Create a scalable mechanism to easily add additional closure wrappers in the future.

It is our goal to become irrelevant via [sherlock](http://www.urbandictionary.com/define.php?term=sherlocked).
In addition to not having to support this library anymore, it would actually be flattering
to have been validated by the API folks at Apple.

***
## [Want more?](#want-more)

If you were hoping to see an API converted using closures and came up empty handed, there's a
chance all can be right. [Simply vote on a feature](https://github.com/vhesener/Closures/labels/Closure%20API%20Request) by adding a 👍 reaction.

***
## License

Closures is provided under the [MIT License](https://github.com/vhesener/Closures/blob/master/LICENSE).

```text
The MIT License (MIT)
Copyright (c) 2017 Vincent Hesener
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
***
## [Getting Started](#license)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

# An Introduction to Friend Finder
Welcome to Friend Finder! Are you lonely? Maybe just bored? Do you want to go hang out, but finding a friend is just too much work? Well I've got GOOD NEWS for you! We can find friends for you! Just include a few details about yourself, and we'll work our magic. Try it for FREE!

### How does it work?
Friend Finder is a full stack node app deployed on Heroku. Data is saved on a file, not in a database. It uses [Express](https://www.npmjs.com/package/express) to configure and operate the server, [Body-Parser](https://www.npmjs.com/package/body-parser) to pass the json data back and forth between files & functions, and [fs](https://nodejs.org/api/fs.html) to read & write from the data files on the server. Various routes are setup to complete the survey, view the JSON API, and post data into the app. A general catch-all route will bring all users to the homepage, regardless of the path the user attempts to access.

### Who will use this?
Casual users looking to see who they best resemble will enjoy the app. A community of friends, co-workers, or students can compare their interests to each other as well.

### What is the goal?
The goal is to use deceptively deep personality questions to link 2 users together with a common bond. Many great questions and ideas were discovered during my research, but few translated well into a scale of 1-5. Sites like [Power Of Positivity](https://www.powerofpositivity.com/10-questions-ask-someone-will-reveal/) were helpful in taking the theories and adjusting them to a simple scale.

# Deployment
Deployment on a node server is required. This app is setup to listen on a Heroku default port; in the absence of Heroku, it sets the port to 8080 instead. Since no database management is required, setup should be a simple matter of simply uploading the files and having the server listen for a request.

# Credits
Steve Marshall, sole developer
* [Steve's Online Portfolio](http://fullstacksteve.com/)
* [Steve's LinkedIn Profile](https://www.linkedin.com/in/sonoa/)

# FriendFinder

In this application the User can answer few questions and find a compatible friend who has similar thought processes. This project is a full stack Node.js application, also deployed to Heroku. 

### [Live Demo](https://friendfinder-nodejs-apirouter.herokuapp.com/)

The package has the following files - server.js, package.json, app/data/friends.js, app/public/home.html, app/public/survey.html, app/routing/apiRoutes.js, app/routing/htmlRoutes.js, gitignore (to ignore node_modules folder from uploading to git repo). 

* The server.js file has the code for loading npm modules, which port to use, body-parser, listener, and the required routing. 
* The app/data/friends.js holds the objects array where I store all the friends' details. 
* The app/public/home.html has code to display the home page which has bootstrap jumbotron header, glyphicons, a button to go to survey page, and links to list all friends' details in json format and link to git repository.
* The app/public/survey.html has the code to display the survey page with fields name, link to photo, and 10 dropdown questions for the user to choose to find the best match, and a submit button. Also has link to Clear All which clears the user input to start fresh, another link to list all friends' details in json format, and another to git repository. And a modal to display the result (best match). I have used css, and js bootstrap components to format the page and components. Also I have added the Front-end Javascript code to handle the submit and clear all events.
  * The clear all event will reload the page which clears the input to start fresh.
  * The submit event first validates the input whether all fields are entered. If any field is missing data it'll display an alert asking the user to enter all fields; else it'll do a POST request to the express server sending the current URL and user entered data. Once the call is complete it'll display a Modal with the best match person's name and photo (if the photo is not available it'll display a placeholder image).
* The app/routing/htmlRoutes.js holds the code to handle the api GET requests on /survey and * for anything else other than survey including /home, and displays the corresponding html page.
* The app/routing/apiRoutes.js handles the GET request to list all friends in json format, and the POST request to find the best match. When the POST request is hit, the code will get the scores array for the current user and compares with each of the friend's scores in the existing pool, finds the difference (difference in each answer score and adds them all together), and stores the total difference and the friends array index in a temporary array. Once all the friend's scores are compared the temprary array will be sorted by the difference, and this will give me the best match at the 0th index. Then the POST request will return the index of 0 which has the best match back to the cli 

## Contributor:

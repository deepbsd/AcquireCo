# AcquireCo

This is an app prototype for use as a code challenge on a job I'm being considered for.

It's a React app that displays a list of target companies under consideration for acquisition, along with a contact for each, some
light financial data, and a status of the current deliberations regarding that company's acquisition.

The App also allows you to create, update and delete data for each company.

Because of time constraints, this app will not get a back end, so changes to data will only be made to the React DOM.  Each time
the app reloads, the data changes will be lost (ie, no persistence).

# Installation Instructions

1. clone the repo locally with `git clone git@github.com:deepbsd/acquireco.git`

2. Install dependencies with `npm install`

3. To run tests, type `npm test`

4. Start your server with `npm start`

5. Or you could use the prototype hosted on Netlify.

# Prototype

I have a working prototype (unstyled and with overly simple data schema) [here](https://acquireco.netlify.com)

# Testing

After installation, from the repo directory, type `npm test`  These are smoke tests only.

# Technologies Used

This app was created with Create-React-App and uses React, Redux, React
Router Dom, and Thunk. Jest and Enzyme are installed for testing.

# Requirements

The app must be able to

* View a list of targets
* Edit an existing target
* Create a new target
* Delete an existing target

Must use a modern JS framework--I use React.
Data does *not* need to be persisted.  
Examples of data to be captured:
* Status (eg, researching, pending approval, approved, declined)
* Company Info  
* Key Contacts
* Financial Performance

I just noticed I didn't provide the Company Info!  Maybe I can fix this
quickly...

# Status

Thursday: some CRUD operations mostly working but have some glitches...

Friday morning: I have the CRUD operations except Edit

Friday noonish: basic CRUD operations are working

4:50pm Friday:  I got the landing page sorta done and have a header working.  I guess I need to work on the schema and the individual
company view now and flesh that out...

9:50am Saturday: I am on a new branch new called updateSchema.  Since the schema, as I'm calling it, can affect all aspects of the app, 
I'm working on it on a different branch.  So far, the individual company listings are starting to use tables.  This should be okay 
for now.  I think I can get it done by Sunday COB...

12:38pm Saturday:  Looks like Add and Edit Company are working now.  Delete company still works.  All on the new Schema.

13:14pm Saturday:  There's a gnarly bug in the Edit method.  The correct 5yrEPSG info gets passed to the Reducer, but then by the time 
state gets back to the listcompanies component, the value doesn't appear.  Not sure if it's actually in local state at that point.  But
it gets added to the reducer properly, so the Edit method appears to be working I think.  Just not sure where the disconnect is.  It only
applies to the 5yrEPSG value.

15:05pm Saturday:  I took a long break and came back to the app.  I immediately saw the problem.  Simple naming error.  Just had to 
follow the error through the reducer back to the state object.  They had different names!  Of course the value wouldn't get updated!!!
All fixed now.

15:15pm Saturday: merged updateSchema into master branch.  Also, I re-watched the YouTube video about inSiten.  Turns out they are in the
business for mergers and acquisitions software.  I totally missed that when I first saw the video.  Wow.  I should research some more about
M/A software now!

9:48am Sunday: I started working on a module the ideas folder.  I don't know anything about Balance Sheets or Income Statements, but I
googled a teensy bit, and started seeing if I could compute the ratio values from an JS Object.  Haven't tried a strict JSON object yet, but
if I can do that, presumably I can slurp into the app an external Balance Sheet Object etc and start computing ratios from that.  That might 
be cool...

14:19pm Sunday:  Okay, I took some time off this morning.  But I wanted to come back and add a 'Info' section to the App.  That was clearly
mentioned in the instructions, and although I don't know precisely what it's for, I put one in that seems to make sense?

17:19pm Sunday:  I added some smoke tests...

---

##### Second Submission

_09:33am Friday Feb 22, 2019_:  Apparently there was a disconnect in Insiten's email server, and they didn't
get my questions of a week ago today.  I pressed on with my best judgments, but they graciously gave me some
more time to polish my app over the weekend.  I'll dive back into the app and see what I can do to make it
lovlier!  

_16:39pm Friday Feb 22, 2019_: Spent most of the day trying to get react-slidez plugin to work.  It's finally
showing up but I don't understand the styles that are built in.  The Slideshow component doesn't seem to be
respecting its parent components.  Not sure what's happening.

_10:13am Saturday Feb 23, 2019_: Spent most of yesterday trying to get a slideshow component to play nice on
the `animation-experiment` branch.  In the end, the component is working, but the component is not playing
nicely with other components inside of `Landing`.  I'm gonna need some help on this one.

_10:15am Saturday Feb 23, 2019_: I *did* manage to get formgroups working on Add and Edit using the fieldset
element.  What a lifesaver!  It's an easy element to work with, because of it's built-in `legend` element, and
because it's an HTML element, you can style it very easily.  Whew!  That was easy, which is a nice change of
pace.

_10:19 Saturday Feb 23, 2019_: Changed hover color on header from maroon to yellow.  I thought I already did
that?  Hmmm.  Must be on another branch...

_12:35pm Saturday Feb 23, 2019_: Got animation working on landing page, and worked out some css issues.  I
decided that the animation library I'm using *really* wants to take up the whole page, so I let it.  I haven't
yet found a downside to this decision.  Also, I've made some other styling changes, as far as adding more
padding to inputs and changing the font-family of inputs to monospace, so they're a little easier to edit and
read.


TODO:

* _done_: merged the `after-deadline` branch into the master branch.  I think I'll keep making changes to the
  `after-deadline` branch that could possibly break the app.  As of now, the Add/Edit form pages are
  responsive as they should have been from the start.
* Honestly, I should have thought about overall themes for the site.  I just went what worked the first day
  without thinking about overall UE/UI choices and decisions.  I should probably start with this after taking
  the ugly off the forms.
* Style the forms to look better.  They look pretty awful. Try using some form group styles.
* Get the Landing Page to look more professional.  Have to look for inspiration on the Web.
* These todos should keep me busy for today...  I'll be back after I think more about the overall choices for
  the app.
 

---

* Since Insiten is in the M&A software space, I should actually learn something about Balance Sheets and Income Statements, so I tried to
  find my copy of _The Intelligent Investor_ by Ben Graham, Warren Buffet's old mentor(?).  I couldn't find my copy.  I think I might
  have loaned it out to someone.  So I'll order another copy from Amazon.  Meanwhile, I did some googling and came up with a few ratios to
  think about.  I'm playing with some ideas in the the `ideas` folder.  Doing Math inside JS objects is, err, interesting...

* _Done_: Okay, I'm gonna have to address the schema issue and make Smallcompany show some more information, which is going to ripple through
  everything else, but that's okay.  It's gotta be done!

* _Done_: scrape some ugly off and spiff up the appearance a little.

* _Done_: I think I'll get a header up  and put an image on the Landing page next.

* _Done_: get state object in reducer passed down to listpage component (mapStateToProps).  Might have to review how to do that...

* _Done_: the delete company button throws an error.  I've got a syntax problem in there

* _Fixed_: Add company component tries to update state, but payload is undefined... working that problem now.

* _Done_: get the add and edit buttons working to fire the appropriate action creator and fire global state object gets updated

* _Fixed_: the actions and reducer were not working because the parameter had the wrong structure, so the state object didn't update

* _Do I need this? not now..._ I'm going to need to figure out that companyView.  Do we want one of those?  It's not in the assignment.  Probably don't have time for it.

* _Done for now_: At some point, I'll think about styling.  Right now, I just want to get it to work.  Maybe then I can scrape however much ugly off I have time for.

* _Done_: Oh yeah, get rid of them *.swp* files!  Update the .gitignore  Have to revisit this...

# After Deadline

It turns out that I want to continue to work on this little app.  There are plenty of things
I didn't get around too before the deadline for submission.  In fact, I don't even know if
the team are in the offices today on President's Day.  But I'm putting my work in a branch
called `after-deadline`.

This is mainly CSS improvements that I couldn't see very well while I was in "make it work"
mode.

TODO:

* _done_: make comments on Add and Edit into text areas
* _done_: make inputs 80% width of parent.  they shouldn't stay small on larger screens.
* I totally forgot to zero out user agent stylesheet on this app...  I may not do that on
  this app.  Probably I'll wait until after a decision is made to hire me or not...
* _done_: create min-width of 460px.  
* look at creating a breakpoint for larger screens where labels are on same line as inputs
* on larger views, the table headings should be less cryptic.  not sure how to do that.  Is
  that possible?  At least I can put a spelled out version of the acronym in breadcrumbs
  perhaps.

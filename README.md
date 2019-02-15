# AcquireCo

This is an app prototype for use as a code challenge on a job I'm being considered for.

It's a React app that displays a list of target companies under consideration for acquisition, along with a contact for each, some
light financial data, and a status of the current deliberations regarding that company's acquisition.

The App also allows you to create, update and delete data for each company.

Because of time constraints, this app will not get a back end, so changes to data will only be made to the React DOM.  Each time
the app reloads, the data changes will be lost (ie, no persistence).

# Prototype

I have a working prototype (unstyled and with overly simple data schema) [here](https://acquireco.netlify.com)

# Testing

Tests were not mentioned in the assignment, so I'm using my time for getting the app working.  I can add some smoke tests later...

# Status

I have the CRUD operations working.  Schema is extremely simple.  Not sure how complex to make it in the limited time.

4:50pm Friday:  I got the landing page sorta done and have a header working.  I guess I need to work on the schema and the individual
company view now and flesh that out...

TODO:

* Okay, I'm gonna have to address the schema issue and make Smallcompany show some more information, which is going to ripple through
  everything else, but that's okay.  It's gotta be done!

* _Done_: scrape some ugly off and spiff up the appearance a little.

* _Done_: I think I'll get a header up  and put an image on the Landing page next.

* _Done_: get state object in reducer passed down to listpage component (mapStateToProps).  Might have to review how to do that...

* _Done_: the delete company button throws an error.  I've got a syntax problem in there

* _Fixed_: Add company component tries to update state, but payload is undefined... working that problem now.

* _Done_: get the add and edit buttons working to fire the appropriate action creator and fire global state object gets updated

* _Fixed_: the actions and reducer were not working because the parameter had the wrong structure, so the state object didn't update

* _Do I need this?__ I'm going to need to figure out that companyView.  Do we want one of those?  It's not in the assignment.  Probably don't have time for it.

* At some point, I'll think about styling.  Right now, I just want to get it to work.  Maybe then I can scrape however much ugly off I have time for.

* _Done_: Oh yeah, get rid of them *.swp* files!  Update the .gitignore  Have to revisit this...

# AcquireCo

This is an app prototype for use as a code challenge on a job I'm being considered for.

It's a React app that displays a list of target companies under consideration for acquisition, along with a contact for each, some
light financial data, and a status of the current deliberations regarding that company's acquisition.

The App also allows you to create, update and delete data for each company.

Because of time constraints, this app will not get a back end, so changes to data will only be made to the React DOM.  Each time
the app reloads, the data changes will be lost (ie, no persistence).

# Status

Okay, I need to start thinking about getting down to work, so where am I?

TODO:

* _Done_: get state object in reducer passed down to listpage component (mapStateToProps).  Might have to review how to do that...

* _Done_: the delete company button throws an error.  I've got a syntax problem in there

* Add company component tries to update state, but payload is undefined... working that problem now.

* get the add and edit buttons working to fire the appropriate action creator and fire global state object gets updated

* I'm going to need to figure out that companyView or Largecompany component.  What do I want to see on that?  Is that where I want to do the updateComponent
  method?

* At some point, I'll think about styling.  Right now, I just want to get it to work.  Maybe then I can scrape however much ugly off I have time for.

* _Done_: Oh yeah, get rid of them *.swp* files!  Update the .gitignore

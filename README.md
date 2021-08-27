# Workflows
* Pick an issue and assign yourself to it
* Create a branch
* After finishing your work, create a Pull Request
* Assign at least one reviewer
* Developers need to push all the work into the Development branch.
* Afterwards, they will be pushed to the Production branch weekly.

# Using Git

## Branches

* There are two main Branches - 
> * Development (Default)
> * Production
* You need to create a branch for every issue.
* Don’t push your work directly to the dev branch.

## Issue Types

* There are two issue types. - 
> * Features 
> * Bugs
* Branch naming convention
>`<issue type>/<github username of the assigne>/<issue number>`

## PR Template

* Before creating a pull request, do dev testing - Assume that you are doing coding with connecting API s.
* Name
>`<issuetype>: <Issue number>`

* If your PR is for fixing a bug, you have to mention the root cause.
* If your PR is for a feature, the user story needs to be mentioned.
* Mention the changes you made in your implementation.
* And mention all the Impact areas after you push your work.

**Example :**

* Fix: RSVP-1

* Closes RSVP-1 (link the kanban board issue)

* Root cause
  >User sign up does not work

* What did you do
  >Fixed the user creation API

* Impact areas
  >User signup page

(You can attach screenshots of the working solution as well)

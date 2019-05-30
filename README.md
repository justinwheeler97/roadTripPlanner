# Road Trip Planner

MEAN stack website that takes user's MPG and maps the cheapest gas stations at the appropriate distances to maximaze time and money. This will use Google Maps API and will return a link to a Google Maps, Apple Maps, or Waze route.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* mongodb - [Download page](https://www.mongodb.com/download-center/community) .  

### Installing

```
npm install
npm start (for development)
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

## Branching Model

We will use the branching model described by [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)

Below is a summary of the main important ponts of this model for quick reference. For more details see [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) article. 

We will also follow the versioning system major.minor.path as specified by [semantic versioning](https://semver.org/)

### Main Branches
- **master:** Main branch where the source code of HEAD always reflects a production-ready state
- **dev:** Main branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release. When the source code in the develop branch reaches a stable point and is ready to be released, all of the changes should be merged back into master somehow and then tagged with a release number

### Suporting branches

**Feature branches**

Feature branches (or sometimes called topic branches) are used to develop new features for the upcoming or a distant future release. 

    - May branch off from: dev
    - Must merge back into: dev
    - Branch naming convention: must follow the pattern 'feat-nameOfFeatureBranch'. Can be anything except master, dev, release-*, or hotfix-*
   
**Release branches**

Release branches support preparation of a new production release. They allow for last-minute dotting of i’s and crossing t’s. Furthermore, they allow for minor bug fixes and preparing meta-data for a release (version number, build dates, etc.)

    - May branch off from: dev
    - Must merge back into: dev and master
    - Branch naming convention: must follow the pattern 'release-major.minor.patch'. 
    
**Hotfix branches**

Hotfix branches are very much like release branches in that they are also meant to prepare for a new production release, albeit unplanned. They arise from the necessity to act immediately upon an undesired state of a live production version. When a critical bug in a production version must be resolved immediately, a hotfix branch may be branched off from the corresponding tag on the master branch that marks the production version.
  
    - May branch off from: dev
    - Must merge back into: dev and master
    - Branch naming convention: must follow the pattern 'hotfix-major.minor.patch'. 
    
 When doing a merge alwayse yes the --no-ff flag. This flag causes the merge to always create a new commit object, even if the merge could be performed with a fast-forward. This avoids losing information about the historical existence of a feature branch and groups together all commits that together added the feature: 
   
   Example: 
  
      git checkout dev //switched to branch 'develop'
      git merge --no-ff feat-myFeature
        Updating ea1b82a..05e9557 (Summary of changes)
      git branch -d myfeature
        Deleted branch myFeature (was 05e9557) 
      git push origin dev
    
 You can also set `--no-ff` as the defatult behavior of the `merge` command by running the git command `git config merge.ff false`
 
**Other Types branches and Naming Convention** 

For anything work that does not fall under the branch categories specified above, use a brach naming that follows the categries used for the different commit types as shwon in the section below. The general naming pattern would be: 
    
    commitType-nameOfBranch
    
 Examples:
 
       //Name of a branch where the work done will be related to performance
       perf-improveNetworkLatency 

       //Name of a branch where work on formatting is done
       style-formatUsingTabs

## Commit Message Format

The commit message format will be as follows:

      commitType: Short (less then 50 chars) descripton of changes [#IssueNumber]

      Body with more detailed explanation

      If this commit resolves an issue, state it here in the footer for example:

      Closes [#IssueNumber]
      
Where `commitType` will be replaced by on the of the following words depening on the kind of work related to that commit:
 - **Feat:** A new feature  
 - **Fix:** A bug fix
 - **Docs:** Documentation only changes
 - **Style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 - **Refactor:** A code change that neither fixes a bug nor adds a feature
 - **Perf:** A code change that improves performance
 - **Test:** Adding missing or correcting existing tests
 - **Chore:** Changes to the build process or auxiliary tools and libraries such as documentation generation
 
and `IssueNumber` is replaced by the issue on github that relates with the working being done on the commit. 

To make it easier, a commit message template (msg_template.txt) has been added to the root of this repo that can be set to be the default template that shows on your default editor when runnning the command `git commit`. To make the `msg_template.txt` be the source of your default commit message wording, go to your git repo's root directory and run:

      git config commit.template msg_template.txt

This guideline was taken from the Angular.js [git commit rules](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Authors

* **Justin Wheeler** - *Concept and Devlopment* - [JustinWheeler97](https://github.com/justinwheeler97)

See also the list of [contributors](https://github.com/justinwheeler97/roadTripPlanner/graphs/contributors) who participated in this project.

## Acknowledgments

* Many roadtrips trying to plan where to stop for gas and gambling if I can make it to the next city over.

# framework-heavy
A little heavy front end prototype framework for my projects

# Note:
Change the app name
1. app/config.ts (appName)
2. config/env/development.js (appName)
3. bower.json (name)
4. package.json (name, repository.url)
5. README.md

How to Set Up:

1. git clone https://github.com/one-pieces/framework-heavy.git
2. cd framework-heavy
3. npm install
4. bower install
5. grunt update
6. grunt develop
7. 浏览器输入localhost:5000/framework

This project has used MEAN(Mongo, Express, AngularJS, NodeJS) framework. The following is the file structure:

1. app -- The front end code folders
2. config -- The env configuration files
3. server -- The back end code folders
4. gruntfile.js -- The grunt configuration file (The JavaScript Task Runner, http://gruntjs.com/)
5. bower.json -- A mainfest file which Bower keeps track of the packages in (Bower is a package manager for the web, http://bower.io/)
6. package.json -- A mainfest file of npm (npm is a package manager for NodeJS, https://www.npmjs.com/)
7. .bowerrc -- The Bower configuration file
8. .gitigonre -- A mainfest file which the files git will igonre
9. .jshintrc -- The configuration file of JSHint
10. .csslintrc -- The configuration file of CSSLintrc
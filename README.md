#### psgithubintgrnodeapptravis
[![Build Status](https://travis-ci.org/rengokantai/psgithubintgrnodeapptravis.svg?branch=master)](https://travis-ci.org/rengokantai/psgithubintgrnodeapptravis)  
.travis.yml
```
before_script:
  - npm install;npm install -g gulp
script:gulp test
language: node_js
env:
  - PORT=7777
node_js:
  - "5.1"
  - "4"
  - "0.12"
```

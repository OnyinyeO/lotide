Log into npm from the command line.

In our Vagrant machine, run the npm login command from any directory. Follow the prompts to login successfully.

Having A README.md File
Before we publish our package, there's some best practices housekeeping that we need to follow first.

We need a README.md file. The readme file explains to other developers what this library is for, how to install it, and how to use it.

Instruction
Create a README.md file within the root of your project (lotide) folder.

Instruction
Paste the following template into README.md.

README Template
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Onyinyeo/lotide`

**Require it:**

`const _ = require('@Onyinyeolotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
"version" - "1.0.0"

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
# gorun
Template for start project GO


#Golang concepts from an OOP point of view

##Introduction

###Objectives of this document

* Ease golang learning by associating golang-specific *concepts* with previously known concepts in the OOP field.

* ***Promote golang usage*** by easing language understanding for people coming from a heavy OOP background

###Why github?
This is a discovery process, I'm writing this document to help myself understand golang and maybe help others.
This document is published in github. ***Pull requests are welcomed.***. There are a lot of things to improve, but please, please do not start a pull request with [*"Technically...*"](http://xkcd.com/1475)

##Golang Concepts
Golang introduces words with a new golang-specific meaning, such as *struct* and *interface*.
This is not bad, but sometimes it is nice to have a "translation" available to be able to understand golang-concepts by relating them to previously known concepts.

This is important in order to *understand* concepts of a new language.
If you can *translate* a golang-word to previously known concepts,
the learning is by far easier.

##Cheat Sheet

|Golang|Classic OOP
|----|-----|
|*struct*|class  with fields, only non-virtual methods
|*interface*|class without fields, only virtual methods
|*embedding*|multiple inheritance AND composition
|*receiver*|implicit *this* parameter

##Golang-struct is a class (non-virtual)

A ***golang-struct*** is a ***class*** with ***fields*** where all the methods are ***non-virtual***. e.g.:

```go
type Rectangle struct {
	Name          string
	Width, Height float64
}

func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}
```

This can be read as (pseudo code):

```G
```

###Constructor

- There is a *zero-value* defined for each core-type, so if you do not provide values at instantiation, all fields will have the zero-value

- No specific in-class constructors. There is a *generic constructor* for any class instance, receiving a generic literal in a JSON-like format and using reflection to create instances of any class.

pseudo-code for the generic constructor:

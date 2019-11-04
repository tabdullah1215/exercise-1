#Simple Design System:

This exercise demonstrates the use of the following tools, concepts to create
a simple design system that promotes not only usability of components but 
also re-usability of marketing sits and portals:

###Styled Components
Styled components are used in this exercise to leverage the features that this 
styling tool offers such as:
`encapsulation of design, logic and UI into one module`, `use of css with the added power of dynamic styling`,
`property functions and conditional logic`
These components are completely content-agnostic, and are decoupled from the content completely.  They receive their
content strictly by pass through properties.

###Slide Paradigm
The slide paradigm was implemented in this exercise to leverage the scrolling navigation feature
and present each view of the site in an isolated focused way, hence the term `slide`.  Therefore,
some of the spacing and layout were slightly tweaked to give all slides a uniform height.  All the views
fit the view window without the need to scroll, as would be expected of a slide.

###SlideViewer and DynamicSlide
The `SlideViewer` and `DynamicSlide` components are the heart of this web app.  They are the only `smart` components 
of this project.  The SlideViewer `scaffolds` the content from the content file, and passes it through to the Slide component, 
which is a wrapper that gets `loaded` with the required design component. 
The DynamicSlide generator `loads` the needed design component on the fly as dictated by the content file.

###Content Driven Design & Content Mapping
This exercise implements a `top-down` design, where the flow starts from the `top` with the content file
and scaffolds the content `down` into the components.
The content file is NOT just a list of hard-coded content that gets plugged into the render functions of the components.
It is also a configuration file.  The shape and structure of the content objects dictate the size, breadth, depth and 
layout of the web site.
 
###PropTypes
Implementing proptypes was essential as a basic requirement for a robust content mapping system.
Proptypes will offer the first layer of validation to indicate that the content will properly scaffold out into the components.

###Data Definition Document (to-do)
In theory, this content-driven application would be deployed along with a data definition document.
This document would define the shape and props of the data objects which would enable a non-technical 
`superuser` to author content files and swap them out.  Effectively speaking this would enable
users to launch new sites with minimal intervention from developers and designers.

###Reusable Websites
The ultimate objective would be to create robust, intelligent design components, along with smart 
scalable content mapping in a way that would enable re-usability of web sites not just components.



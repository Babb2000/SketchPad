## Created a sketchpad website 

TakeAways:
---
1. The first problem I had when going about starting this project was what to start first. Recalling a pervious article I read on web-dev, I remembered that a good 
way to start a project is first to create a design doc. Using google drive I broke down the project into smaller tasks that I could focus on more intently. One of them
being how to dynamically create a grid using the CSS Grid Layout. I first thought flex-box would be sufficient to create a grid, until I realized that flex-box only
works when dealing with layouts of one dimension. So I chose the CSS grid layout and researched how to use `gridTemplateColumns` and `gridTemplateRows`
2. After having a decent grasp of the CSS grid layout I began thinking of ways to create multiple div's inside a container div. Of course I went ahead and
hard coded the result into html to wrap my mind around how the grid should look. Then I began to use javascript DOM manipulation to retrieve elements and the `document
.createElement('div')` to dynamically add div's into the container div. 
3. When looping through the number of columns I wanted to add to the container I realized that I also had to nest another for-loop within the current loop to add the
number of rows to the container. This layout and nesting of loops being interdependent of eachother reminded me of 2D-arrays I worked with in C++, ex) `int two_d[10][20]`.
Not sure if javascript has 2D arrays(didn't learn at time of project), but if they do I will make sure to implement them.
4.The final functionality that made me spend a little more time on was adding the "hover" effect to the grid layout. I chose to do this by using a javascript event handler
which was asigned to an anonymous function. I'm still not to sure why the return value of the onclick function has to be set to false, still have to research that more.

---
Check it Out Live Here: :point_right: https://babb2000.github.io/SketchPad/?rows=64&columns=64

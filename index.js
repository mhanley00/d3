// d3.select();
// //selects the first element in the DOM inside of the parens
// d3.selectAll();
// //selects all the elements of that type in the DOM

// d3.select('h1').style('color', 'red').attr('class', 'heading').text('Updated h1 tag');
// //selecting the first h1 item, changing color to red, adding class of heading, and changing the actual text to 'updated h1 tag' even though in the html it says  <h1>My First D3 Website</h1>

// d3.select('body').append('p').text('Baby first para');
// d3.select('body').append('p').text('Baby second para');
// d3.select('body').append('p').text('Baby third para');
// //adding p elements that say what's inside of text to the dom

// d3.selectAll('p').style('color','blue');


// //data loading and binding

// var dataset = [1,2,3,4,5];

// d3.select('body').selectAll('p').data(dataset).enter().append('p')
// //.text('D3 is my cool new skill');
// .text(function(d){return d;});
// //instead this returns the dataset, iterates over it and displays to DOM

//bar graph

var dataset2 = [80,100,56,120,40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = svgWidth/dataset2.length;
var svg = d3.select('svg').attr("width", svgWidth).attr("height", svgHeight);

var barChart = svg.selectAll("rect").data(dataset2).enter().append("rect").attr("y", function(d){
    return svgHeight - d;
}).attr("width", barWidth - barPadding).attr("class", "bar").attr("transform", function (d, i){
    var translate = [barWidth * i, 0];
    return "translate("+translate+")";
});

var text = svg.selectAll("text").data(dataset2).enter().append("text").text(function(d){
    return d
}).attr("y", function(d, i){
    return svgHeight - d - 2;
}).attr("x", function(d,i){
    return barWidth * i;
}).attr("fill", "#A64C38");
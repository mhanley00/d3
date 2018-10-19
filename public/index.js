//adds my lovely title to the DOM
d3.select('h1').style('color', 'blue')
.attr('class', 'heading').text('My First D3 Website');

// var dataset;
// var parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");
// function meters2Miles(m) {
//     return m*0.000621371192;
// }

// d3.csv("activities.csv", function(error, data) {
//     if (error) {  
//         console.log(error); //Log error if something went wrong
//     } else { //If no error, the file loaded correctly. Yay! console.log(data); //Log the data.
//                 //Include other code to execute after successful file load here
//                 dataset = data;
//                 console.log(data);
//                 console.log(data[700].type);
//                 for (let i = 0; i < data.length; i++){
//                     if (data[i].type === "Run"){
//                         // console.log(data[i].date);
//                         let runDateTime = parseTime(data[i].date);
//                         console.log(`runDateTime: ${runDateTime}`);
//                         // console.log(`parseTime/runDateTime: ${parseTime(runDateTime)}`);
//                         let runDistance = meters2Miles(data[i].distance);
//                         console.log(runDistance);
//                         // console.log(data[i].distance);
//                         // moment().startOf('day').seconds(T2secs).format('H:mm:ss')
//                         let runTime = data[i].elapsed_time;
//                         console.log(moment().startOf('day').seconds(runTime).format('H:mm:ss'));
//                         // console.log(data[i].elapsed_time);
//                     }
//                 }
//                 // generateVis();
//                 // hideLoadingMsg();
//             }
//   });    

// //Width and height
// var w = 500;
// var h = 300;
// var padding = 40;

// var dataset, xScale, yScale;  //Empty, for now

// //For converting strings to Dates, see
// var parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");

// //For converting Dates to strings
// var formatTime = d3.timeFormat("%b %e");
// //Function for converting CSV values from strings to Dates and numbers
// var rowConverter = function(d) {
//     // console.log("ROW 53: "+d);
//     if (d.type === "Run"){
//         return {
//             Date: parseTime(d.date),
//             Distance: parseInt(d.distance)
//         };}
//     }
//     // console.log(rowConverter());
//     //Load in the data
// d3.csv("activities.csv", rowConverter, function(error, data) {
//     // if (error) {  
//     //     console.log(error); //Log error if something went wrong
//     // } else {
//         //Copy data into global dataset
//         dataset = data;
//         // console.log("ROW 63: "+d.date);
//         // console.log("ROW 64: "+dataset.date);
//     //Create scale functions
//     xScale = d3.scaleTime()
//                    .domain([
//                         d3.min(dataset, function(d) { return d.Date; }),
//                         d3.max(dataset, function(d) { return d.Date; })
//                     ])
//                    .range([padding, w - padding]);
//     yScale = d3.scaleLinear()
//                    .domain([
//                         d3.min(dataset, function(d) { return d.Distance; }),
//                         d3.max(dataset, function(d) { return d.Distance; })
//                     ])
//                    .range([h - padding, padding]);

//     //Create SVG element
//     var svg = d3.select("body")
//                 .append("svg")
//                 .attr("width", w)
//                 .attr("height", h);
//     //Generate date labels first, so they are in back
//      svg.selectAll("text")
//         .data(dataset)
//         .enter()
//         .append("text")
//         .text(function(d) {
//                 return formatTime(d.Date);
//         })
//         .attr("x", function(d) {
//                 return xScale(d.Date) + 4;
//         })
//         .attr("y", function(d) {
//                 return yScale(d.Distance) + 4;
//         })
//         .attr("font-family", "sans-serif")
//         .attr("font-size", "11px")
//         .attr("fill", "#bbb");
//     //Generate circles last, so they appear in front
//     svg.selectAll("circle")
//        .data(dataset)
//        .enter()
//        .append("circle")
//        .attr("cx", function(d) {
//                return xScale(d.Date);
//        })
//        .attr("cy", function(d) {
//                return yScale(d.Distance);
//        })
//        .attr("r", 2);
// });

var dataset2 = [[92], [72], [41], [102], [10], [201]];

var svgWidth = 500, svgHeight = 250, barPadding = 5;
var barWidth = (svgWidth / dataset2.length);


var svg2 = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg2.selectAll("rect")
    .data(dataset2)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });






//Data aka my miles in my peak week of training
// var dataset = [[2, 9.2], [3, 7.2], [4, 4.1], [5,10.2], [6, 20.1]];

var dataset = [[20, 92], [30, 72], [40, 41], [50, 102], [60, 10], [70, 201]];
//Width and height
var w = 1000;
var h = 350;

// var dataset = [
            //     [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
            //     [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
            //   ];

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", function(d) {
           return d[0];
   })
   .attr("cy", function(d) {
           return d[1];
   })
   .attr("r", function(d) {
           return Math.sqrt(h - d[1]);
   });




// bar graph example from tutorial, not scale
// var svgWidth = 500, svgHeight = 300, barPadding = 5;
// var barWidth = (svgWidth / dataset.length);


// var svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);
    
// var barChart = svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("y", function(d) {
//          return svgHeight - d 
//     })
//     .attr("height", function(d) { 
//         return d; 
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("transform", function (d, i) {
//         var translate = [barWidth * i, 0]; 
//         return "translate("+ translate +")";
//     });

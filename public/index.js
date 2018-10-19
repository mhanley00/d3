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

//Width and height
var w = 500;
var h = 300;
var padding = 40;

var dataset, xScale, yScale;  //Empty, for now

//For converting strings to Dates, see
var parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");

//For converting Dates to strings
var formatTime = d3.timeFormat("%b %e");
//Function for converting CSV values from strings to Dates and numbers
var rowConverter = function(d) {
    // console.log("ROW 53: "+d);
    if (d.type === "Run"){
        return {
            Date: parseTime(d.date),
            Distance: parseInt(d.distance)
        };}
    }
    // console.log(rowConverter());
    //Load in the data
d3.csv("activities.csv", rowConverter, function(error, data) {
    // if (error) {  
    //     console.log(error); //Log error if something went wrong
    // } else {
        //Copy data into global dataset
        dataset = data;
        // console.log("ROW 63: "+d.date);
        // console.log("ROW 64: "+dataset.date);
    //Create scale functions
    xScale = d3.scaleTime()
                   .domain([
                        d3.min(dataset, function(d) { console.log("ROW 73: "+d.Date); return d.Date; }),
                        d3.max(dataset, function(d) { return d.Date; })
                    ])
                   .range([padding, w - padding]);
    yScale = d3.scaleLinear()
                   .domain([
                        d3.min(dataset, function(d) { return d.Distance; }),
                        d3.max(dataset, function(d) { return d.Distance; })
                    ])
                   .range([h - padding, padding]);

    //Create SVG element
    var svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);
    //Generate date labels first, so they are in back
     svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
                return formatTime(d.Date);
        })
        .attr("x", function(d) {
                return xScale(d.Date) + 4;
        })
        .attr("y", function(d) {
                return yScale(d.Distance) + 4;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "#bbb");
    //Generate circles last, so they appear in front
    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", function(d) {
               return xScale(d.Date);
       })
       .attr("cy", function(d) {
               return yScale(d.Distance);
       })
       .attr("r", 2);
});












// // d3.select('body').append('p').text('Baby first para');
// // d3.select('body').append('p').text('Baby second para');
// // d3.select('body').append('p').text('Baby third para');
// // //adding p elements that say what's inside of text to the dom

// // d3.selectAll('p').style('color','blue');


// // //data loading and binding

// // var dataset = [1,2,3,4,5];

// // d3.select('body').selectAll('p').data(dataset).enter().append('p')
// // //.text('D3 is my cool new skill');
// // .text(function(d){return d;});
// // //instead this returns the dataset, iterates over it and displays to DOM

// //bar graph

// // var dataset2 = [80, 100, 56, 120, 40, 120, 160];
// // const dataset2 = [8, 10, 5, 12, 4, 12, 16];

// // const svgWidth = 500, svgHeight = 300, barPadding = 5;
// // const barWidth = (svgWidth / dataset2.length);

// // const svg = d3.select('svg')
// // .attr("width", svgWidth)
// // .attr("height", svgHeight);


// // const yScale = d3.scaleLinear()
// // .domain([0, d3.max(dataset2)])
// // .range([0, svgHeight]);


// // const barChart = svg.selectAll("rect")
// // .data(dataset2)
// // .enter()
// // .append("rect")
// // .attr("y", function(d){
// //     return svgHeight - yScale(d)
// // })
// // .attr("height", function(d){
// //     return yScale(d);
// // })
// // .attr("width", barWidth - barPadding)
// // // .attr("class", "bar")
// // .attr("transform", function (d, i){
// //     var translate = [barWidth * i, 0];
// //     return "translate("+translate+")";
// //     //translate lets us move the bars over (obvi otherwise you couldn't see them)
// // });

// // const text = svg.selectAll("text")
// // .data(dataset2)
// // .enter()
// // .append("text")
// // .text(function(d){
// //     return d
// // }).attr("y", function(d, i){
// //     return svgHeight - d - 2;
// // }).attr("x", function(d,i){
// //     return barWidth * i;
// // }).attr("fill", "#A64C38");

const margin = 50;
const width = 300 - 2 * margin;
const height = 300 - 2 * margin;
const data = await d3.csv('https://flunky.github.io/cars2017.csv');
const svg = d3.select("svg")
  .attr("width", 200)
   .attr("height", 200);

const xscale10 = d3.scaleLog().domain([10,150]).range([0, 200]);
const yscale10 = d3.scaleLog().domain([10,150]).range([200,0]);

xAxis = d3.axisBottom(xscale10)
      .tickValues([10,20,50,100])
      .tickFormat(d3.format("~s"));

yAxis = d3.axisLeft(yscale10)
      .tickValues([10,20,50,100])
      .tickFormat(d3.format("~s"));

const chart = svg.append("g")
  .attr("transform", "translate(" + margin + "," + margin + ")");
 
chart.selectAll()
    .data(data)
    .enter()
    .append("circle")
  .attr("cx", function(d, i) {return xscale10(d.AverageCityMPG);})
  .attr("cy", function(d, i) { return yscale10(d.AverageHighwayMPG);})
  .attr("r", function(d) {return (parseInt(d.EngineCylinders)+2);});

chart.append('g')
    .attr("transform", "translate(" + margin + "," + margin + ")")
    .call((yAxis));

chart.append('g')
    .attr("transform", "translate(" + margin + "," + (margin+height) + ")")
    .call((xAxis));

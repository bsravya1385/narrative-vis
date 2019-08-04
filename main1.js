async function init() {
const margin = 50;
const width = 800 - 2 * margin;
const height = 800 - 2 * margin;
const data = await d3.csv('World_Indicators.csv');
const svg = d3.select("svg")
  .attr("width", 800)
   .attr("height", 800);

const xscale10 = d3.scaleLog().domain([10,150]).range([0, 800]);
const yscale10 = d3.scaleLog().domain([10,150]).range([800,0]);

xAxis = d3.axisBottom(xscale10);

yAxis = d3.axisLeft(yscale10);

const chart = svg.append("g")
  .attr("transform", "translate(" + margin + "," + margin + ")");
 
chart.selectAll()
    .data(data)
    .enter()
    .append("circle")
  .attr("cx", function(d, i) {return xscale10(d.Infant Mortality Rate);})
  .attr("cy", function(d, i) { return yscale10(d.Birth Rate);})
  .attr("r", function(d) {return (2);});

chart.append('g')
    .attr("transform", "translate(" + margin + "," + margin + ")")
    .call((yAxis));

chart.append('g')
    .attr("transform", "translate(" + margin + "," + (margin+height) + ")")
    .call((xAxis));
}

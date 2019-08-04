async function init() {
const margin = 50;
const width = 800 - 2 * margin;
const height =800 - 2 * margin;
const data = await d3.csv('https://bsravya1385.github.io/narrative-vis/World_Indicators.csv');
const svg = d3.select("svg")
  .attr("width", 500)
   .attr("height", 800);

const xscale10 = d3.scaleLog().range([0, 500]);
const yscale10 = d3.scaleLog().range([500,0]);

xAxis = d3.axisBottom(xscale10);

yAxis = d3.axisLeft(yscale10);

const chart = svg.append("g")
  .attr("transform", "translate(" + margin + "," + margin + ")");
 
chart.selectAll()
    .data(data)
    .enter()
    .append("circle")
  .attr("cx", function(d, i) {return xscale10(d.BirthRate);})
  .attr("cy", function(d, i) { return yscale10(d.InfantMortalityRate);})
  .attr("r", function(d) {return (2);});

chart.append('g')
    .attr("transform", "translate(" + margin + "," + margin + ")")
    .call((yAxis));

chart.append('g')
    .attr("transform", "translate(" + margin + "," + (margin+height) + ")")
    .call((xAxis));
}

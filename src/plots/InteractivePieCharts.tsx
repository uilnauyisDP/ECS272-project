import * as d3 from "d3";
import { useD3 } from "./useD3";
import { CountryData, getDataAsync } from "../shared/data";

const width = 450;
const height = 450;
const margin = 40;

export const InteractivePieCharts = (data: CountryData[]) => {
  // Dictionary to store counts
  const popByType: {} = {};

  // Count objects by type
  //data.forEach((thisData) => {
  //  const type = obj.type;
  //  countByType[type] = (countByType[type] || 0) + 1;
  //});

  const thisRef = useD3((svg: any) => {
    // set the dimensions and margins of the graph

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // create 2 data_set
    const data1 = { a: 9, b: 20, c: 30, d: 8, e: 12 };
    const data2 = { a: 6, b: 16, c: 20, d: 14, e: 19, f: 12 };

    // set the color scale
    const color = d3
      .scaleOrdinal()
      .domain(["a", "b", "c", "d", "e", "f"])
      .range(d3.schemeDark2);

    // A function that create / update the plot for a given variable:
    function update(data) {
      // Compute the position of each group on the pie:
      const pie = d3
        .pie()
        .value(function (d) {
          return d[1];
        })
        .sort(function (a, b) {
          return d3.ascending(a.key, b.key);
        }); // This make sure that group order remains the same in the pie chart
      const data_ready = pie(Object.entries(data));

      // map to data
      const u = g.selectAll("path").data(data_ready);

      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      u.join("path")
        .transition()
        .duration(1000)
        .attr("d", d3.arc().innerRadius(0).outerRadius(radius))
        .attr("fill", function (d) {
          return color(d.data[0]);
        })
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 1);
    }

    // Initialize the plot with the first dataset
    update(data1);
  }, []);

  return (
    <div>
      <button onclick="update(data1)">Data 1</button>
      <button onclick="update(data2)">Data 2</button>
      <svg ref={thisRef} width={width} height={height}></svg>
    </div>
  );
};

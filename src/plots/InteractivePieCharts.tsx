import * as d3 from "d3";
import { useD3 } from "./useD3";
import {
  CountryData,
  DevLevelAggregationType,
  DevLvl,
  getDataAsync,
} from "../shared/data";
import { useState } from "react";

const width = 450;
const height = 450;
const margin = 40;

interface InteractivePieChartsProps {
  data: CountryData[];
}

export const InteractivePieCharts = (props: InteractivePieChartsProps) => {
  const data = props.data;

  let sumEst = 0;
  let sumT = 0;

  const [showPop, setShowPop] = useState(true);

  // Dictionary to store counts
  const popByType: DevLevelAggregationType = {
    DevelopedCountry: 0,
    LeastDevelopedCountry: 0,
    DevelopingCountry: 0,
  };

  const gdpByType: DevLevelAggregationType = {
    DevelopedCountry: 0,
    LeastDevelopedCountry: 0,
    DevelopingCountry: 0,
  };

  const countByType: DevLevelAggregationType = {
    DevelopedCountry: 0,
    LeastDevelopedCountry: 0,
    DevelopingCountry: 0,
  };

  //Count objects by type
  data.forEach((thisData) => {
    sumT += thisData.Population ? thisData.Population : 0;

    const devLvl = thisData.DevelopmentLevel;
    if (devLvl == DevLvl.NoData) {
      return;
    }

    if (thisData.Population === null || thisData.GdpPerCapita === null) {
      return;
    }

    switch (devLvl) {
      case DevLvl.Developed:
        popByType.DevelopedCountry += thisData.Population;
        gdpByType.DevelopedCountry +=
          thisData.GdpPerCapita * thisData.Population;
        countByType.DevelopedCountry += 1;
        break;
      case DevLvl.Developing:
        popByType.DevelopingCountry += thisData.Population;
        gdpByType.DevelopingCountry +=
          thisData.GdpPerCapita * thisData.Population;
        countByType.DevelopingCountry += 1;
        break;
      case DevLvl.LeastDeveloped:
        popByType.LeastDevelopedCountry += thisData.Population;
        gdpByType.LeastDevelopedCountry +=
          thisData.GdpPerCapita * thisData.Population;
        countByType.LeastDevelopedCountry += 1;
        break;
      default:
        break;
    }
    sumEst += thisData.Population;
  });

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
      .domain(["developed", "developing", "leastDeveloped"])
      .range(["blue",  "red", "green",]);

    // A function that create / update the plot for a given variable:
    function update() {
      // Compute the position of each group on the pie:
      let data;
      if (showPop) {
        data = popByType
      } else {
        data = gdpByType
      }

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
    update();
  }, [showPop, ]);

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg ref={thisRef} width={width} height={height}></svg>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => setShowPop(true)}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Population
        </button>
        <button onClick={() => setShowPop(false)}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          GDP
        </button>
      </div>
    </div>
  );
};

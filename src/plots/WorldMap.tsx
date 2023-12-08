import * as React from "react";
import WorldMap from "react-svg-worldmap";
import { CountryData, countryCode } from "../shared/data";
import { ColorLegend, LegendItem } from "./legends";

interface MapProp {
  data: CountryData[];
  selectedAttr: string;
  color: string;
}

export function Map(props: MapProp) {
  let data = props.data;

  let ud: string[] = [];

  const colorMap = {};

  let plotData = data.map((d) => {
    if (!countryCode[d.Country]) ud.push(d.Country);
    return {
      country: countryCode[d.Country],
      value: d[props.selectedAttr as keyof CountryData],
    };
  });

  let maxVal = Math.max(...plotData.map((pt) => pt.value as number));

  // Usage
  const legendItems: LegendItem[] = [
    { color: props.color, label: `${(maxVal * 0.2).toFixed(2)}`, opacity: 0.2 },
    { color: props.color, label: `${(maxVal * 0.4).toFixed(2)}`, opacity: 0.4 },
    { color: props.color, label: `${(maxVal * 0.6).toFixed(2)}`, opacity: 0.6 },
    { color: props.color, label: `${(maxVal * 0.8).toFixed(2)}`, opacity: 0.8 },
  ];

  return (
    <div className="App">
      <ColorLegend legendItems={legendItems} />
      {/* Your other components or content here */}

      <WorldMap
        color={props.color}
        value-suffix="people"
        size="lg"
        data={plotData}
      />
    </div>
  );
}

import * as React from "react";
import WorldMap from "react-svg-worldmap";
import { CountryData, countryCode } from "../shared/data";

interface MapProp {
  data: CountryData[];
  selectedAttr: string
  color: string
}

export function Map(props: MapProp) {
  let data = props.data;

  let ud : string[] = [];

  const colorMap = {}

  let plotData = data.map((d) => {
    if (!countryCode[d.Country])
      ud.push(d.Country);
    return {
      country: countryCode[d.Country],
      value: d[props.selectedAttr as keyof CountryData]
    };
  });

  return (
    <div className="App">
      <WorldMap
        color={props.color}
        value-suffix="people"
        size="lg"
        data={plotData}
      />
    </div>
  );
}

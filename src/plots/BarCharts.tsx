import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { CountryData, DevLvl } from "../shared/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartsProps {
  data: CountryData[];
}

export function BarCharts(props: BarChartsProps) {
  const _data = props.data;

  const buildData = (cd: CountryData[], thisKey: string) => {
    const divisor = {
      developed: 0,
      least: 0,
      developing: 0,
    };

    const dividend = {
      developed: 0,
      least: 0,
      developing: 0,
    };

    cd.forEach((thisCd) => {
      if (!thisCd.Population || !thisCd[thisKey as keyof typeof thisCd]) {
        return;
      }

      if (thisCd.DevelopmentLevel == DevLvl.Developed) {
        divisor["developed"] +=
          (thisCd.Population as number) *
          (thisCd[thisKey as keyof typeof thisCd] as number);
        dividend["developed"] += thisCd.Population as number;
      } else if (thisCd.DevelopmentLevel == DevLvl.Developing) {
        divisor["developing"] +=
          (thisCd.Population as number) *
          (thisCd[thisKey as keyof typeof thisCd] as number);
        dividend["developing"] += thisCd.Population as number;
      } else if (thisCd.DevelopmentLevel == DevLvl.LeastDeveloped) {
        divisor["least"] +=
          (thisCd.Population as number) *
          (thisCd[thisKey as keyof typeof thisCd] as number);
        dividend["least"] += thisCd.Population as number;
      }
    });

    const dataComputed = {
      labels: ["Developed", "Developing", "Least Developed"],
      datasets: [
        {
          grouped: false,
          label: "animate",
          data: [
            ((divisor.developed as number) / dividend.developed) as number,
            ((divisor.developing as number) / dividend.developing) as number,
            ((divisor.least as number) / dividend.least) as number,
          ],
          borderColor: ["blue", "green", "red"],
          backgroundColor: ["blue", "green", "red"],
        },
      ],
    };

    return dataComputed;
  };

  const setOption = (title: string) => {
    return {
      indexAxis: "y" as const,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: "right" as const,
        },
        title: {
          display: true,
          text: title
        },
      },
    };
  };

  const val = buildData(_data, "InfantMortality");
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "40%", display: "inline-block" }}>
          <Bar options={setOption("Avg Infant Mortality Rate")} data={buildData(_data, "InfantMortality")} />
        </div>
        <div style={{ width: "40%", display: "inline-block" }}>
          <Bar options={setOption("Avg Literacy Rate")} data={buildData(_data, "LiteracyRate")} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "40%", display: "inline-block" }}>
          <Bar options={setOption("Avg Birth Rate")} data={buildData(_data, "Birthrate")} />
        </div>
        <div style={{ width: "40%", display: "inline-block" }}>
          <Bar options={setOption("Avg Death Rate")} data={buildData(_data, "Deathrate")} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "40%", display: "inline-block" }}>
          <Bar options={setOption("Avg Agriculture Percentage")} data={buildData(_data, "Agriculture")} />
        </div>
        <div style={{ width: "40%", display: "inline-block" }}>
          <Bar options={setOption("Avg Industry Percentage")} data={buildData(_data, "Industry")} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <div style={{ width: "40%", display: "inline-block" }}>
          <Bar options={setOption("Avg Service Percentage")} data={buildData(_data, "Service")} />
        </div>
      </div>
    </div>
  );
}

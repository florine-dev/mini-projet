import React, { useEffect } from "react";
import {
  createYieldCurveChart,
  LineSeries,
  ColorType,
} from "lightweight-charts";

function DiagrammeYieldCurve() {
  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: "#e2e8f0",
        background: {
          type: ColorType.Solid,
          color: "transparent",
        },
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      rightPriceScale: { visible: true },
      leftPriceScale: { visible: false },
      handleScroll: false,
      handleScale: false,
      yieldCurve: {
        baseResolution: 1,
        minimumTimeRange: 1,
        startTimeRange: 1,
      },
    };

    const container = document.getElementById("chart");
    if (!container) return;

    const chart = createYieldCurveChart(container, chartOptions);

    const lineSeries = chart.addSeries(LineSeries, {
      color: "#00ffae",
      lineWidth: 2,
    });

    const curveData = [
      { time: 1, value: 5.378 },
      { time: 2, value: 5.372 },
      { time: 3, value: 5.271 },
      { time: 6, value: 5.094 },
      { time: 12, value: 4.739 },
      { time: 24, value: 4.237 },
      { time: 36, value: 4.036 },
      { time: 60, value: 3.887 },
      { time: 84, value: 3.921 },
      { time: 120, value: 4.007 },
      { time: 240, value: 4.366 },
      { time: 360, value: 4.29 },
    ];

    lineSeries.setData(curveData);
    chart.timeScale().fitContent();

    return () => chart.remove();
  }, []);

  return <div id="chart" style={{ width: "50%", height: "300px" }} />;
}

export default DiagrammeYieldCurve;

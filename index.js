import Chart from "chart.js";
import * as lib from "./lib";

import { default as $ } from "./jq";
import * as data from "./Data.json";

var ctx = $("#myChart");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Custom Chart Title"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

ctx.on("click", function (evt) {
  var activePoints = myChart.getElementAtEvent(evt);
  console.log(activePoints);
  let task = data.tasks[activePoints[0]._index];
  lib.showDialog(task);
});

import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  LineSeries,
  ArgumentAxis,
  ValueAxis,
  Title,
  Legend,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import { EventTracker } from "@devexpress/dx-react-chart";

import { ValueScale, Stack } from "@devexpress/dx-react-chart";

const modifyRatingsDomain = (domain) => [domain[0], 100];
const modifyAverageDomain = () => [0, 5];

const data1 = [
  {
    day: "10/12/2020",
    Outstanding: 10,
    VerySatisfied: 15,
    Satisfied: 18,
    Poor: 10,
    VeryPoor: 2,
    Average: 3.5
  },
  {
    day: "11/12/2020",
    Outstanding: 11,
    VerySatisfied: 6,
    Satisfied: 20,
    Poor: 8,
    VeryPoor: 3,
    Average: 3.3
  },
  {
    day: "12/12/2020",
    Outstanding: 15,
    VerySatisfied: 8,
    Satisfied: 21,
    Poor: 5,
    VeryPoor: 5,
    Average: 3.7
  },
  {
    day: "13/12/2020",
    Outstanding: 8,
    VerySatisfied: 9,
    Satisfied: 22,
    Poor: 6,
    VeryPoor: 2,
    Average: 4.0
  },
  {
    day: "14/12/2020",
    Outstanding: 9,
    VerySatisfied: 11,
    Satisfied: 25,
    Poor: 5,
    VeryPoor: 2,
    Average: 4.5
  },
  {
    day: "15/12/2020",
    Outstanding: 10,
    VerySatisfied: 12,
    Satisfied: 28,
    Poor: 5,
    VeryPoor: 5,
    Average: 4.2
  }
];
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data1,
      targetItem: undefined
    };

    this.changeTargetItem = (targetItem) => this.setState({ targetItem });
  }

  render() {
    const { data1: chartData, targetItem } = this.state;
    return (
      <Paper>
        <Chart data={chartData}>
          <ValueScale name="ratings" modifyDomain={modifyRatingsDomain} />
          <ValueScale name="Average" modifyDomain={modifyAverageDomain} />

          <ArgumentAxis />
          <ValueAxis scaleName="ratings" />
          <ValueAxis scaleName="Average" position="right" />

          <Title text="Daily Statistics" />

          <BarSeries
            name="Outstanding"
            valueField="Outstanding"
            argumentField="day"
            scaleName="ratings"
          />
          <BarSeries
            name="Very Satisfied"
            valueField="VerySatisfied"
            argumentField="day"
            scaleName="ratings"
          />
          <BarSeries
            name="Satisfied"
            valueField="Satisfied"
            argumentField="day"
            scaleName="ratings"
          />
          <BarSeries
            name="Poor"
            valueField="Poor"
            argumentField="day"
            scaleName="ratings"
          />
          <BarSeries
            name="Very Poor"
            valueField="VeryPoor"
            argumentField="day"
            scaleName="ratings"
          />
          <LineSeries
            name="Ratings Average"
            valueField="Average"
            argumentField="day"
            scaleName="Average"
          />
          <Stack
            stacks={[
              {
                series: [
                  "Outstanding",
                  "Very Satisfied",
                  "Satisfied",
                  "Poor",
                  "Very Poor"
                ]
              }
            ]}
          />

          <Legend />
          <EventTracker />
          <Tooltip
            targetItem={targetItem}
            onTargetItemChange={this.changeTargetItem}
          />
        </Chart>
      </Paper>
    );
  }
}

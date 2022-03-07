import React from 'react';
import {View, Text} from "react-native"
import {
    LineChart
  } from "react-native-chart-kit";

export default function index(props){
  const {width, height, chartsData} = props;
return(
    <View>
        <LineChart
            data={{
            labels: ["1hr", "24hr", "7d", "30d", "60d", "90d"],
            datasets: [
                {
                data: chartsData?.length > 1 ? chartsData : [0,0,0,0,0,0] 
                }
            ]
            }}
            width={width} 
            height={height}
            yAxisSuffix="%"
            chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#faf3b1",
            backgroundGradientTo: "blue",
            // decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                // borderRadius: 16,
                // marginLeft:
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "blue"
            }
            }}
            // bezier
            style={{
            marginVertical: 8,
            // borderRadius: 16
            }}
        />
</View>
)



}
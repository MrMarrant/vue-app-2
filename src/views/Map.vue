<template>
  <div id="app">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      :events="events"
      ref="fc"
    ></fusioncharts>
  </div>
</template>

<script>
import Vue from "vue";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Maps from "fusioncharts/fusioncharts.maps";
import Charts from "fusioncharts/fusioncharts.charts";
import World from "fusioncharts/maps/fusioncharts.world";
import NA from "../assets/fusioncharts.northamerica";
import SA from "../assets/fusioncharts.southamerica";

Vue.use(VueFusionCharts, FusionCharts, Maps, Charts, World, NA, SA);

export default {
  name: "App",
  data: function() {
    return {
      type: "world",
      width: "100%",
      height: "450",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Nombres de Cas de Covid par Continent",
          subcaption: "Données du jour",
          captionalignment: "left",
          theme: "fusion",
          formatnumberscale: "0",
          numbersuffix: " cas totaux",
          entityfillhovercolor: "#E5E5E9",
          entitytooltext:
            "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lname</div><div style='font-size:12px; color:black'>$value cas totaux</div>"
        },
        colorrange: {
          startlabel: "Low",
          endlabel: "High",
          code: "#D7DDFF",
          minvalue: "0",
          gradient: "1",
          color: [
            {
              maxvalue: "150",
              displayvalue: "Average",
              code: "#828FD6"
            },
            {
              maxvalue: "300",
              code: "#36469F"
            }
          ]
        },
        data: [
          {
            id: "NA",
            value: "57.2",
            displayValue: "NA{br}drilldown",
            link: "newchart-json-NA"
          },
          {
            id: "SA",
            value: "57.1",
            displayValue: "SA{br}drilldown",
            link: "newchart-json-SA"
          },
          {
            id: "AS",
            value: "290"
          },
          {
            id: "EU",
            value: "188.5"
          },
          {
            id: "AF",
            value: "87.2"
          },
          {
            id: "AU",
            value: "29"
          }
        ],
        linkeddata: [
          {
            id: "NA",
            linkedchart: {
              chart: {
                caption: "Amérique du Nord, Nombres de Cas de Covid par Continent",
                subcaption: "Données du Jour",
                numbersuffix: " cas totaux",
                captionalignment: "left",
                theme: "fusion",
                formatnumberscale: "0",
                entityfillhovercolor: "#E5E5E9",
                entitytooltext:
                  "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px;color:black'>$value cas totaux</div>"
              },
              colorrange: {
                minvalue: "0",
                startlabel: "Low",
                endlabel: "High",
                code: "#D7DDFF",
                gradient: "1",
                color: [
                  {
                    maxvalue: 18,
                    displayvalue: "Average",
                    code: "#828FD6"
                  },
                  {
                    maxvalue: 36,
                    code: "#36469F"
                  }
                ]
              },
              data: [
                {
                  id: "001",
                  value: 5.547
                },
                {
                  id: "002",
                  value: 6.518
                },
                {
                  id: "003",
                  value: 4.702
                },
                {
                  id: "004",
                  value: 1.417
                },
                {
                  id: "005",
                  value: 15.515
                },
                {
                  id: "026",
                  value: 9.38
                },
                {
                  id: "006",
                  value: 1.682
                },
                {
                  id: "007",
                  value: 3.2
                },
                {
                  id: "008",
                  value: 2.119
                },
                {
                  id: "009",
                  value: 2.119
                },
                {
                  id: "010",
                  value: 1.043
                },
                {
                  id: "024",
                  value: 9.611
                },
                {
                  id: "011",
                  value: 2.423
                },
                {
                  id: "012",
                  value: 1.164
                },
                {
                  id: "013",
                  value: 0.278
                },
                {
                  id: "014",
                  value: 1.095
                },
                {
                  id: "015",
                  value: 2.717
                },
                {
                  id: "016",
                  value: 3.645
                },
                {
                  id: "017",
                  value: 0.834
                },
                {
                  id: "018",
                  value: 2.293
                },
                {
                  id: "025",
                  value: 0,
                  tooltext: "No Data Available"
                },
                {
                  id: "019",
                  value: 4.378
                },
                {
                  id: "020",
                  value: 2.416
                },
                {
                  id: "021",
                  value: 2.007
                },
                {
                  id: "022",
                  value: 30.059
                },
                {
                  id: "023",
                  value: 16.438
                }
              ]
            }
          },
          {
            id: "SA",
            linkedchart: {
              chart: {
                caption: "Amérique du Sud, Nombres de Cas de Covid par Continent",
                subcaption: "Données du Jour",
                captionalignment: "left",
                theme: "fusion",
                formatnumberscale: "0",
                showlabels: "0",
                numbersuffix: " cas totaux",
                entityfillhovercolor: "#E5E5E9",
                entitytooltext:
                  "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black'>$lName</div><div style='font-size:12px; color:black'>$value cas totaux</div>"
              },
              colorrange: {
                minvalue: "0",
                startlabel: "Low",
                endlabel: "High",
                code: "#D7DDFF",
                gradient: "1",
                color: [
                  {
                    maxvalue: 5,
                    displayvalue: "Average",
                    code: "#828FD6"
                  },
                  {
                    maxvalue: 10,
                    code: "#36469F"
                  }
                ]
              },
              data: [
                {
                  id: "001",
                  value: 4.764
                },
                {
                  id: "002",
                  value: 1.938
                },
                {
                  id: "003",
                  value: 2.347
                },
                {
                  id: "004",
                  value: 4.868
                },
                {
                  id: "005",
                  value: 1.739
                },
                {
                  id: "006",
                  value: 2.464
                },
                {
                  id: "007",
                  value: 0,
                  tooltext: "No Data Available"
                },
                {
                  id: "008",
                  value: 2.829
                },
                {
                  id: "015",
                  value: 0,
                  tooltext: "No Data Available"
                },
                {
                  id: "009",
                  value: 2.754
                },
                {
                  id: "010",
                  value: 0.894
                },
                {
                  id: "011",
                  value: 2.133
                },
                {
                  id: "016",
                  value: 2.525
                },
                {
                  id: "012",
                  value: 3.761
                },
                {
                  id: "013",
                  value: 2.064
                },
                {
                  id: "014",
                  value: 5.601
                }
              ]
            }
          }
        ]
      },
      events: {
        entityClick: function(e) {

          // console.log(e);
          if (e.data.id == "na")
            e.sender.configureLink({ type: "northamerica" });

          if (e.data.id == "sa")
            e.sender.configureLink({ type: "southamerica" });
          // //chart.displayValue = props.displayValue
        }
      }
    };
  },
  methods: {
    configureLink: function(chart) {
      this.chartInstance = chart; // Save it for further use

      // Configure Drilldown attributes
      // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink

      // this.chartInstance.configureLink(
      //   {
      //     type: "northamerica"
      //   },
      //   0
      // );

      // this.chartInstance.configureLink(
      //   {
      //     type: "southamerica"
      //   },
      //   0
      // );
    }
  },
  mounted: function() {
    this.configureLink(this.$refs.fc.chartObj); // this.$refs.fc gets the vue-fusionchart component
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

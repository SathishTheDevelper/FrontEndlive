import React,{useRef, useState} from "react";
import { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import {Nav, Tab} from 'react-bootstrap';
import InvoiceExpenceContext from "../../Providers/InvoiceExpence";


const chartHeaderData = [
  { title: 'Week', type:'week'},
  { title: 'Month', type:'month'},
  { title: 'Year', type:'year'},
  { title: 'All', type:'all'},
];

const  InvoiceDashboard = ({invoiceGraph,apprial,filter}) =>{ 
   
     console.log("data1",invoiceGraph)
    const chartRef = useRef();

    const series = [
      ...(apprial
        ? [
            {
              name: 'Total Invoice Amount',
              type: 'column',
              data: filter == "Month" ?
               [160000]
               :
               invoiceGraph?.data4
            },
          ]
        : [
            {
              name: 'Total Invoice Amount',
              type: 'column',
              data:  filter == "Month" ?
              [160000]
              :invoiceGraph?.data1
            },
            {
              name: 'Total Paid Amount',
              type: 'area',
              data:  filter == "Month" ?
              [160000]
              : filter == "Month" ?
               [0]
               :invoiceGraph?.data3

            },
          ]),
       
   
      {
        name: 'Total Due Amount',
        type: 'line',
        data: filter == "Month" ?
         [0] :invoiceGraph?.data2
      }
    ];
    
    
 const options = {
    chart: {
        height: 300,
        type: 'line',
        stacked: false,
        toolbar: {
          show: false,
          
        },
    },
    
    stroke: {
        width: [0, 1, 1],
        curve: 'straight',
        dashArray: [0, 0, 5]
    },
    legend: {
      fontSize: '13px',
      fontFamily: 'poppins',
      labels: {
        colors:'#888888', 
      }
    },
    plotOptions: {
        bar: {
            columnWidth: '18%',
            borderRadius:6	,
        }
    },
    fill: {            
        type : 'gradient',
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",              
          colorStops : [
              [
                  {
                    offset: 0,
                    color: 'var(--primary)',
                    opacity: 1
                  },
                  {
                    offset: 100,
                    color: 'var(--primary)',
                    opacity: 1
                  }
              ],
              [
                  {
                    offset: 0,
                    color: '#3AC977',
                    opacity: 1
                  },
                  {
                    offset: 0.4,
                    color: '#3AC977',
                    opacity: .15
                  },
                  {
                    offset: 100,
                    color: '#3AC977',
                    opacity: 0
                  }
              ],
              [
                  {
                    offset: 0,
                    color: '#FF5E5E',
                    opacity: 1
                  },
                  {
                    offset: 100,
                    color: '#FF5E5E',
                    opacity: 1
                  }
              ],
          ],
          stops: [0, 100, 100, 100]
        }
    },
    colors:["var(--primary)",
   ...apprial?['#FF5E5E']:['#3AC977','#FF5E5E']],
  
    labels:
     filter == "Week" ?
     ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"] :
     filter == "Month" ?
     ["Jun"] :  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'month',
        labels: {
              style: {
                fontSize: '13px',
                colors:'#888888',
              },
        },
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
      labels: {
          formatter: function (value) {
              if (value >= 1000) {
                  return `₹ ${(value / 1000).toFixed(0)}k`;
              }
              return value;
          },
          style: {
              fontSize: '13px',
              colors: '#888888',
          },
      },
  },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
            if (typeof y !== "undefined") {
                  return `₹ ${(y / 1000).toFixed(0)}k`;
             
            }
                     
          }
        }
    }
 }   

 
    
    return (
      <>
          <Tab.Container defaultActiveKey={'Week'}>
         
                           
                <div id="overiewChart">       
                  <ReactApexChart
                    options={options}
                    series={series}
                    ref={chartRef}
                    type="line"
                    height={300}
                  />
                </div>                
              
         
          </Tab.Container>
      </>
    );
  
}

export default InvoiceDashboard;
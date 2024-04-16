import React from "react";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  PointElement,
  Tooltip,
  Legend,
  ArcElement, 
  LineElement,
  Filler
} from "chart.js";
import { Bar,Doughnut, Line, Pie } from "react-chartjs-2";
export const BarChart = (props) => {
 ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    indexAxis: props.horizontal ? "y":"x",
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales:{
      y:{
        beginAtZero:true,
        grid:{
          display:false
        }
      },
      x:{
        beginAtZero:true,
        grid:{
          display:false
        }
      }
    }
  };

  const data = {
    labels:props.labels,
    datasets: [
      {
        label: props.title_1,
        data: props.data_1,
        backgroundColor: props.bg_1,
      },
      {
        label: props.title_2,
        data: props.data_2,
        backgroundColor: props.bg_2,
      }
    ],
  };
  return <Bar  data={data} options={options} />;
};
BarChart.propTypes = {
  horizontal:PropTypes.bool,
  data_1:PropTypes.array.isRequired,
  data_2:PropTypes.array.isRequired,
  title_1:PropTypes.string.isRequired,
  title_2:PropTypes.string.isRequired,
  bg_1:PropTypes.string.isRequired,
  bg_2:PropTypes.string.isRequired,
  labels:PropTypes.array
};
BarChart.defaultProps = {
  horizontal:false,
  data_1:[57,77,32],
  data_2:[33,56,90],
  title_1:"dataset 1",
  title_2:"dataset 2",
  labels:[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ]
};

export const DoughnutChart =(prop)=>{
ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      display:prop.legends,
      position:"top" 
    },
 
  },
};
const data = {
  labels: prop.labels,
  datasets: [
    {
      label:prop.label,
      data: prop.data,
      backgroundColor: prop.backgroundColor ,
      borderColor:prop.borderColor,
      borderWidth: 1,
      cutout:prop.cutout,
      offset:prop.offset
    },
  ],
};
  return( <Doughnut data={data} options={options}/>);
}
DoughnutChart.prototype={
  label:PropTypes.string.isRequired ,
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  backgroundColor:PropTypes.array.isRequired,
  cutout:PropTypes.string,
  offset:PropTypes.array,
  borderColor:PropTypes.array.isRequired,
  legends:PropTypes.bool,
}
DoughnutChart.defaultProps={
  data: [200,300],
  labels: ['female','male'],
  backgroundColor:["rgb(44, 130, 54)","rgb(44, 130, 54)"],
  cutout:80,
  legends:false
}

export const Piechart =({labels,data,backgroundColor,borderColor,offset})=>{
  ChartJS.register(ArcElement, Tooltip, Legend);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
        position:"right" 
      },
   
    },
  };
  const piedata = {
    labels,
    datasets: [
      {
        label: 'in 100 Stock',
        data,
        backgroundColor,
        borderColor,
        borderWidth: 1,
        offset
      },
    ],
  };
    return( <Pie data={piedata} options={options}/>);
  }
  Piechart.prototype={
    data: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired,
    backgroundColor:PropTypes.array.isRequired,
    borderColor:PropTypes.array.isRequired,
    offset:PropTypes.array,
  }
  Piechart.defaultProps={
    data: [200,300],
    labels: ['female','male'],
    backgroundColor:['rgb(44, 130, 154)','rgb(144, 130, 54)'],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    offset:[1,1]
  }
 
export const LineChart = ({data ,label,labels,borderColor,backgroundColor,legends}) => {
    ChartJS.register(
      CategoryScale,
      PointElement,
      LineElement,
      LinearScale,
      Title,
      Tooltip,
      Legend,
      Filler
    );
     const options = {
       responsive: true,
       fill:true,
       plugins: {
         legend: {
          display:legends,
          position: "top",
         },
         title: {
          display: legends,
          text: 'Chart.js Line Chart',
        },
       },

       scales:{
        y:{
          beginAtZero:true,
          grid:{
            display:false
          }
        },
        x:{
          beginAtZero:true,
          grid:{
            display:false
          }
        }
      }
     };
   
  const linedata = {
      labels,
      datasets: [
        {
          label,
          data ,
          borderColor ,
          backgroundColor,
        },
       ],
     };
     return <Line  data={linedata} options={options} />;
   };
   LineChart.propTypes = {
     data:PropTypes.array.isRequired,
     label:PropTypes.string.isRequired,
     backgroundColor:PropTypes.string.isRequired,
     labels:PropTypes.array,
     borderColor:PropTypes.string,
     legends:PropTypes.bool
   };
   LineChart.defaultProps = {
     data:[57,77,32],
     label:"dataset 1",
     labels:[
       "January",
       "February",
       "March",
       "April",
       "May",
       "June",
       "July",
       "August",
       "September",
       "October",
       "November",
       "December",
       ],
     legends:false
   };
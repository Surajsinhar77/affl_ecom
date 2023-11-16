import img from './payments.png';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


      
    var options = {
        series: [
        {
          name: 'Actual',
          data: [
            {
              x: '2011',
              y: 1292,
              goals: [
                {
                  name: 'Expected',
                  value: 1400,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2012',
              y: 4432,
              goals: [
                {
                  name: 'Expected',
                  value: 5400,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2013',
              y: 5423,
              goals: [
                {
                  name: 'Expected',
                  value: 5200,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2014',
              y: 6653,
              goals: [
                {
                  name: 'Expected',
                  value: 6500,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2015',
              y: 8133,
              goals: [
                {
                  name: 'Expected',
                  value: 6600,
                  strokeHeight: 13,
                  strokeWidth: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2016',
              y: 7132,
              goals: [
                {
                  name: 'Expected',
                  value: 7500,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2017',
              y: 7332,
              goals: [
                {
                  name: 'Expected',
                  value: 8700,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2018',
              y: 6553,
              goals: [
                {
                  name: 'Expected',
                  value: 7300,
                  strokeHeight: 2,
                  strokeDashArray: 2,
                  strokeColor: '#775DD0'
                }
              ]
            }
          ]
        }
      ],
        chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      colors: ['#00E396'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#00E396', '#775DD0']
        }
      }
      };

    //   var chart = new ApexCharts(document.querySelector("#chart"), options);
    return (
        <>
            <div className=" grid grid-cols-6 place-items-center w-full p-5 gap-5 overflow-y-auto">
                <div className=" col-span-4 bg-white rounded-lg p-5 w-full">
                    <div className="text-2xl pb-3 text-blue-700 font-semibold">
                        Congratulations John! 🎉
                    </div>
                    <div className=" text-lg py-3 text-gray-600">
                        You have done 72% 🤩 more sales today.<br />
                        Check your new raising badge in your profile.
                    </div>
                    <div className="m-2 ml-0 p-2 bg-blue-50 text-blue-500 w-fit px-4 rounded-lg">
                        View Badges
                    </div>
                </div>
                <div className=" bg-white rounded-lg p-5 w-full">
                    <img src={img} alt='img' className=' w-10 h-10' />
                    Profit<br />
                    $19,000<br />
                    70%
                </div>
                <div className=" bg-white rounded-lg p-5 w-full">
                    <img src={img} alt='img' className=' w-10 h-10' />
                    <div className=''>Profit</div><br />
                    $19,000<br />
                    70%
                </div>
                <div className=" col-span-4 row-span-2 bg-white rounded-lg p-5 w-full">
                    <LineChart width={300} height={100} data={data}>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                    <LineChart
                        width={800}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                    {/* {chart.render()} */}
                </div>
                <div className=" bg-white rounded-lg p-5 w-full">
                    <img src={img} alt='img' className=' w-10 h-10' />
                    Profit<br />
                    $19,000<br />
                    70%
                </div>
                <div className=" bg-white rounded-lg p-5 w-full">
                    <img src={img} alt='img' className=' w-10 h-10' />
                    Profit<br />
                    $19,000<br />
                    70%
                </div>
                <div className=" bg-white rounded-lg p-5 w-full col-span-2">
                    <img src={img} alt='img' className=' w-10 h-10' />
                    Profit<br />
                    $19,000<br />
                    70%
                </div>
                <div className=" bg-white rounded-lg p-5 w-full col-span-2">
                    <img src={img} alt='img' className=' w-10 h-10' />
                    Profit<br />
                    $19,000<br />
                    70%
                </div>
                <div className=" bg-white rounded-lg p-5 w-full col-span-2">
                    <img src={img} alt='img' className=' w-10 h-10' />
                    Profit<br />
                    $19,000<br />
                    70%
                </div>
                <div className=" bg-white rounded-lg p-5 w-full col-span-2">
                    <img src={img} alt='img' className=' w-10 h-10' />
                    Profit<br />
                    $19,000<br />
                    70%
                </div>
            </div>
        </>
    )
}

export default Home

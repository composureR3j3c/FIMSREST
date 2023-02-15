import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';


export default function LC() {

    var data = [
        {									
            color: "green", 
            // points: graphPoints
            points: [{x:1,y:3},{x:2,y:2},{x:3,y:2},{x:4,y:2},{x:5,y:5},{x:6,y:1}] 
        }
    ];
    return (
        <div className='d-flex justify-content-center'>
            <div className="LC bg-info d-flex justify-content-center mb-2 p-2">
                {/* <h6>Respose Time </h6> */}
                <LineChart 
                    width={900}
                    height={300}
                    data={data}
                    xLabel={"Requests"}
                    yLabel={"Latency in seconds"}
                    hideXLabel={true}
                    pointRadius={3}
                    onPointClick={(event, point) => console.log(point)}
                />
            </div>				
        </div>
    );
}

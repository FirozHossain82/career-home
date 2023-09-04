import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const marksArray = [
        {
          "id": 1,
          "name": "Assingment 1",
          "projects marks": 60,
          
        },
        {
          "id": 2,
          "name": "Assingment 2",
          "projects marks": 70,
          
        },
        {
          "id": 3,
          "name": "Assingment 3",
          "projects marks": 92,
          
        },
        {
          "id": 4,
          "name": "Assingment 4",
          "projects marks": 65,
          
        },
        {
          "id": 5,
          "name": "Assingment 5",
          "projects marks": 88,
         
        },
        {
          "id": 6,
          "name": "Assingment 6",
          "projects marks": 76,
          
        },
        {
          "id": 7,
          "name": "Assingment 7",
          "projects marks": 81,
        
        },
        {
          "id": 8,
          "name": "Assingment 8",
          "projects marks": 93,
     
        },
        {
          "id": 9,
          "name": "Assingment 9",
          "projects marks": 72,
         
        },
        {
          "id": 10,
          "name": "Assingment 10",
          "projects marks": 68,
          
        }
      ]
    return (
        <div className=' my-8  w-full flex justify-center '>
        <LineChart 
        width={800}
        height={400}
        data={marksArray}
        >
            <Line dataKey='projects marks' stroke="#FF1493"></Line>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </LineChart>
    </div>
    );
};

export default Statistics;
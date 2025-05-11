import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Коты', 'Собаки', 'Хомяки', 'Рыбки', 'Попугаи'],
  datasets: [
    {
      label: 'Популярность',
      data: [48, 31, 12, 6, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(178, 141, 173, 0.7)',
        'rgba(246, 193, 199, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(242, 180, 187, 1)',
        'rgba(156, 124, 160, 1)' 
      ],
      borderWidth: 1
    }
  ]
};

function App() {
  return (
    <div style={{ width: '50%', margin: '50px auto', textAlign: 'center' }}>
      <h2>Статистика домашних животных</h2>
      <Pie data={data} />
    </div>
  );
}

export default App;


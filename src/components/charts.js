import React from 'react';
import { Doughnut ,Bar } from 'react-chartjs-2';
import jsPDF from "jspdf";
import 'jspdf-autotable'
const data = {
    label:['appke','bana','banana','appke','bana','banana','what'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
const Charts = () => {
    const test = () =>{
        const chart = document.querySelector('#doughnut')
        const hello = chart.toDataURL("image/png",1.0)
        console.log(chart,hello)
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.text(100, 20, 'Hello World', 'center');
        const pageWidth = Math.floor(pdf.internal.pageSize.getWidth());
        const pageHeight = Math.floor(pdf.internal.pageSize.getHeight());
        const widthRatio = pageWidth / chart.width;
        const heightRatio = pageHeight / chart.height;
        const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
        const canvasWidth = chart.width * ratio;
    const canvasHeight = chart.height * ratio;

    pdf.addImage(hello, 'JPEG', 0, 50, canvasWidth, canvasHeight);
        console.log(pageHeight,pageWidth)
        pdf.setFontSize(20);
       
        pdf.autoTable({
           
            margin: {horizontal:5,top: 5},
            startY: 0.47*pdf.internal.pageSize.height,
            columnStyles: { europe: { halign: 'center' } }, // European countries centered
            body: [
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
              { europe: 'Sweden', america: 'Canada', asia: 'China' },
              { europe: 'Norway', america: 'Mexico', asia: 'Japan' },

            ],
            columns: [
              { header: 'Europe', dataKey: 'europe' },
              { header: 'Asia', dataKey: 'asia' },
            ],
            columnStyles: {
                0: {cellWidth: 100},
                1: {cellWidth: 80},
              
                
              }
          })
      
        pdf.save('canvas.pdf');
    }

    return ( 
        <>
        <Doughnut id="doughnut"
  data={data}
  width={300}
  height={300}
  options={{ maintainAspectRatio: false }}
/>
<button onClick={test}>Click</button>
</>
     );
}
 
export default Charts;
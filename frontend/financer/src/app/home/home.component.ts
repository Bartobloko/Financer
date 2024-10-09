import {AfterViewInit, Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
  LineController,
  LineElement,
  PointElement
} from "chart.js";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  chart: any = [];

  constructor() {
    Chart.register(
      CategoryScale, LinearScale,
      PieController, ArcElement,
      LineController, LineElement, PointElement
    );
  }

  ngAfterViewInit() {
    // Example for line chart
    const lineChart = new Chart('lineCanvas', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [10, 20, 30, 40, 50],
            fill: false,
            borderColor: 'blue',
            tension: 0.1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Example for pie chart
    const pieChart = new Chart('pieCanvas', {
      type: 'pie',
      data: {
        labels: ['Apple', 'Samsung', 'Google'],
        datasets: [
          {
            label: 'Market Share',
            data: [30, 50, 20],
            backgroundColor: ['red', 'blue', 'green'],
          }
        ]
      },
    });
  }
}

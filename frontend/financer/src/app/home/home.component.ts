import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
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
  @ViewChild('typesOfExpensesChart') typesOfExpensesRef!: ElementRef;
  @ViewChild('pannedMoneyYearChart') pannedMoneyYearRef!: ElementRef;
  @ViewChild('pannedMoneyMonthChart') pannedMoneyMonthRef!: ElementRef;

  constructor() {
    Chart.register(
      CategoryScale, LinearScale,
      PieController, ArcElement,
      LineController, LineElement, PointElement
    );
  }

  ngAfterViewInit() {
    this.createChart([0,1,2,3], [1,2,3,4], this.typesOfExpensesRef, 'pie', "#9a039a", ['red', 'blue', 'green','purple'], 'Type:')
    this.createChart([0,1,2,3], [1,2,3,4], this.pannedMoneyYearRef, 'line', "#9a039a", '#3e003e', 'Money:')
    this.createChart([0,1,2,3], [1,2,3,4], this.pannedMoneyMonthRef, 'line', "#9a039a", '#3e003e','Money:')
  }

  createChart(xData: any, yData: any, chartRef: any, type:any, borderColor: string, backgroundColor: any, chartLabel: string) {
    const ctx = chartRef.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Failed to get the context.');
      return;
    }
    const newChart = new Chart(ctx, {
      type: type,
      data: {
        labels: xData,
        datasets: [
          {
            label: chartLabel,
            borderColor: borderColor,
            data: yData,
            backgroundColor: backgroundColor,
          }
        ]
      },
      options: {
        aspectRatio: 5
      }
    });
  }

}

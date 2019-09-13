import { Component, OnInit } from '@angular/core';
import { StatService } from '../common/service/stat.service';
import { Stat } from '../common/data/stat';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private _statService : StatService) { }

  public stats : Stat[] = null;
  public chartData : any[] = [
    {data: [ ], label: 'Ventes annuelles (kE)'}
    ];
  public chartLabels : string[] = [];
  public chartType : string = 'bar'; // ou line, radar, pie, polarArea, doughnut
  public chartLegend : boolean = true;
  public chartOptions : any = 
  { scaleShowVerticalLines: false, responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }] 
  }
  };

  initChartDataFromStats(){
    let freshData = [];
    for(let s of this.stats){
      this.chartLabels.push(""+s.year);
      freshData.push(s.value);
    }
    this.chartData[0].data=freshData;
  }

  ngOnInit() {
    this._statService.getStatsObservable()
      .subscribe(
        (stats)=>{ this.stats=stats; this.initChartDataFromStats();}
      );

  }

  /*
  public chartData : any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
    public chartLabels : string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public chartType : string = 'line'; // ou bar, radar, pie, polarArea, doughnut
    public chartLegend : boolean = true;
    public chartOptions : any = { scaleShowVerticalLines: false, responsive: true };
*/

}

import { Component, OnInit } from '@angular/core';
import { AgeGraphData } from 'src/app/shared/Graphs/AgeGraph.model';
import { GraphsService } from 'src/app/shared/Graphs/graphs.service';

@Component({
  selector: 'app-age-wise-graph',
  templateUrl: './age-wise-graph.component.html',
  styleUrls: ['./age-wise-graph.component.css']
})
export class AgeWiseGraphComponent implements OnInit {
  graphData:AgeGraphData[];
  constructor(private graphService:GraphsService) { }
  

  ngOnInit() {
    this.graphService.GetGraphData(2).subscribe((data:AgeGraphData[])=>{
      this.graphData=data;
    })
  }
}

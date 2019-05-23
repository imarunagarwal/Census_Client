import { Component, OnInit } from '@angular/core';
import { GraphsService } from 'src/app/shared/Graphs/graphs.service';
import { StateGraphData } from 'src/app/shared/Graphs/StateGraph.model';


@Component({
  selector: 'app-state-wise-graph',
  templateUrl: './state-wise-graph.component.html',
  styleUrls: ['./state-wise-graph.component.css']
})
export class StateWiseGraphComponent implements OnInit {
  graphData:StateGraphData[];
  constructor(private graphService:GraphsService) { }

  ngOnInit() {
    this.graphService.GetGraphData(1).subscribe((data:StateGraphData[])=>{
      this.graphData=data;
    })
  }
}

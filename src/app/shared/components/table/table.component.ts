import { Component, Input, OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnChanges {

  @Input() data: any;
  @Input() tableHeadings: string[];
  @Input() tableColumns: string[];

  ngOnChanges(value:SimpleChanges) {
    console.log(value);
  }
}


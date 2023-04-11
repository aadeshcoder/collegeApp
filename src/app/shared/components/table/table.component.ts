import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['tableColumns'].currentValue);
  }
  ngOnInit(): void {
    console.log(this.tableColumns);
    console.log(this.data);
  }

  @Input() data: any;
  @Input() tableHeadings: string[];
  @Input() tableColumns: string[];
  @Input() columns: any;

}


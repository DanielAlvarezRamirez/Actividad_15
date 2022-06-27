import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Actividad_15';

  data: Array<any> = [];
  itemData: Array<any> = [];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'family', 'genus', 'order', 'details'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  constructor(private services:ServicesService){
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.services.getAll().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.dataSource.data = this.data;
    })
  }

  getItem(name: string){
    this.services.getItem(name).subscribe((data) => {
      console.log(data);
      this.itemData = data;
    })
  }
}

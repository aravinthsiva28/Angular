import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AfterViewInit, ViewChild,Component, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {

  constructor(private airline :AirlineService,
    private router:Router,
    private toast:ToastrService) { }

  ngOnInit(): void {
    this.GetAllAirline();
  }
  displayedColumns: string[] = ['name','contact','address','status','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  GetAllAirline(){
      this.airline.GetAllAirlines()
    .subscribe({
      next:(res:any)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        //console.log(res);
        //console.log(res[0].startDateTime);
      },
      error:(err)=>
      {
        alert("something went wrong");
      }
      })
  }

  BlockAirline(id:number){
     this.airline.BlockAirline(id)
    .subscribe({
      next:(res)=>{
        this.toast.info("Airline Blocked successfully");
          this.GetAllAirline();
      },
      
      error:(err)=>
      {
        this.toast.error("something went wrong");
      }
      })
  }

  UnblockAirline(id:number){
     this.airline.UnblockAirline(id)
    .subscribe({
      next:(res)=>{
        this.toast.info("Airline Unlocked successful");
          this.GetAllAirline();
      },
      
      error:(err)=>
      {
        this.toast.error("something went wrong");
      }
      })
  }

  backToShedule(){
    this.router.navigate(['/flightshedule']);
 }

  logOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}

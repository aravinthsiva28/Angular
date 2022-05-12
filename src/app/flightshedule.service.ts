import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsheduleService {

  constructor(private http:HttpClient) { }


  PostFlight(data:any){
    ///shedule/Addshedule
    //api/v1.0/shedule/AddShedule
    
    return this.http.post<any>("http://localhost:9000/shedule/Addshedule",data);
  }
  
  GetAllFlights(){
    //return this.http.get<any>("http://localhost:9000/shedule/Search");
    
    return this.http.get<any>("https://airlineapi.azure-api.net/myapi/api/v1.0/flight/Search");
  }

  GetAllUnblockAirline(){
    return this.http.get<any>("http://localhost:9000/shedule/unblocked");
  }
  
  UpdateFlights(data:any,id:number){
    return this.http.put<any>("http://localhost:9000/shedule/UpdateShedule/"+id,data);
  }
  
  DeleteFlights(id:number){
    return this.http.delete<any>("http://localhost:9000/shedule/RemoveShedule/"+id);
  }

  GetAllBooking(id:string){
    return this.http.get<any>("http://localhost:9005/api/v1.0/booking/BookingByName/"+id);
    
  }

  Bookticket(data:any){
    return this.http.post<any>("http://localhost:9005/api/v1.0/flight/addbooking",data);
    
  }

  cancelTicket(id:number){
    return this.http.put<any>("http://localhost:9005/api/v1.0/flight/cancelbooking/"+id,null);
  }

  GetDiscountList(){
    return this.http.get<any>("http://localhost:9005/api/v1.0/booking/discount");
    
  }


}

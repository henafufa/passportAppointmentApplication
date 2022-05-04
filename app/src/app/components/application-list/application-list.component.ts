// built-in modules
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

// custom modules
 import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  appointments:any;
  id:any;
  public successMsg ="";
  public errorMsg ="";

  constructor(private appoitmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getMyAppointments();
  }

  getMyAppointments(){
    this.appoitmentService.getAllAppointnments().subscribe((res)=>{
      console.log('all appointment gained', res);
      this.appointments = res;
    });;
  }
  cancelMyAppointment(id:any){
    this.appoitmentService.cancelAppointment(id)
      .pipe(mergeMap(()=> 
        this.appoitmentService.getAllAppointnments()
      )).subscribe((res)=>{
        this.appointments=res;
      }),
      (error:ErrorEvent)=>{
        console.log('error',error)
        this.errorMsg= error.error.message;
      }
  }

}

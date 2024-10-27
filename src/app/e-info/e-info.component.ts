import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrl: './e-info.component.css',
  providers: [DataService]
})
export class EInfoComponent {

  updateInfo(frm:any){
    this.dservice.addInfo(frm.value.location)
  }

  infoReceived1: string[]=[]
  infoReceived2: string[]=[]
  infoReceived3: string[]=[]
  infoReceived4: string[]=[]
  infoReceived5: string[]=[]

  getInfoFromService1(){
    this.infoReceived1 = this.dservice.getInfo1()
  }
  getInfoFromService2(){
    this.infoReceived2 = this.dservice.getInfo2()
  }
  getInfoFromService3(){
    this.infoReceived3 = this.dservice.getInfo3()
  }
  getInfoFromService4(){
    this.infoReceived4 = this.dservice.getInfo4()
  }

  getInfoFromService5(){
    this.infoReceived5 = this.dservice.getInfo5()
  }


  constructor(private dservice: DataService){

  }

}

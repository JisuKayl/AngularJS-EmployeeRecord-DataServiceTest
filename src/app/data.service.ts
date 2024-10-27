import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[]=["Name: Jerson Bonifacio", "ID: 1111755", "Gmail: jkfb1@gmail.com"]
  info2: string[]=["Name: Kyle Bonifacio", "ID: 2111755", "Gmail: jkfb2@gmail.com"]
  info3: string[]=["Name: Flores Bonifacio", "ID: 3111755", "Gmail: jkfb3@gmail.com"]
  info4: string[]=["Name: JK Bonifacio", "ID: 4111755", "Gmail: jkfb4@gmail.com"]
  info5: string[]=["Name: JF Bonifacio", "ID: 5111755", "Gmail: jkfb5@gmail.com"]

  getInfo1():string[]{
    return this.info1
  }

  getInfo2():string[]{
    return this.info2
  }

  getInfo3():string[]{
    return this.info3
  }

  getInfo4():string[]{
    return this.info4
  }

  getInfo5():string[]{
    return this.info5
  }

  addInfo(info:string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    this.info4.push(info)
    this.info5.push(info)
  }

  constructor() { }
}

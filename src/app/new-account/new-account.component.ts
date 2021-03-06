import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService:LoggingService,
              private accountsService:AccountsService) { 
                this.accountsService.statusUpdated.subscribe(
                  (status:string)=>alert('new Status:'+status)
                )
              }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus)
    // this.loggingService.logStatusChange(accountStatus)
 
  }


  ngOnInit(): void {
  }

}

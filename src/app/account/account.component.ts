import { Component, OnInit,Input} from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService:LoggingService,
              private accountsService:AccountsService) { }



  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id,status)
    // this.loggingService.logStatusChange(status)
    this.accountsService.statusUpdated.emit(status)
  }


  ngOnInit(): void {
  }

}

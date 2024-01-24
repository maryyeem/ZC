import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { accountListComponent } from '../account-list/account-list.component';
import { Account } from '../account';
import{Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  id:number=0;
  account:Account=new Account();

  constructor(private route:ActivatedRoute, private router:Router, private accountService:AccountService){}

  ngOnInit() {
    this.account=new Account();
    this.id = this.route.snapshot.params['id'];
    this.accountService.getAccount(this.id).subscribe(data => {
      console.log(data)
      this.account=data;
    }, error => console.log(error));
      
  }

  list(){
    this.router.navigate(['accounts']);

  }

}

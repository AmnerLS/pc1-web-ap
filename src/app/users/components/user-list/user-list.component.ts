import {Component, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import {User} from "../../model/user.entity";
import {NgForOf} from "@angular/common";
import {RandomuserApiService} from "../../services/randomuser-api.service";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgForOf,MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
   users: Array<User> = [];
   displayedColumns: string[] = ['name', 'gender', 'email', 'username', 'phone', 'image'];
   dataSource: any;
   constructor(private randomuserApiService: RandomuserApiService) {  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.randomuserApiService.getUsers().subscribe((data: any) => {
      this.users = data['results'];
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {User} from "../model/User";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  user?: User | null;
  username = new FormControl('')
  email = new FormControl('')
  password = new FormControl('')
  adress = new FormGroup({
    street: new FormControl(''),
    postCode: new FormControl(''),
    city: new FormControl('')
  })

  onSubmit() {
    const street = this.adress.get('street')?.value;
    const postCode = this.adress.get('postCode')?.value;
    const city = this.adress.get('city')?.value;

    this.user = new User(
      this.username.value,
      this.email.value,
      this.password.value,
      {
        street,
        postCode,
        city
      }
    );
  }
}

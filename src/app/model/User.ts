import {FormControl, FormGroup, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

export class User {
  constructor(
    public username: string | null,
    public email: string | null,
    public password: string | null,
    public adress: {
      street: string | null | undefined;
      postCode: string | null | undefined
      city: string | null | undefined;
    },
  ) {}
}

export class Adress {
  constructor(
    public street: string | null,
    public postCode: string | null,
    public city: string | null
  ) {}
}

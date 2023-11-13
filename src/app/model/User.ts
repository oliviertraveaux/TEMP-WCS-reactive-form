
export class User {
  constructor(
    public username: string,
    public credentials: Credentials,
    public address: Address
  ) {}
}

export class Address {
  constructor(
    public street: string,
    public postCode: string,
    public city: string
  ) {}
}

export class Credentials {
  constructor(
    public email: string,
    public password: string,
  ) {}
}

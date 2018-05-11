export class ContactUs {
  email: string;
  phone_number: string;
  address: string;
  message: string;
  constructor(email: string, phone_number: string, address: string,message: string) {
    this.email = email;
    this.phone_number = phone_number;
    this.address = address;
    this.message = message;
  }
}

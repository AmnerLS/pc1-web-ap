import {Name} from './name.entity';

export class User {
  //name, gender, email, login.username,phone , la imagen del
  // User (picture.large)
  gender: string;
  name: Name;
  email: string;
  login: {username: string};
  phone: string;
  picture: {large: string};

  constructor() {
    this.gender= '';
    this.name= new Name;
    this.email= '';
    this.login= {username: ''};
    this.phone= '';
    this.picture= {large: ''};
  }
}

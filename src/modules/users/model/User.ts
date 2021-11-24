import { v4 as uuidV4 } from "uuid";

class User {
  name: string;
  email: string;
  admin: boolean;
  id: string;
  created_at: Date;
  updated_at?: Date;
  
  constructor() {
    this.id = uuidV4();
    this.admin = false;
  }
}

export { User };

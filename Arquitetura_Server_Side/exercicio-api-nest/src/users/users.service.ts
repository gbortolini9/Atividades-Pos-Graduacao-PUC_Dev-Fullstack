import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Ana' },
    { id: 2, name: 'Carlos' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(name: string) {
    const newUser = {
      id: this.users.length + 1,
      name,
    };

    this.users.push(newUser);
    return newUser;
  }
}


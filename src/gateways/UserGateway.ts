interface User {
    id: string;
    name: string;
  }
  
  class UserGateway {
    private users: User[] = [
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Bob' }
    ];
  
    public async getAllUsers(): Promise<User[]> {
      return this.users;
    }
  
    public async getUserById(id: string): Promise<User | undefined> {
      return this.users.find(user => user.id === id);
    }
  
    public async createUser(userData: { name: string }): Promise<User> {
      const newUser: User = {
        id: (this.users.length + 1).toString(),
        name: userData.name
      };
      this.users.push(newUser);
      return newUser;
    }
  }
  
  export default UserGateway;
  
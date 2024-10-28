import UserGateway from '../gateways/UserGateway';

class UserService {
  private userGateway: UserGateway;

  constructor() {
    this.userGateway = new UserGateway();
  }

  public async getAllUsers() {
    return await this.userGateway.getAllUsers();
  }

  public async getUserById(id: string) {
    return await this.userGateway.getUserById(id);
  }

  public async createUser(userData: { name: string }) {
    return await this.userGateway.createUser(userData);
  }
}

export default UserService;

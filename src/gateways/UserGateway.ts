import { PrismaClient } from '@prisma/client';
import { User } from '../interfaces/user.interface';

class UserGateway {
  private prisma = new PrismaClient();

  public async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  public async getUserById(id: number): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  public async createUser(name: string): Promise<User> {
    return await this.prisma.user.create({
      data: { name },
    });
  }
}

export default UserGateway;

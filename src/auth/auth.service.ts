import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid'
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  private users: User[] = [
    {
      id: uuidv4(),
      email:'cristian@gmail.com',
      password:'Abc123',
      nombre:'cristian',
      isActive:true
    }
  ]

  constructor(private readonly jwtService: JwtService) {}

  create(createUserDto: CreateUserDto) {
    const { email, password, nombre } = createUserDto

    const newUser = {
      id: uuidv4(),
      email: email.toLocaleLowerCase().trim(),
      password,
      nombre,
      isActive:true
    }
    if (email){
      const user = this.users.find(user => user.email === email)
      if (user) {
        throw new NotFoundException('user already exists')
      }
    }
    
    this.users.push( newUser )
    return {...newUser};
  }

  findAll() {
    return this.users;
  }

  async signIn(loginUserDto:LoginUserDto): Promise<{ access_token: string }> {
    const { email, password } = loginUserDto;
    const user = await this.findOne(email);
    if (user?.password !== password || user?.email !== email) {
      throw new UnauthorizedException('invalid credentials' );
    }
    
    const payload = { sub: user.id, email: user.email };
    return {
      ...loginUserDto,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private getJwtToken(payload: JwtPayload ) {
    const token = this.jwtService.sign(payload)
    return token
  }
  

  async findOne(email: string): Promise<User | User> {
    console.log(email)
    return this.users.find(user => user.email === email);
  }

}

import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../interfaces/user.interface';
import { Model } from 'mongoose';
import { IResponse } from 'src/interfaces/response.interface';

const logger = new Logger("user.service")

@Injectable()
export class UserService {
    private response: IResponse;

    constructor(
        @InjectModel('USER_MODEL') private readonly userModel: Model<User>
    ) { }

    public async regist(user: User) {
        return this.findOneByPhone(user.phone)
            .then(res => {
                if (res.length !== 0) {
                    this.response = {
                        code: 1,
                        msg: "当前手机号已注册"
                    }
                    throw this.response
                }
            }).then(async () => {
                try {
                    const createUser = new this.userModel(user)
                    await createUser.save()
                    this.response = {
                        code: 0,
                        msg: "用户注册成功" 
                    }
                    return this.response
                } catch (error) {
                    this.response = {
                        code: 2,
                        msg: "用户注册失败，请联系相关负责人，错误详情：" + error
                    }
                    throw this.response
                }
            }).catch(err => {
                logger.log(`${user.phone}: ${err.msg}`)
                return this.response
            })
    }

    private async findOneByPhone(phone: string) {
        return await this.userModel.find({
            phone
        })
    }
}

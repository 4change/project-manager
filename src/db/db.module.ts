import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

const MONGO_MODELS = MongooseModule.forFeature([
  {
    name: "USER_MODEL",
    schema: UserSchema,
    collection: "user"
  }
])

@Global()
  @Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/project-manager', {   // 注意： 这里数据库会进行自动创建
    // useNewUrlParser: true,
    // useUnifiedToplogy: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  }), MONGO_MODELS],

  exports: [MONGO_MODELS]
})
export class DbModule {}

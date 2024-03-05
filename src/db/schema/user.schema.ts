import { SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/modules/user/user.interface";

export const UserSchema = SchemaFactory.createForClass(User);
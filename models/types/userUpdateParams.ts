import { UserDto } from "../dto/user.dto";

export type UserUpdateParams = {
    id: string;
    data: Partial<UserDto>;
}
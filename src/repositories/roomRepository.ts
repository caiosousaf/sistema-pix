import { AppDataSourse } from "../data-source";
import { Room } from "../entities/Room";

export const roomRepository = AppDataSourse.getRepository(Room)
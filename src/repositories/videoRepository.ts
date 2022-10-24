import { AppDataSourse } from "../data-source";
import { Video } from "../entities/Video";

export const videoRepository = AppDataSourse.getRepository(Video)
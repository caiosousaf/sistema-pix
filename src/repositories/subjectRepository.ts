
import { AppDataSourse } from "../data-source";
import { Subject } from "../entities/Subject";

export const subjectRepository = AppDataSourse.getRepository(Subject)
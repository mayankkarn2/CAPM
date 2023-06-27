using my.taskmanager as my from '../db/data-model';

service TaskService {
    @readonly entity Task as projection on my.Tasks excluding { ID };
}
using my.taskmanager as my from '../db/data-model';

service TaskService {
    entity Task as projection on my.Tasks;
}
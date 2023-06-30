using my.project as my from '../db/data-model';

service ProjectService {
    @readonly entity Tasks as projection on my.Tasks; 
    function getTasks(user: String) returns Tasks;
}
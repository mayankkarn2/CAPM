using my.project as my from '../db/data-model';

service ProjectService {

    entity Tasks as projection on my.Tasks; 

}
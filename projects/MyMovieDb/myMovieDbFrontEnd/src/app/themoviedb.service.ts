import { Injectable } from '@angular/core';
import {retry} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(private http: HttpClient) { }

  find(movieId: string){
    return this.http
      .get('https://api.themoviedb.org/3/find/'+movieId+'?api_key=d7cc2248ade2dec509f32aeaf2595579&language=en-US&external_source=imdb_id')
      .pipe(
        retry(1) 
      )
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakingService {
  constructor(private http: HttpClient) {
   
  }
  getPersonajes():Observable<any>{
return this.http.get('https://breakingbadapi.com/api/characters')
  }
  getPersonaje(id:any){
    return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
  }
}

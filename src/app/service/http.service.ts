import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http"
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  public getData(url: string): Observable<Response> {
    return this.http.get(url);
  }
}

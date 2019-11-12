
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { SessionService } from './session.service';
import { environment } from '../environments/environment';

export class BaseService {

    base_url = environment.baseUrl;
    withToken: boolean = true;
    constructor(public http: HttpClient, public sessionService: SessionService) {
    }
  
  
    public getHeaders(isJson: boolean = true) {
      const headers = new HttpHeaders().append('Content-Type', 'application/json');
  
      if (this.sessionService.getSessionAuthToken() && this.withToken) {
  
        const headers = new HttpHeaders().append('Content-Type', 'application/json')
          .append('Authorization', 'token ' + this.sessionService.getSessionAuthToken());
        return headers;
      }
  
      return headers;
    }
  
    public $get(url: string, withToken: boolean = true) {
      this.withToken = withToken;
  
      return this.http.get(this.base_url  + url, { headers: this.getHeaders() });
     
    }
  
    public $post(url: string, data: any, withToken: boolean = true) {
      this.withToken = withToken;
      return this.http.post(this.base_url + url, JSON.stringify(data), { headers: this.getHeaders() });
    }
  
    public $put(url: string, data: any, withToken: boolean = true) {
      this.withToken = withToken;
      return this.http.put(this.base_url + url, JSON.stringify(data), { headers: this.getHeaders() });
    }
  
    public $delete(url: string, withToken: boolean = true) {
      this.withToken = withToken;
      return this.http.delete(this.base_url + url, { headers: this.getHeaders() });
    }
  
    public sort(haystack: any[], fieldName: string, arrangementOrder: string) {
      const sortAsc = (arrangementOrder == "asc");
  
      let stack = haystack.sort((n1, n2) => {
        if (n1[fieldName] < n2[fieldName]) {
          return (sortAsc) ? -1 : 1;
        } //sort string ascending
        if (n1[fieldName] > n2[fieldName]) {
          return (sortAsc) ? 1 : -1;
        }
        return 0;
      })
  
      return stack;
    }
  
  
    public formDataPost(url: string, formData: FormData, withToken: boolean) {
      this.withToken = withToken;
  
      const headers = new HttpHeaders().append('Authorization', 'Bearer ' + this.sessionService.getSessionAuthToken());
  
      return this.http
        .post(this.base_url + url, formData, { headers: headers })
        
    } 
  
    public formDataPut(url: string, formData: FormData, withToken: boolean) {
      this.withToken = withToken;
  
      const headers = new HttpHeaders().append('Authorization', 'Bearer ' + this.sessionService.getSessionAuthToken());
  
      return this.http
        .put(this.base_url + url, formData, { headers: headers })
        .pipe(
            map(() => { return true; })
        )
        
  }
  
 
}
import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Test } from 'src/models/test.model';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class TestService extends CrudService<Test> {

    constructor(http: HttpClient, sessionService: SessionService) {
        super("/test",http, sessionService);
    }

}
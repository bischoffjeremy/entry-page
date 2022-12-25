import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from "../models/config";
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Config = {} as Config;

  constructor(private http: HttpClient) {
    // Load the configuration file on initialization
    this.load();
  }

  load() {
    this.http.get('/assets/config.json').subscribe(config => {
      this.config = config as Config;
    });
  }
}

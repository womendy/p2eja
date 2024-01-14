import { HttpClient} from'@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<any> = of(null);

  public olympicsData: any;
  constructor(private olympicService: OlympicService, private http:HttpClient) {}

  ngOnInit(): void {
    const url: string=  './assets/mock/olympic.json';
    this.http.get(url).subscribe((response) => {
      this.olympicsData = response;
    })
    this.olympics$ = this.olympicService.getOlympics();
  }
}

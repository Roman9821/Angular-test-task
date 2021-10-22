import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor(private cdRef: ChangeDetectorRef) {}

  public defaultCollapse: boolean = false;
  public renderHtml = false;

  ngOnInit(): void {
    this.defaultCollapse = true;
  }

  ngAfterViewInit() : void {
    this.cdRef.detectChanges();
  }

  renderHTML() {
    this.renderHtml = true;
  }

  public todos:NavigationModel[] = [
    {
      term: 't1',
      termHtml: '<b>T1</b>',
      count: 1,
      children: [
        {
          term: 't1.1',
          count: 2,
          children: [
            {
              term: 't1.1.1',
              count: 3,
              children: [
                { term: 't1.1.1.1' },
                { term: 't1.1.1.2' }
              ]
            },
            {
              term: 't1.1.2',
              count: 0
            }
          ]
        }, {
          term: 't1.2',
          count: 4
        }
      ]
    }, {
      term: 2,
      count: 5,
      children: [
        {
          term: 't2.1',
          count: 2
        },
        {
          term: 't2.2',
          children: [
            { term: 't2.2.1' },
            { term: 't2.2.2' }
          ]
        }
      ]
    }
  ];

}

class NavigationModel {
  public termHtml?: String;
  public term?: any;
  public count?: Number;
  public children?: NavigationModel[];
}

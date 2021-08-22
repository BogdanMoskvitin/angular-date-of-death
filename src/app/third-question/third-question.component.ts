import { Component } from '@angular/core';
import { YearService } from '../year.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss'],
})
export class ThirdQuestionComponent {
  days: any = [
    "01","02","03","04","05","06","07","08","09","10",
    "11","12","13","14","15","16","17","18","19","20",
    "21","22","23","24","25","26","27","28","29","30","31"
  ];
  months: any = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  years: any = [
    "1921","1922","1923","1924","1925",
    "1926","1927","1928","1929","1930",
    "1931","1932","1933","1934","1935",
    "1936","1937","1938","1939","1940",
    "1941","1942","1943","1944","1945",
    "1946","1947","1948","1949","1950",
    "1951","1952","1953","1954","1955",
    "1956","1957","1958","1959","1960",
    "1961","1962","1963","1964","1965",
    "1966","1967","1968","1969","1970",
    "1971","1972","1973","1974","1975",
    "1976","1977","1978","1979","1980",
    "1981","1982","1983","1984","1985",
    "1986","1987","1988","1989","1990",
    "1991","1992","1993","1994","1995",
    "1996","1997","1998","1999","2000",
    "2001","2002","2003"
  ];

  myForm : FormGroup;
  constructor(private yearSrv: YearService, private route: Router){
    this.myForm = new FormGroup({  
      day: new FormControl("", Validators.required),
      month: new FormControl("", Validators.required),
      year: new FormControl("", Validators.required) 
    });
  }

  submit(){
    this.yearSrv.data = this.myForm.get('year').value;
    this.route.navigate(["/fourth-question"]);
  }
}
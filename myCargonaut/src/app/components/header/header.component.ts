import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * Takes two numbers and returns their sum
   * @param authService first input to sum
   */
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}

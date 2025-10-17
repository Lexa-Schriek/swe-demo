import { Component } from '@angular/core';
import { Navbar } from '@swe-demo/swe-demo-ui'

@Component({
  selector: 'lib-swe-demo-feature-navbar-container', //make sure selector is correct!
  imports: [Navbar],
  templateUrl: './navbar-container.html',
  styleUrl: './navbar-container.css',
})

export class NavbarContainer {

  readonly items = [
    {
      label: "Home", path: "/"
    },
    {
      label: "Products", path: "/products"
    },
    {
      label: "Account", path: "/account"
    },
  ]

  onNavigate(path: string) {
    console.log("Navigation triggered to " + path);
  }
}

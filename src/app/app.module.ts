import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {SingleUserComponent} from './components/single-user/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    SingleUserComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: AllUsersComponent, children: [
          // /users/1
          {path: ':id', component: SingleUserComponent}
        ]
      },

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { RemoveFavService } from './remove.fav.service';
import { ViewService } from './view.service';
import { PutFavService } from './put.fav.service';
import { DeleteService } from './delete.service';
import { PutService } from './put.service';
import { GetIndiService } from './get.indi.service';
import { PostService } from './post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import { FormControl, FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, ConnectionBackend } from '@angular/http';


import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { PreResultComponent } from './pre-result/pre-result.component';
import { EditComponent } from './edit/edit.component';
import { RedirectOneComponent } from './redirect-one/redirect-one.component';
import { RedirectTwoComponent } from './redirect-two/redirect-two.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/edit', pathMatch: 'full' },
  { path: 'edit', component: EditorComponent },
  { path: 'pre', component: PreResultComponent },
  { path: 'ed', component: EditComponent },
  { path: 're1', component: RedirectOneComponent },
  { path: 're2', component: RedirectTwoComponent },
  { path: 'view', component: ViewComponent }

  /* { path: 'welcome', component: WelcomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'newspack', component: NewspackComponent } */
];


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    PreResultComponent,
    EditComponent,
    RedirectOneComponent,
    RedirectTwoComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    QuillEditorModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [PostService, GetIndiService, EditComponent, PreResultComponent, PutService, DeleteService, PutFavService, ViewService, RemoveFavService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { NgmodelValidateComponent } from './pages/ngmodel-validate/ngmodel-validate.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

@NgModule({
  declarations: [AppComponent, TemplateFormComponent, NgmodelValidateComponent, UserFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

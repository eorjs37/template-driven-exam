import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { NgmodelValidateComponent } from './pages/ngmodel-validate/ngmodel-validate.component';

@NgModule({
  declarations: [AppComponent, TemplateFormComponent, NgmodelValidateComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ReactiveComponentModule, BrowserModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ReactiveComponentModule, BrowserModule],
})
export class SharedModule {}

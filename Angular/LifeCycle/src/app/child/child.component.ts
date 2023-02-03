import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, DoCheck, AfterContentInit, ContentChild, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements 
OnInit, 
OnDestroy, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked
{

  @Input()
  channelName = "";

  @ContentChild('projectedContent') projectedContent: any;
  @ViewChild('childContent') childContent: any;

  constructor() {
    console.log("Child Constructor is called");
  }
  

  ngOnInit() {
    console.log("Child OnInit is called");
    console.log('OnInit -' + this.projectedContent);
    console.log('OnInit -' + this.childContent);
  }

  ngOnDestroy() {
    console.log("Child OnDestroy is called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log("Child OnChanges is called");
    console.log('OnChanges -' + this.projectedContent);
    console.log('OnChanges -' + this.childContent);
  }

  ngDoCheck() {
    console.log("Child OnDoCheck is called");
    console.log('OnDoCheck -' + this.projectedContent);
    console.log('OnDoCheck -' + this.childContent);
  }

  ngAfterContentInit() {
    console.log("In After Content Init");
    console.log('After content Init -' + this.projectedContent);
    console.log('After content Init -' + this.childContent);
  }

  ngAfterContentChecked(){
    console.log("In After Content Checked");
    console.log('After Content Checked -' + this.childContent);
  }

  ngAfterViewInit() {
    console.log("In After View Init");
    console.log('After View Init -' + this.childContent);
  }

  ngAfterViewChecked() {
    console.log("In After View Checked");
  }
}

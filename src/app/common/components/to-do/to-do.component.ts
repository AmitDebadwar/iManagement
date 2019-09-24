import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ToDoModel } from './to-do.model';
import { ToDoService } from './to-do.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { SectionLoaderService } from '../../services/section-loader/section-loader.service';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { Constants, URIs } from '../../constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  todos: Array<ToDoModel> = new Array<ToDoModel>();
  isTodosLoading: boolean = false;
  isToDoSaving: boolean = false;
  isXS: boolean;
  todo: ToDoModel = new ToDoModel();
  isToDoUpdating: boolean;
  submitted: boolean;

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription;
  updatorIndex: number;
  constructor(
    private todoService: ToDoService,
    private sectionLoaderService: SectionLoaderService,
    private breakpointObserver: BreakpointObserver,
    private modalService: NgbModal
  ) {

  }
  ngOnInit() {
    this.getTodos();
    this.setScreenType();

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.setScreenType();
    });


  }

  getTodos() {
    this.sectionLoaderService.show("to-do-loader");
    this.isTodosLoading = true;
    this.todoService.get(URIs.GetAllToDos)
      .subscribe((response: Array<ToDoModel>) => {
        this.todos = response;

        this.sectionLoaderService.hide("to-do-loader");
        this.isTodosLoading = false;
      });

  }

  updateStatus(t: ToDoModel, index: number) {

    this.updatorIndex = index;
    this.isToDoUpdating = true;



    this.todoService.update(URIs.GetUpdateToDoUrl , t)
      .subscribe((response: ToDoModel) => {

        this.isToDoUpdating = false;
      });

  }

  save(content: ViewChild, taskForm: NgForm) {

    this.submitted = true;
    if (taskForm.valid) {
      this.isToDoSaving = true;
      this.todo.CreatedBy = Constants.LOGGED_IN_USER;
      this.todoService.post(URIs.GetSaveToDo, this.todo)
        .subscribe((response: number) => {

          if (response === 1) {
            this.modalService.open(content, {});
            this.getTodos();
          }

          this.isToDoSaving = false;
        });
    }

  }





  @HostListener("window:resize", [])
  onResize() {
    this.setScreenType();
  }


  private setScreenType() {

    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe(x => {
      if (x.matches) {
        this.isXS = x.matches;
        //console.log("XS");
      }

    });

    // Amit D Delete
    this.breakpointObserver.observe(Breakpoints.Small).subscribe(x => {
      if (x.matches) {
        this.isXS = x.matches;
        //console.log("SM");
      }

    });

    this.breakpointObserver.observe(Breakpoints.Medium).subscribe(x => {
      if (x.matches) {
        this.isXS = !x.matches;
        //console.log("MD");
      }

    });

    this.breakpointObserver.observe(Breakpoints.Large).subscribe(x => {
      if (x.matches) {
        this.isXS = !x.matches;
        //console.log("LG");
      }

    });

  }



}

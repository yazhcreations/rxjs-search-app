import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
  retry,
  delay,
  catchError,
  finalize,
  takeUntil,
  filter
} from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.css']
})
export class LiveSearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  users: any[] = [];
  allUsers: any[]=[];
  loading = false;
  hasError = false;
  destroy$ = new Subject<void>();
  selectedUser: any = null;

  constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.loading = true;
  this.http.get<{ users: any[] }>('https://dummyjson.com/users')
    .pipe(
      retry(2),
      catchError(() => {
        this.hasError = true;
        return of({ users: [] });
      }),
      finalize(() => this.loading = false),
      takeUntil(this.destroy$)
    )
    .subscribe(result => {
      this.allUsers = this.users = result.users || [];
    });

  // ✅ Setup live search
  this.searchControl.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    tap(value => {
      const query = value?.trim();

      if (!query) {
        this.users = this.allUsers; // 💡 No search, restore all
        return;
      }

      this.loading = true;
      this.hasError = false;
    }),
    filter(value => !!value?.trim()), // skip empty values
    switchMap(searchText => {
      return this.http.get<{ users: any[] }>(
        `https://dummyjson.com/users/search?q=${searchText}`
      ).pipe(
        retry(2),
        catchError(() => {
          this.hasError = true;
          return of({ users: [] });
        }),
        finalize(() => this.loading = false)
      );
    }),
    takeUntil(this.destroy$)
  ).subscribe(result => {
    this.users = result.users || [];
  });
}


  selectUser(user: any) {
    this.selectedUser = user;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NameService } from './services/name.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { List } from './List';
import { AddFormComponent } from './add-form/add-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'proov-pro';
  isActive: boolean = true;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'sex',
    'phone',
    'delete',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private nameService: NameService, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.openAddFormComponent = this.getNamesList;
  }

  openAddFormComponent() {
    const dialogRef = this.dialog.open(AddFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getNamesList();
        }
      },
    });
  }

  getNamesList() {
    return this.nameService.getNamesList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteName(id: number) {
    this.nameService.deleteName(id).subscribe({
      next: (res) => {
        alert('Name is deleted!');
        this.getNamesList();
      },
      error: console.log,
    });
  }
}

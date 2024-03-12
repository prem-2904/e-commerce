import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../modal/modal.component';
import { RouterLink } from '@angular/router';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private commonService = inject(CommonService);
  dialog = inject(MatDialog);
  isLoggedIn: boolean = this.commonService.isLoggedIn();

  ngOnInit() {}

  openLoginDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-collaborateur',
  templateUrl: './add-collaborateur.component.html',
  styleUrls: ['./add-collaborateur.component.css']
})
export class AddCollaborateur implements OnInit {
  form: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm) {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        Swal.fire("Collaborateur a ete ajoute avec success", "", "success");
        f.resetForm();
      },
      err => {
        Swal.fire("Erreur",   err.error.message, "error");
      }
    );
  }
}

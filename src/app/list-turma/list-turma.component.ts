import { TurmaService } from './../turma.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Turma } from '../turma';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-turma',
  templateUrl: './list-turma.component.html',
  styleUrls: ['./list-turma.component.css']
})
export class ListTurmaComponent implements OnInit {

  turmas?: Observable<Turma[]>;
  constructor(private turmaService: TurmaService, private router: Router) { }

  ngOnInit(): void {
    this.getListaTurma();
  }

  getListaTurma() :void{
    this.turmas = this.turmaService.getListarTurmas();
  }

}

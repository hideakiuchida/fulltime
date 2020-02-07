import { PalindromeModel } from "../domain/palindrome.model";
import { UseCase } from "../base/use-case";
import { Injectable } from "@angular/core";
import { PalindromeRepository } from "../repositories/palindrome.repository";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ValidarPalindromeUsecase implements UseCase<PalindromeModel, boolean> {
  
    constructor(private repository: PalindromeRepository) { }
  
    execute(model: PalindromeModel): Observable<boolean> {
      return this.repository.validarPalidrome(model);
    }
  }
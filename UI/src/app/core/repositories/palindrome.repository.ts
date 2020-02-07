import { Observable } from "rxjs";
import { PalindromeModel } from "../domain/palindrome.model";

export abstract class PalindromeRepository {
    abstract validarPalidrome(model: PalindromeModel): Observable<boolean>;
  }
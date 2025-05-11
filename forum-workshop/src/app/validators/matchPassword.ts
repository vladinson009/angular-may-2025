import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchPassword(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const rePassword = group.get('rePassword')?.value;
  return password && rePassword && password !== rePassword
    ? { matchPassword: true }
    : null;
}

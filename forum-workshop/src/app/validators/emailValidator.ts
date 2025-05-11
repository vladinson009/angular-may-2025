import { AbstractControl, ValidationErrors } from '@angular/forms';

export function customEmailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const regExp = /^[a-zA-Z0-9._%+-]{6,}@gmail\.(com|bg)$/;
  const forbidden = regExp.test(control.value);
  return !forbidden
    ? {
        emailValidator: {
          value: control.value,
        },
      }
    : null;
}

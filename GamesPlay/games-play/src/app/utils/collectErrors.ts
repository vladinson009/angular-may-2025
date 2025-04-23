import { FormGroup, ValidationErrors } from '@angular/forms';

export default function collectErrors(form: FormGroup): string[] {
  const errors: string[] = [];

  Object.keys(form.controls).forEach((key) => {
    const controlName = key[0].toLocaleUpperCase() + key.slice(1);
    const control = form.get(key);

    if (control && control.errors) {
      const controlErrors: ValidationErrors = control.errors;
      if (controlErrors['required']) {
        errors.push(`${controlName} is required!`);
      }
      if (controlErrors['email']) {
        errors.push(`${controlName} is not a valid email!`);
      }
      if (controlErrors['minlength']) {
        const { requiredLength } = controlErrors['minlength'];
        errors.push(
          `${controlName} must be at least ${requiredLength} characters!`
        );
      }
    }
  });

  return errors;
}

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function atLeastOneCheckboxNeedToBeSelected(
  checkboxs: AbstractControl[]
): ValidatorFn {
  return function (): ValidationErrors | null {
    let isCheckedAny = false;
    checkboxs.forEach((control: AbstractControl) => {
      if (control.value == true) {
        isCheckedAny = true;
      }
    });

    if(isCheckedAny) return null;

    return {
      checkboxSelectionError: 'At least one checkbox must be selected.',
    };
  };
}

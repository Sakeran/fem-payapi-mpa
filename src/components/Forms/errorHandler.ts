type FormElement = HTMLInputElement | HTMLTextAreaElement;
type ErrorElement = HTMLParagraphElement;

function setErrors(input: FormElement, errors: ErrorElement) {
  input.dataset.errors = "true";

  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", errors.id);

  if (input.required && input.value.length == 0) {
    errors.textContent = "This field can't be empty";
    return;
  }

  if (input.type == "email" && input.value.length > 0) {
    errors.textContent = "Enter a valid email address";
    return;
  }
}

function clearErrors(input: FormElement) {
  input.dataset.errors = "false";
  input.removeAttribute("aria-invalid");
  input.removeAttribute("aria-describedby");
}

export default function setupErrors(input: FormElement, errors: ErrorElement) {
  input.dataset.controlled = "true";
  input.dataset.errors = "false";

  let checkHandle: any = 0;
  const check = () => {
    // Debounce the eventual setErrors call.
    console.log("checking");
    if (checkHandle) {
      clearTimeout(checkHandle);
      checkHandle = 0;
    }

    const hasErrors = !input.checkValidity();

    // If there is currently no error in the field, we can immediately
    // return.
    if (!hasErrors) {
      clearErrors(input);
      return;
    }

    // Otherwise, wait until the user stops typing. If this timeout executes, then we assume
    // the field still has an error.
    checkHandle = setTimeout(() => setErrors(input, errors), 500);
  };

  input.addEventListener("input", check);
  input.addEventListener("blur", check);
}

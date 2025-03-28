export function checkInputLength(e, setIsInputValid) {
  const inputName = e.target.name;
  const inputLength = e.target.value.length;
  if ("userName" === inputName) {
    if (inputLength < 3) {
      setIsInputValid((prev) => {
        return {
          ...prev,
          nameField: {
            nameInputOutline: "outline-red-500",
            isUserNameValid: true,
          },
        };
      });
    } else {
      setIsInputValid((prev) => {
        return {
          ...prev,
          nameField: {
            nameInputOutline: "outline-[var(--theme-primary-color)]",
            isUserNameValid: false,
          },
        };
      });
    }
  } else if ("password" === inputName) {
    if (inputLength < 6) {
      setIsInputValid((prev) => {
        return {
          ...prev,
          passwordField: {
            isPasswordValid: true,
            passwordInputOutline: "outline-red-500",
          },
        };
      });
    } else {
      setIsInputValid((prev) => {
        return {
          ...prev,
          passwordField: {
            isPasswordValid: false,
            passwordInputOutline: "outline-[var(--theme-primary-color)]",
          },
        };
      });
    }
  } else if ("domain" === inputName) {
    if (inputLength < 5) {
      setIsInputValid((prev) => {
        return {
          ...prev,
          domainField: {
            isDomainValid: true,
            domainInputOutline: "outline-red-500",
          },
        };
      });
    } else {
      setIsInputValid((prev) => {
        return {
          ...prev,
          domainField: {
            isDomainValid: false,
            domainInputOutline: "outline-[var(--theme-primary-color)]",
          },
        };
      });
    }
  }
}

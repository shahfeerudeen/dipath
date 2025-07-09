import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import InputTextField from "../Components/FormGeneration/InputTextField";
import DropdownField from "../Components/FormGeneration/InputDropdown";
import { BlackButton } from "../Components/Buttons/BlackButton";
import { BackLink } from "../Components/Buttons/Link";
import SuccessMessage from "../Components/FormGeneration/SuccessMessage";
import TypographyText from "../Components/FormGeneration/TypographyText";
import CardButton from "../Components/Buttons/CardButton";

const FormGenerator = ({
  schema,
  data = {},
  onSubmit,
  loading = false,
  actionLoading = {}, // <--- add this
}) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (!schema) return;

    const fields = Object.values(schema).flat();
    const initial = {};
    fields.forEach((field) => {
      initial[field.name] =
        field.component === "dropdown-field"
          ? ""
          : data?.[field.name] || field.defaultValue || "";
    });

    setFormData((prev) => {
      const isEqual = Object.keys(initial).every(
        (key) => prev[key] === initial[key]
      );
      return isEqual ? prev : initial;
    });
  }, [schema, data]);

  const handleChange = (name, value) => {
    let processedValue = value;
    if (name === "otp") {
      processedValue = value.replace(/\D/g, "").slice(0, 6);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};
    const fields = Object.values(schema).flat();

    fields.forEach((field) => {
      const value = formData[field.name]?.toString().trim();

      if (field.required && !value) {
        errors[field.name] = `${field.label || field.name} is required`;
        return;
      }

      if (field.minLength && value.length < field.minLength) {
        errors[field.name] =
          `${field.label || field.name} must be at least ${field.minLength} characters`;
        return;
      }

      if (field.regex) {
        try {
          const regex = new RegExp(field.regex);
          if (!regex.test(value)) {
            errors[field.name] = `${field.label || field.name} is not valid`;
          }
        } catch (e) {
          console.error(`Invalid regex for ${field.name}:`, field.regex);
        }
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        type: "submit",
        data: formData,
      });
    }
  };

  const handleActionClick = (field) => {
    if (field.validateUsername) {
      const username = formData.username?.trim();
      if (!username) {
        setFormErrors((prev) => ({
          ...prev,
          username: "Username is required",
        }));
        return;
      }
    }

    onSubmit({
      type: "action",
      action: field.onClick,
      data: formData,
    });
  };

  const isFormValid = Object.values(schema)
    .flat()
    .filter((field) => field.required)
    .every((field) => {
      const value = formData[field.name]?.toString().trim() || "";
      return value !== "";
    });

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* CardButtons Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          {Object.entries(schema)
            .filter(([key]) => key.startsWith("column"))
            .flatMap(([colKey, fields]) =>
              fields
                .filter((field) => field.component === "CardButton")
                .map((field) => (
                  <CardButton
                    key={field.name}
                    label={field.label}
                    value={field.value}
                    percentage={field.percentage}
                    caption={field.caption}
                    arrowDirection={field.arrowDirection}
                    arrowColor={field.arrowColor}
                    borderColor={field.borderColor}
                  />
                ))
            )}
        </Box>

        {/* All Other Fields */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {Object.entries(schema)
            .filter(([key]) => key.startsWith("column"))
            .flatMap(([colKey, fields]) =>
              fields
                .filter(
                  (field) => field.component !== "CardButton" && !field.hidden
                )
                .map((field) => (
                  <div key={field.name}>
                    {field.component === "InputTextField" && (
                      <InputTextField
                        label={field.label}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                        icon={field.icon}
                        type={field.type}
                        showToggle={field.showToggle}
                        error={!!formErrors[field.name]}
                        helperText={formErrors[field.name]}
                        VisibilityIcon={field.VisibilityIcon}
                        VisibilityOffIcon={field.VisibilityOffIcon}
                        required={field.required || false}
                        maxLength={field.maxLength}
                        minLength={field.minLength}
                        inputMode={
                          field.inputMode ||
                          (field.type === "text" && field.name === "otp"
                            ? "numeric"
                            : undefined)
                        }
                      />
                    )}

                    {field.component === "dropdown-field" && (
                      <DropdownField
                        label={field.label}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        options={field.options || []}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                        icon={field.icon || null}
                        error={!!formErrors[field.name]}
                        helperText={formErrors[field.name]}
                        required={field.required || false}
                      />
                    )}

                    {field.component === "BlackButton" && field.button && (
                      <BlackButton
                        label={field.label}
                        disabled={
                          !isFormValid ||
                          (field.name === "Submit" && formData.otp?.length < 6) 
                        }
                        type="submit"
                        loading={actionLoading?.login || false}
                      />
                    )}

                    {field.component === "SuccessMessage" && (
                      <SuccessMessage label={field.label} icon={field.icon} />
                    )}

                    {field.component === "TypographyText" && (
                      <TypographyText
                        label={field.label}
                        value={field.value}
                        actionText={field.actionText}
                        onClick={() => handleActionClick(field)}
                        loading={actionLoading?.[field.onClick] || false} // ✅ Dynamic loading
                      />
                    )}

                    {field.component === "Backlink" && (
                      <BackLink
                        label={field.label}
                        navigateTo={field.navigateTo}
                        icon={field.icon}
                      />
                    )}
                  </div>
                ))
            )}
        </Box>
      </Box>
    </form>
  );
};

export default FormGenerator;

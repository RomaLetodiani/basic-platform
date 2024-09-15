import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { LoginFormData, loginFormInitialValues, loginFormSchema, LoginForm } from ".";

const LoginFormProvider = () => {
  const methods = useForm<LoginFormData>({
    mode: "onTouched",
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginFormInitialValues,
  });

  return (
    <FormProvider {...methods}>
      <LoginForm />
    </FormProvider>
  );
};

export default LoginFormProvider;

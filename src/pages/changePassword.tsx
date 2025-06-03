import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useResetPassword } from "../api/hooks";
import { toast } from "react-toastify";

export const ChangePassword = () => {
  const token = useParams().token;
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { mutate: mutateResetPassword } = useResetPassword();

  const ChangePassword = (data: any) => {
    mutateResetPassword(
      {
        token: token,
        body: { password: data.newPassword },
      },
      {
        onSuccess: () => {
          toast.success("Senha alterada com sucesso");
          navigate("/login");
        },
        onError: (error) => {
          console.log(error);
          toast.error("Erro ao alterar a senha. Tente mais tarde");
        },
      }
    );
  };

  return (
    <div className="flex h-[90%] justify-center items-center">
      <div className="flex flex-col border border-gray-200 bg-white gap-3 shadow-lg px-8 pt-8 pb-3 rounded-md text-center w-[400px]">
        <h1 className="text-2xl font-bold mb-4">Mudar Senha</h1>

        <form
          onSubmit={handleSubmit(ChangePassword)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                className="p-2 border rounded w-full"
                {...register("newPassword", {
                  required: "Senha é obrigatória",
                  validate: {
                    minLength: (value) =>
                      value.length >= 8 ||
                      "Senha deve conter pelo menos 8 caracteres",
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Senha deve conter pelo menos uma letra maiúscula",
                    hasLowerCase: (value) =>
                      /[a-z]/.test(value) ||
                      "Senha deve conter pelo menos uma letra minúscula",
                    hasNumber: (value) =>
                      /\d/.test(value) ||
                      "Senha deve conter pelo menos um número",
                    hasSpecialChar: (value) =>
                      /[@$!%*?&-]/.test(value) ||
                      "Senha deve conter pelo menos um caractere especial (@$!%*?&-)",
                  },
                })}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.newPassword && (
              <span className="text-red-500 text-sm">
                {errors.newPassword.message?.toString()}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="p-2 border rounded w-full"
                {...register("confirmPassword", {
                  required: "Confirme sua senha",
                  validate: (value) =>
                    value === watch("newPassword") || "Senhas diferentes",
                })}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message?.toString()}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition-colors"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

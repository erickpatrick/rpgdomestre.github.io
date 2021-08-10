import { useForm } from "react-hook-form";
import { useState } from "react";
import fetcher from "@/lib/faunaFetch";

export default function Form({ action, website }) {
  const [result, setResult] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const submitForm = async (data) => {
    try {
      fetcher(action, data);
      setResult(true);
      reset();
    } catch {
      setResult(false);
    }
  };

  return (
    <div className="mt-8 max-w-xl">
      {result && (
        <div className="mb-4 p-4 w-full bg-green-200 !text-base rounded-md">
          Obrigado por sua mensagem
        </div>
      )}
      <form
        onSubmit={handleSubmit(submitForm)}
        className="grid grid-cols-1 gap-6"
      >
        <label className="block">
          <span>Nome</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue=""
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="!text-base text-red-500 italic">
              This field is required
            </span>
          )}
        </label>
        <label className="block">
          <span>Email</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            defaultValue=""
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="!text-base text-red-500 italic">
              This field is required
            </span>
          )}
        </label>
        <label className="block">
          <span>Mensagem</span>
          <textarea
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            rows="5"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="!text-base text-red-500 italic">
              This field is required
            </span>
          )}
        </label>
        <input
          type="hidden"
          defaultValue={website}
          {...register("website", { required: true })}
        />
        <input type="hidden" defaultValue="" {...register("country")} />
        <button
          type="submit"
          className="inline-block px-2 py-1 font-bold bg-gray-300 rounded hover:bg-gray-600 hover:text-gray-100 !no-underline"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

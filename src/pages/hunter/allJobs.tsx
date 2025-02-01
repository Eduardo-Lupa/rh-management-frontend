import { formatDate, formatFloat } from "../../utils/formatUtils";

export const AllJobs = () => {
  // const { data: jobs } = useGetAllJobs();
  const jobs = [
    {
      id: 1,
      title: "Gerente de RH",
      description: "coordenar o setor de RH, criar eventos e contratações",
      initial_salary: 1400,
      final_salary: 2000,
      job_cost_value: 400,
      expires_at: "2025-05-31T23:59:59.999Z",
    },
    {
      id: 2,
      title: "testetet",
      description: "teste",
      initial_salary: 5000,
      final_salary: 6000,
      job_cost_value: 1000,
      expires_at: "2025-02-28T23:59:59.999Z",
    },
    {
      id: 4,
      title: "Gerente de vendas",
      description:
        "auxiliar nas estratégias de vendas e coordenar o setor para melhor performance",
      initial_salary: 10000,
      final_salary: 12000,
      job_cost_value: 2000,
      expires_at: "2025-04-28T23:59:59.999Z",
    },
    {
      id: 3,
      title: "Auxiliar de RH",
      description: "coordenar o setor de RH, criar eventos e contratações",
      initial_salary: 900.5,
      final_salary: 1600,
      job_cost_value: 300,
      expires_at: "2025-05-31T23:59:59.999Z",
    },
  ];

  return (
    <div className="bg-gray-100 w-full px-4 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4 pt-4">Novos Empregos</h1>
      {/* TODO criar edit com janela flutuante */}
      <div className="overflow-y-auto pr-1"></div>

      {jobs ? (
        jobs.map((job: any) => (
          <div key={job.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            {/* nome da vaga */}
            <h2 className="text-xl font-bold">{job.title}</h2>

            <div className="flex gap-4 mr-4">
              {/* descricao */}
              <p className="text-gray-600 basis-2/3 line-clamp-3">
                <span className="font-semibold mr-2">Descrição:</span>
                {job.description}
              </p>

              {/* barra lateral direita */}
              <div className="ml-auto">
                {/* salario */}
                <p className="text-gray-600 flex gap-1">
                  <div className="min-w-36 font-semibold">Salário:</div>
                  <div className="whitespace-nowrap">
                    R$ {formatFloat(job.initial_salary)} -{" "}
                    {formatFloat(job.final_salary)}
                  </div>
                </p>

                {/* custo do emprego */}
                <p className="text-gray-600 flex gap-1">
                  <div className="min-w-36 font-semibold">
                    Custo do Emprego:
                  </div>
                  {job.job_cost_value}
                </p>

                {/* data de expiracao */}
                <p className="text-gray-600 flex gap-1">
                  <div className="min-w-36 font-semibold">
                    Data de Expiração:
                  </div>
                  {formatDate(job.expires_at)}
                </p>

                {/* status */}
                <p className="text-gray-600 flex gap-1">
                  <div className="min-w-36 font-semibold">Status:</div>
                  {job.status}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Não há empregos cadastrados</p> // TODO criar loading e melhorar o nao há cadastros
      )}
    </div>
  );
};

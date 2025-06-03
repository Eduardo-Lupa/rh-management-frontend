import { useNavigate } from "react-router-dom";
import { useGetAllJobsAssigned } from "../../api/hooks";
import { formatDate, formatFloat } from "../../utils/formatUtils";

export const MyJobs = () => {
  const { data: jobs } = useGetAllJobsAssigned();
  const navigate = useNavigate();
  
  const addCandidateButton = (job_id: string | number) => {
    navigate(`/hunter/job/${job_id}`);
  };

  return (
    <div className="bg-gray-100 w-full px-4 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4 pt-4">Meus Empregos</h1>
      {/* TODO criar edit com janela flutuante */}
      <div className="overflow-y-auto pr-1"></div>

      {jobs && jobs.length != 0 ? (
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
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button
                className="ml-auto bg-gray-500 text-white px-2 py-1 rounded-md"
                onClick={() => addCandidateButton(job.id)}
              >
                informações
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="flex justify-center items-center h-full text-lg">
          Não há empregos cadastrados
        </p> // TODO criar loading e melhorar o nao há cadastros
      )}
    </div>
  );
};

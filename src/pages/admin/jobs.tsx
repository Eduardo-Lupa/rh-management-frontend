import { toast } from "react-toastify";
import { useGetAwaitingJobs, useJobChangeStatus } from "../../api/hooks";
import { formatDate, formatFloat } from "../../utils/formatUtils";

export const AdminJobs = () => {
  const { data: jobs, refetch: refetchJobs } = useGetAwaitingJobs();

  const { mutate: mutateJobChangeStatus } = useJobChangeStatus();

  const approvalButton = (jobId: number) => {
    mutateJobChangeStatus(
      { id: jobId, params: { status: "approved" } },
      {
        onSuccess: () => {
          refetchJobs();
          toast.success("Job aprovado com sucesso!");
        },
        onError: (e) => { 
          console.log(e);
          toast.error("Erro ao aprovar job!");
        },
      }
    );
  };

  const rejectButton = (jobId: number) => {
    mutateJobChangeStatus({id: jobId, params: { status: "rejected" }}, {
      onSuccess: () => {
        refetchJobs();
        toast.success("Job rejeitado com sucesso!");
      },
      onError: (e) => {
        console.log(e);
        toast.error("Erro ao rejeitar job!");
      },
    });
  };

  return (
    <div className="bg-gray-100 w-full px-4 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4 pt-4">Aceitar Empregos</h1>

      {/* TODO criar edit com janela flutuante */}
      <div className="overflow-y-auto pr-1">
        {jobs ? (
          jobs.map((job: any) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <div className="flex justify-between items-center gap-2">
                {/* nome da vaga */}
                <h2 className="text-xl font-bold">{job.title}</h2>
              </div>

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
                    <div>
                      R$ {formatFloat(job.initial_salary)} -{" "}
                      {formatFloat(job.final_salary)}
                    </div>
                  </p>

                  {/* custo do emprego */}
                  <p className="text-gray-600 flex gap-1">
                    <div className="min-w-36 font-semibold">
                      Custo do Emprego:
                    </div>
                    R$ {formatFloat(job.job_cost_value)}
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
                  
                  {/* Company */}
                  <p className="text-gray-600 flex gap-1">
                    <div className="min-w-36 font-semibold">Empresa:</div>
                    {job.company.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <button
                  className="ml-auto bg-green-500 text-white px-2 py-1 rounded-md"
                  onClick={() => approvalButton(job.id)}
                >
                  Aprovar
                </button>

                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={() => rejectButton(job.id)}
                >
                  Rejeitar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Não há empregos cadastrados</p> // TODO criar loading e melhorar o nao há cadastros
        )}
      </div>
    </div>
  );
};

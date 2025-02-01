import { useSearchParams } from "react-router-dom";
import { useGetJobsCompany } from "../../api/hooks";
import { formatDate, formatFloat } from "../../utils/formatUtils";
import { useEffect } from "react";

export const ViewJobsCompany = () => {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") || "1";

  const tabs = [
    { id: "1", label: "Todos", option: {} },
    {
      id: "2",
      label: "Aguardando Aprovação",
      option: { status: "awaiting_approval" },
    },
    { id: "3", label: "Em Andamento", option: { status: "approved" } },
    { id: "4", label: "Recusados", option: { status: "rejected" } },
    { id: "5", label: "Finalizados", option: { status: "finished" } },
  ];

  const { data: jobsCompany, refetch: refetchJobsCompany } = useGetJobsCompany(
    tabs.find((t) => t.id === tab)?.option
  );

  useEffect(() => {
    refetchJobsCompany();
  }, [tab, refetchJobsCompany]);

  // --------------------- tailwind css ---------------------
  // Utility function to get Tailwind classes based on status
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "awaiting_approval":
        return "bg-yellow-100 text-yellow-700 rounded-md";
      case "finished":
        return "bg-green-100 text-green-700 rounded-md";
      case "rejected":
        return "bg-red-100 text-red-700 rounded-md";
      case "approved":
        return "bg-blue-100 text-blue-700 rounded-md";
      default:
        return "bg-gray-100 text-gray-700 rounded-md";
    }
  };

  return (
    <div className="bg-gray-100 w-full px-4 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4 pt-4">Meus Empregos</h1>

      {/* Tab Navigation */}
      <div className="flex mb-4 border-b">
        {tabs.map((tabItem) => (
          <button
            key={tabItem.id}
            onClick={() => setParams({ tab: tabItem.id })}
            className={`px-4 py-2 mr-2 ${
              tab === tabItem.id
                ? "border-b-2 border-blue-500 text-blue-500 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tabItem.label}
          </button>
        ))}
      </div>

      {/* TODO criar edit com janela flutuante */}
      <div className="overflow-y-auto pr-1">
        {jobsCompany ? (
          jobsCompany.map((job: any) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <div className="flex justify-between items-center gap-2">
                {/* nome da vaga */}
                <h2 className="text-xl font-bold">{job.title}</h2>
                {/* status */}
                <div className={`h-4 rounded-md px-1 text-center text-xs ${getStatusClasses(job.status)}`}>
                  {tabs.find((t) => t.option?.status === job.status)?.label}
                </div>
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
    </div>
  );
};

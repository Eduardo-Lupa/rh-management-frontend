import { Header } from "./header";

export const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <h1 className="text-3xl font-bold text-center h-full">Home</h1>
    </div>
  );
};

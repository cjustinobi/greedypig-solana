import LatestGames from "@/components/shared/LatestGames";

const Games = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 justify-center p-6 lg:p-8 gap-8">
      <div className="col-span-full lg:col-span-2">
        <LatestGames />
      </div>
    </div>
  );
};

export default Games;

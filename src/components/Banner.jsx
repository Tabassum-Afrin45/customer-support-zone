
const ProgressTask = ({totalInProgressTask}) => {  
  return ( 
  <div className="flex flex-col lg:flex-row items-center gap-15">
    {/* in-progress task */}
    <div className="w-full bg-linear-to-r from-indigo-600 to-purple-500 rounded-2xl p-6 text-white border-none">
        <div className="text-xl text-center">
          In-Progress
          <h2 className="text-6xl font-bold">{totalInProgressTask}</h2>
      </div>
    </div>
    {/* resolved task */}
       <div className="w-full bg-linear-to-r from-green-400 to-green-800 rounded-2xl p-6 text-white border-none">
        <div className="text-xl text-center">
          Resolved
          <h2 className="text-6xl font-bold">{0}</h2>
      </div>
    </div>
    </div>
  );
};

export default ProgressTask;
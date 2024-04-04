import bases from "../../assets/bases.pdf";

//Display the bases for the competence in pdf 
function Bases() {

  return (
    <div className="flex flex-col items-center justify-center gap-8 xl:pt-10">
      <h1 className="px-5 text-4xl font-bold text-center md:text-5xl text-primary">Información sobre la competencia</h1>
      <object
        className="w-[90%] md:w-[80%] h-[100vh] "
        data={bases}
        type="application/pdf"

      ></object>
    </div>
  );
}

export default Bases;

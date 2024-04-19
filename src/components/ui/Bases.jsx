import bases from "../../assets/bases.pdf";

//Display the bases for the competence in pdf 
function Bases() {

  return (
    <div className="flex flex-col items-center justify-center gap-8 xl:pt-10">
      <h1 className="px-5 text-4xl font-bold text-center md:text-5xl text-primary">Información sobre la competencia</h1>
      <iframe
        src="https://drive.google.com/file/d/1fQK6JhNDL-Lqfw16ARrATB8-NOv7_KdV/preview" 
        className="w-[90%] md:w-[80%] h-[100vh]"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Bases;

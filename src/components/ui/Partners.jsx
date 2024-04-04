
const Partners = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-10">
      <h1 className="text-3xl font-bold text-center text-white md:text-5xl">
        Con el apoyo de
      </h1>
      <div className="grid grid-cols-2 justify-center gap-10 w-[80%] px-2 mt-10 xl:grid-cols-2 md:gap-20">
        <div className="flex justify-center">
            <img src="logo-fi-unju.png" className="h-[25px] md:h-[40px]" />
        </div>
        <div className="flex justify-center">
            <img src="logo-ejesa.png" className="h-[25px] md:h-[40px]"/>
        </div>
      </div>
    </div>
  )
}

export default Partners
const Footer = () => {
    const currentYear = new Date () .getFullYear();
  return (
    <footer className=" bg-gray-200 flex flex-col gap-2 items-center justify-center h-[100px]
     rounded-tl-[30%] rounded-tr-[30%] mt-300">
        <p className="font-bold  hover:text-red-700" > theoneste</p>
        <p>&copy; All rights reserved {currentYear}</p>

    </footer>
  )
}

export default Footer
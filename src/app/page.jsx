import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1 className="">{"<Hola bro, te invito a mi (cumpleaños || peda)>"}</h1>
      <h2 className="my-6">Fecha: 22 de Febrero de 8 a 12 PM</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <Image src="https://i.pinimg.com/originals/9e/79/0c/9e790c869a6939ad84d519c331cb86cb.gif"
          alt="nerd"
          width={200}
          height={200} />
        <Image src="https://img1.picmix.com/output/stamp/normal/9/7/3/8/198379_fd80b.gif"
          alt="sad"
          width={200}
          height={200} />
        <Image src="https://img1.picmix.com/output/stamp/normal/4/4/7/6/1776744_bbf7a.gif"
          alt="cursed"
          width={200}
          height={200} />
      </div>
      <h1 className="text-center mt-6">¡No faltes!</h1>
    </div>
  );
}

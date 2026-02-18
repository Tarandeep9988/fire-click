import CpsTester from "@/components/main/CpsTester";

const page = async ({ searchParams }: any) => {
  const params = await searchParams;
  const time = Number(params.time);
  console.log(time);
  return (
    <CpsTester time={time}/>
  )
}

export default page
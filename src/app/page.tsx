import CpsTester from "@/components/main/CpsTester"

type Props = {}

const page = (props: Props) => {
  return (
    <main className="h-screen w-screen select-none">
      <aside>

      </aside>

      <div className="h-screen overflow-y-auto">
        <CpsTester time={10}/>
      </div>
    </main>
  )
}

export default page
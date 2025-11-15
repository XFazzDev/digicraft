type Props = {
    title: string
    desc: string
  }
  
  export default function DivisionCard({ title, desc }: Props) {
    return (
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition">
        <h3 className="text-xl font-bold text-yellow-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{desc}</p>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition">
          Lihat Detail
        </button>
      </div>
    )
  }
  
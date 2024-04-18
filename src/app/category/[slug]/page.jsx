
import { items } from "../page"

export default function CategorySlug({params}) {
    const filteredCat = items.filter(item => item.category == params.slug)
    
  return (
    <div className="grid grid-cols-3 gap-4">
    {filteredCat.map(item =>(
        <section key={item.id} className={`text-black bg-contain h-[300px]`} style={{backgroundImage: `url(/id${item.id}.jpg)`}}>
            <h2>{item.title}</h2>
        </section>
    ))}
    
</div>
  )
}

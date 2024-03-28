import { items } from "../page"

export default function CategorySlug({params}) {
    const filteredCat = items.filter(item => item.category == params.slug)
  return (
    <div className="grid grid-cols-3 gap-4">
    {filteredCat.map(item =>(
        <section key={item.id} className={`bg-[url(/id${item.id}.jpg)] text-white bg-contain h-[300px]`}>
            <h2>{item.title}</h2>
        </section>
    ))}
</div>
  )
}

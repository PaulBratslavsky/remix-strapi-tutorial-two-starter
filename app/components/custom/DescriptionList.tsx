export function DescriptionList({ data }: { readonly data: any }) {
  return (
    <div className="my-4">
      {data.data.map((item: any) => (
        <DescriptionCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function DescriptionCard({ item }: { readonly item: any }) {
  return <h1>Need To Add Code Here</h1>
}

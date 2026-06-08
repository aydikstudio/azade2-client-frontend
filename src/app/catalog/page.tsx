async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function CatalogPage() {
  await sleep(3000);

  return <div>Каталог</div>;
}

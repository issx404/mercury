export async function fetchNews() {
  const res = await fetch("/api/news");
  if (!res.ok) throw new Error("Ошибка загрузки новостей");
  return res.json();
}

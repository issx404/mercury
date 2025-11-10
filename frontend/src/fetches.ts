export async function fetchNews() {
  const res = await fetch("http://localhost:5000/api/news");
  if (!res.ok) throw new Error("Ошибка загрузки новостей");
  return res.json();
}

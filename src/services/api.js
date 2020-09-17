const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchArticlesList = async () => {
  const articles = await fetch(`${API_URL}/posts`).then(res => res.json());

  return articles;
};

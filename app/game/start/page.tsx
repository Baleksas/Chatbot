async function getData() {
  const res = await fetch("https://api.github.com/users/Baleksas/repos");
  return res.json();
}

export default function start() {
  return <div>START PAGE</div>;
}

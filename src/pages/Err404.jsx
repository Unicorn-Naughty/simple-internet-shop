import useStore from "../hooks/useStore";
function Err404({ title = "Page not found" }) {
  const { page } = useStore();
  page.update(`${title} `);
  return <div>Not found</div>;
}
export default Err404;

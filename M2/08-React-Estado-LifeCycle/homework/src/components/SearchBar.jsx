export default function SearchBar({ onSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(e.target.ciudad.value);
      }}
    >
      <input type="text" name="ciudad" placeholder="Ciudad..." />
      <input type="submit" value="Agregar" />
    </form>
  );
}

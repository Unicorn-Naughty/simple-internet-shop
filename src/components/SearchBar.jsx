import { Box, TextField } from "@mui/material";
function SearchBar({ filterText, handleFilterChange }) {
  return (
    <div>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <TextField
          label="Search Products"
          width="40%"
          variant="outlined"
          value={filterText}
          onChange={handleFilterChange}
        ></TextField>
      </Box>
    </div>
  );
}
export default SearchBar;

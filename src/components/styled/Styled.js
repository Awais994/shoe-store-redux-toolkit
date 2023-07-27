import { styled } from "@mui/material/styles";
import { Badge, Box } from "@mui/material";

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    padding: "0 4px",
  },
}));

export const StyledBox = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

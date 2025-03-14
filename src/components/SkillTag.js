import React from "react";
import { Chip } from "@mui/material";

export default function SkillTag({ skill }) {
  return <Chip label={skill} sx={{ m: 0.1, bgcolor: "#FFFFFF" }} />;
}

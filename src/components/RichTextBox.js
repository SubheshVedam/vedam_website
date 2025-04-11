'use client'; // Add this if you're using the App Router

import { Box } from '@mui/material';
import DOMPurify from 'dompurify';

export default function RichTextBox({ html }) {
  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <Box
      sx={{
        fontSize: { xs: 11, sm: 18 },
        lineHeight: 1.6,
        '& a': {
          color: '#FB7F05',
          textDecoration: 'underline',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      }}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}

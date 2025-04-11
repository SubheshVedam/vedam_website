import { WidthContainer } from "@/components";

import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Link,
} from "@mui/material";

export default function Refund() {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F9F9F9",
      paddingTop: { xs: "0rem", md: "7rem" },
      paddingBottom: "3rem",
    }}
  >
      <WidthContainer>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: 1,
            borderRadius: 2,
            p: { xs: 3, sm: 6 },
          }}
        >
          <Typography variant="h4" color="#FB7F05" fontWeight="bold" mb={4}>
            Vedam Refund Policy
          </Typography>

          <Box sx={{ color: "text.secondary", display: "flex", flexDirection: "column", gap: 4 }}>
            {/* Overview */}
            <Box>
              <Typography variant="h5" color="secondary" fontWeight="bold" mb={2}>
                Overview
              </Typography>
              <Typography paragraph>
                This policy outlines the guidelines for refunding seat block fees for students at
                Vedam School of Technology. Students and parents are encouraged to review these
                terms carefully before making any decisions.
              </Typography>
              <Typography paragraph>
                Students must submit an official refund request via email to{" "}
                <Link href="mailto:connect@vedam.org" color="primary" underline="hover">
                  connect@vedam.org
                </Link>{" "}
                from their registered email ID. The request must include payment details and the
                reason for the refund.
              </Typography>
              <Typography paragraph>
                Refunds will be credited to a designated bank account, and students must provide
                accurate bank details with proof. The institution is not responsible for refunds
                processed with incorrect details provided by the student or parent.
              </Typography>
              <Typography paragraph>
                Special consideration refund requests will be processed only after verification and
                must be submitted within the deadline. Such requests must be made within 14 days of
                the official Class 12th result announcement date.
              </Typography>
              <Typography paragraph>VSAT Exam Fee is non-refundable.</Typography>
              <Typography paragraph>
              Semester fees, if paid, are refundable as per the{" "}
<Link href="https://www.ugc.gov.in/pdfnews/1654477_Fee-Refund-Policy-2024-25.pdf" color="primary" underline="hover">
  UGC Refund Policy 2024-25
</Link>{" "}
              </Typography>
              <Typography paragraph>
                Refunds, if approved, will be processed in 45 days from the approval date.
              </Typography>
            </Box>

            {/* General Refund Requests */}
            <Box>
              <Typography variant="h5" color="secondary" fontWeight="bold" mb={2}>
                General Refund Requests
              </Typography>
              <Typography fontWeight="bold" mb={1}>
                For any student who has made seat blocking fee payment:
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                  <TableHead sx={{ backgroundColor: "#eee" }}>
                    <TableRow>
                      <TableCell>Request Made</TableCell>
                      <TableCell>
                        Policy Guideline <br />
                        [% Refund of Seat Block Fee applicable]
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Within 7 days of Payment</TableCell>
                      <TableCell>90% Refund</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Between 8th and 30th Day</TableCell>
                      <TableCell>75% Refund</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Between 31st Day and the Orientation Start Day</TableCell>
                      <TableCell>50% Refund</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>From Orientation Day 1 Onwards</TableCell>
                      <TableCell>0% Refund</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* Special Consideration Refund Requests */}
            <Box>
              <Typography variant="h5" color="secondary" fontWeight="bold" mb={2}>
                Special Consideration Refund Requests
              </Typography>
              <Typography fontWeight="bold" mb={1}>
                For Students pursuing 12th Class in 2025 and If the student’s final Class 12th score
                is below 50%:
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                  <TableHead sx={{ backgroundColor: "#eee" }}>
                    <TableRow>
                      <TableCell>Criteria</TableCell>
                      <TableCell>
                        Policy Guideline <br />
                        [% Refund of Seat Block Fee applicable]
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        Requests made within 14 days of the official Class 12th result announcement
                        date.
                      </TableCell>
                      <TableCell>90% Refund</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* Assistance and Queries */}
            <Box>
              <Typography variant="h5" color="secondary" fontWeight="bold" mb={2}>
                Assistance and Queries
              </Typography>
              <Typography>
                For any clarification or difficulties, students may contact{" "}
                <Link href="mailto:connect@vedam.org" color="primary" underline="hover">
                  connect@vedam.org
                </Link>{" "}
                during working hours (Monday to Friday | 11 AM to 7 PM).
              </Typography>
            </Box>

            {/* Policy Compliance */}
            <Box>
              <Typography variant="h5" color="secondary" fontWeight="bold" mb={2}>
                Policy Compliance
              </Typography>
              <Typography>
                It is the responsibility of students to familiarize themselves with this policy.
                Failure to comply with these terms may result in administrative actions as deemed
                necessary by the institution.
              </Typography>
            </Box>

            {/* Policy Modification */}
            <Box>
              <Typography variant="h5" color="secondary" fontWeight="bold" mb={2}>
                Policy Modification
              </Typography>
              <Typography>
                Vedam School of Technology reserves the right to modify this policy at any time, in
                whole or in part, at its discretion. Amendments may be made due to legal changes or
                other necessary reasons.
              </Typography>
            </Box>

            {/* Note */}
            <Box>
              <Typography variant="body2" color="text.disabled" fontStyle="italic">
                Note: Refund, if approved, will be processed in 45 days from the approval date.
              </Typography>
            </Box>
          </Box>
        </Box>
      </WidthContainer>
    </Box>
  );
}

import { WidthContainer } from "@/components";
import { Box } from "@mui/material";

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
        <Box>
          <div className="bg-white shadow rounded-lg p-8">
            <h1 className="text-3xl font-bold text-primary mb-8">
              Vedam Refund Policy
            </h1>

            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Overview
                </h2>
                <p>
                  This policy outlines the guidelines for refunding seat block
                  fees for students at Vedam School of Technology. Students and
                  parents are encouraged to review these terms carefully before
                  making any decisions.
                </p>
                <p>
                  Students must submit an official refund request via email to{" "}
                  <a href="mailto:connect@vedam.org" className="text-primary underline">
                    connect@vedam.org
                  </a>{" "}
                  from their registered email ID. The request must include payment
                  details and the reason for the refund.
                </p>
                <p>
                  Refunds will be credited to a designated bank account, and students
                  must provide accurate bank details with proof. The institution is
                  not responsible for refunds processed with incorrect details
                  provided by the student or parent.
                </p>
                <p>
                  Special consideration refund requests will be processed only after
                  verification and must be submitted within the deadline. Such
                  requests must be made within 14 days of the official Class 12th
                  result announcement date.
                </p>
                <p>VSAT Exam Fee is non-refundable.</p>
                <p>
                  Semester fees, if paid, are refundable as per the UGC Refund Policy
                  2024-25 or any updates made to the same afterwards.
                </p>
                <p>
                  Refunds, if approved, will be processed in 45 days from the
                  approval date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  General Refund Requests
                </h2>
                <p className="mb-2">
                  <strong>For any student who has made seat blocking fee payment:</strong>
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-400 text-sm text-left">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="border px-4 py-2">Request Made</th>
                        <th className="border px-4 py-2">
                          Policy Guideline <br /> [% Refund of Seat Block Fee applicable]
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">Within 7 days of Payment</td>
                        <td className="border px-4 py-2">90% Refund</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Between 8th and 30th Day</td>
                        <td className="border px-4 py-2">75% Refund</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          Between 31st Day and the Orientation Start Day
                        </td>
                        <td className="border px-4 py-2">50% Refund</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">From Orientation Day 1 Onwards</td>
                        <td className="border px-4 py-2">0% Refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Special Consideration Refund Requests
                </h2>
                <p className="mb-2">
                  <strong>
                    For Students pursuing 12th Class in 2025 and If the student’s final
                    Class 12th score is below 50%:
                  </strong>
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-400 text-sm text-left">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="border px-4 py-2">Criteria</th>
                        <th className="border px-4 py-2">
                          Policy Guideline <br /> [% Refund of Seat Block Fee applicable]
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          Requests made within 14 days of the official Class 12th result
                          announcement date.
                        </td>
                        <td className="border px-4 py-2">90% Refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Assistance and Queries
                </h2>
                <p>
                  For any clarification or difficulties, students may contact{" "}
                  <a href="mailto:connect@vedam.org" className="text-primary underline">
                    connect@vedam.org
                  </a>{" "}
                  during working hours (Monday to Friday | 11 AM to 7 PM).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Policy Compliance
                </h2>
                <p>
                  It is the responsibility of students to familiarize themselves with
                  this policy. Failure to comply with these terms may result in
                  administrative actions as deemed necessary by the institution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Policy Modification
                </h2>
                <p>
                  Vedam School of Technology reserves the right to modify this policy
                  at any time, in whole or in part, at its discretion. Amendments may
                  be made due to legal changes or other necessary reasons.
                </p>
              </section>

              <section>
                <p className="text-sm text-gray-500 italic">
                  Note: Refund, if approved, will be processed in 45 days from the
                  approval date.
                </p>
              </section>
            </div>
          </div>
        </Box>
      </WidthContainer>
    </Box>
  );
}

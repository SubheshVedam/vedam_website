import { WidthContainer } from "@/components";
import { Box } from "@mui/material";

export default function RefundPolicy() {
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
              Refund Policy
            </h1>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Application Fee
                </h2>
                <p className="text-gray-700">
                  The application fee that the applicant pays to SET Education
                  Technology Private Limited [Vedam School of Technology] at the
                  time of filling the application is non-refundable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Tuition Fee Refund
                </h2>
                <p className="text-gray-700 mb-4">
                  A customer may choose to opt out of the program and request a
                  refund for the tuition fees paid. The refund will be processed
                  in accordance with the refund policy of the university campus
                  selected at the time of completing the application form.
                </p>
                <p className="text-gray-700">
                  To initiate the refund process, please send an email to
                  connect@vedam.org.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Campus-Specific Policies
                </h2>
                <p className="text-gray-700">
                  For more information on campus-specific refund policy, the
                  applicant is advised to visit the official website of the
                  respective university campus.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-700">
                  For any queries regarding the refund process, please contact
                  us at connect@vedam.org
                </p>
              </section>
            </div>
          </div>
        </Box>
      </WidthContainer>
    </Box>
  );
}
